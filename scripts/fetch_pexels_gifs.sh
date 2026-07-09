#!/usr/bin/env bash
# Download Pexels videos and convert to optimized GIFs for commonsure_website.
# Usage: bash scripts/fetch_pexels_gifs.sh
# Manual fallback: drop MP4s in public/gifs/sources/{id}.mp4 and re-run.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GIF_DIR="$ROOT/public/gifs"
SRC_DIR="$GIF_DIR/sources"
TMP_DIR="${TMPDIR:-/tmp}/commonsure-pexels-$$"

DURATION="${DURATION:-5}"
FPS="${FPS:-8}"
SCALE="${SCALE:-640}"
MAX_COLORS="${MAX_COLORS:-96}"

CURL_OPTS=(
  -fsSL
  -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  -H "Referer: https://www.pexels.com/"
)

# pexels_id:output_filename
MANIFEST=(
  "26547062:office-collaboration.gif"
  "7055344:desk-calculator.gif"
  "27914775:garden-sprinkler.gif"
  "5210723:irrigation.gif"
  "32388310:vendor-landscaping.gif"
  "6969071:vendor-snow-removal.gif"
  "4198816:vendor-roofing.gif"
  "27355475:vendor-asphalt.gif"
  "6474086:vendor-painting.gif"
  "18780266:vendor-electrical.gif"
  "7584762:vendor-plumbing.gif"
  "7821854:vendor-insurance.gif"
)

mkdir -p "$SRC_DIR" "$TMP_DIR" "$GIF_DIR"

download_mp4() {
  local id="$1"
  local dest="$2"
  if [[ -f "$dest" && -s "$dest" ]]; then
    echo "  using cached $dest"
    return 0
  fi
  local url="https://www.pexels.com/download/video/${id}/"
  if curl "${CURL_OPTS[@]}" "$url" -o "$dest"; then
    return 0
  fi
  echo "  download failed for id=$id"
  echo "  manual: $url"
  echo "  save as: $SRC_DIR/${id}.mp4"
  return 1
}

convert_to_gif() {
  local input="$1"
  local output="$2"
  ffmpeg -y -i "$input" -t "$DURATION" \
    -vf "fps=${FPS},scale=${SCALE}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=${MAX_COLORS}[p];[s1][p]paletteuse" \
    -loop 0 "$output" -loglevel error
}

resolve_input() {
  local id="$1"
  local tmp_mp4="$TMP_DIR/${id}.mp4"
  local cached_mp4="$SRC_DIR/${id}.mp4"

  if [[ -f "$cached_mp4" && -s "$cached_mp4" ]]; then
    echo "$cached_mp4"
    return 0
  fi

  if download_mp4 "$id" "$tmp_mp4"; then
    cp "$tmp_mp4" "$cached_mp4"
    echo "$cached_mp4"
    return 0
  fi

  return 1
}

echo "Commonsure Pexels GIF fetch — ${#MANIFEST[@]} assets"
echo "Settings: duration=${DURATION}s fps=${FPS} scale=${SCALE}px colors=${MAX_COLORS}"
echo ""

failed=0
for entry in "${MANIFEST[@]}"; do
  id="${entry%%:*}"
  outfile="${entry##*:}"
  outpath="$GIF_DIR/$outfile"

  echo "[$id] -> $outfile"

  if ! input="$(resolve_input "$id")"; then
    echo "  SKIP: no source for $id"
    failed=$((failed + 1))
    continue
  fi

  convert_to_gif "$input" "$outpath"
  size="$(du -h "$outpath" | cut -f1)"
  echo "  OK ($size)"
done

rm -rf "$TMP_DIR"

echo ""
if [[ "$failed" -gt 0 ]]; then
  echo "Completed with $failed failure(s). Drop missing MP4s in $SRC_DIR and re-run."
  exit 1
fi

echo "All GIFs written to $GIF_DIR"
ls -lh "$GIF_DIR"/*.gif | awk '{print $5, $9}'
