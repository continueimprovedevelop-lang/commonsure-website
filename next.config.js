const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  // Avoid Next 15.5 devtools segment-explorer manifest errors when .next is rebuilt
  // while `next dev` is running (see __webpack_modules__[moduleId] is not a function).
  devIndicators: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

module.exports = nextConfig;
