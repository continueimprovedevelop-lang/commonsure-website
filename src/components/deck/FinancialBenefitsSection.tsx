"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { stateSavings } from "@/content/savings";
import { illustrativeDisclaimer } from "@/content/site";
import SectionHeading from "./SectionHeading";
import DisclosureBlock from "@/components/DisclosureBlock";

function parseRange(text: string): [number, number] {
  const nums = text.match(/[\d,]+/g)?.map((n) => Number(n.replace(/,/g, ""))) ?? [0, 0];
  if (nums.length === 1) return [nums[0], nums[0]];
  return [nums[0], nums[1] ?? nums[0]];
}

function formatCurrency(value: number): string {
  return `$${Math.round(value).toLocaleString()}`;
}

export default function FinancialBenefitsSection() {
  const [stateIndex, setStateIndex] = useState(0);
  const active = stateSavings[stateIndex];
  const medianValue = useMemo(() => Number(active.medianHome.replace(/[^0-9]/g, "")), [active]);
  const [homeValue, setHomeValue] = useState(medianValue);

  useEffect(() => {
    setHomeValue(medianValue);
  }, [medianValue]);

  const scale = medianValue > 0 ? homeValue / medianValue : 1;

  const chartData = useMemo(() => {
    const [y1lo, y1hi] = parseRange(active.years1to2);
    const [tlo, thi] = parseRange(active.totalAtScale);
    const [flo, fhi] = parseRange(active.fiveYearLock);
    return [
      { name: "Years 1–2", low: Math.round(y1lo * scale), high: Math.round(y1hi * scale) },
      { name: "At scale (annual)", low: Math.round(tlo * scale), high: Math.round(thi * scale) },
      { name: "5-year lock total", low: Math.round(flo * scale), high: Math.round(fhi * scale) },
    ];
  }, [active, scale]);

  return (
    <section id="savings" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="The numbers"
          title="Financial benefits, by state"
          description="Illustrative annual savings per household under the Five-Year Certainty Program. Choose a state and adjust the home value to see the estimate update live."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {stateSavings.map((row, i) => (
            <button
              key={row.state}
              type="button"
              onClick={() => setStateIndex(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                i === stateIndex ? "bg-forest text-cream" : "border border-forest/20 text-forest hover:bg-forest/5"
              }`}
            >
              {row.state}
              {row.pilot ? " (pilot)" : ""}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-md">
          <label htmlFor="home-value" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-forest/70">
            <span>Your community&rsquo;s median home value</span>
            <span className="text-forest">{formatCurrency(homeValue)}</span>
          </label>
          <input
            id="home-value"
            type="range"
            min={medianValue * 0.5}
            max={medianValue * 1.5}
            step={5000}
            value={homeValue}
            onChange={(e) => setHomeValue(Number(e.target.value))}
            className="mt-2 w-full accent-forest"
          />
        </div>

        <motion.div
          key={active.state}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center"
        >
          <div className="h-72 rounded-xl border border-forest/10 bg-cream-deep p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2E463620" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#1A1A1A" }} />
                <YAxis tick={{ fontSize: 11, fill: "#1A1A1A" }} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="low" name="Low estimate" fill="#3E5C48" radius={[4, 4, 0, 0]} isAnimationActive />
                <Bar dataKey="high" name="High estimate" fill="#C8912A" radius={[4, 4, 0, 0]} isAnimationActive />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-forest/10 bg-cream-deep p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">
              {active.state}
              {active.pilot ? " — Pilot" : ""}
            </p>
            <p className="mt-2 text-2xl font-bold text-forest">
              {formatCurrency(chartData[1].low)}&ndash;{formatCurrency(chartData[1].high)}
              <span className="ml-1 text-sm font-medium text-charcoal/60">/yr at scale</span>
            </p>
            <dl className="mt-4 space-y-2 text-sm text-charcoal/80">
              <div className="flex justify-between">
                <dt>Typical HOA dues</dt>
                <dd className="font-semibold text-forest">{active.typicalDues}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Years 1–2 savings</dt>
                <dd className="font-semibold text-forest">
                  {formatCurrency(chartData[0].low)}&ndash;{formatCurrency(chartData[0].high)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>5-year lock savings</dt>
                <dd className="font-semibold text-forest">
                  {formatCurrency(chartData[2].low)}&ndash;{formatCurrency(chartData[2].high)}
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>

        <div className="mt-6">
          <DisclosureBlock text={illustrativeDisclaimer} />
        </div>
      </div>
    </section>
  );
}
