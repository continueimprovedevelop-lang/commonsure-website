import { stateSavings } from "@/content/savings";

export default function SavingsTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-forest/15">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-forest text-cream">
          <tr>
            <th className="px-4 py-3 font-semibold">State</th>
            <th className="px-4 py-3 font-semibold">Median home</th>
            <th className="px-4 py-3 font-semibold">Typical HOA dues</th>
            <th className="px-4 py-3 font-semibold">Years 1–2 savings</th>
            <th className="px-4 py-3 font-semibold">At portfolio scale</th>
            <th className="px-4 py-3 font-semibold">Total at scale</th>
          </tr>
        </thead>
        <tbody>
          {stateSavings.map((row, i) => (
            <tr key={row.state} className={i % 2 === 1 ? "bg-cream-deep" : "bg-white"}>
              <td className="px-4 py-3 font-medium text-forest">
                {row.state}
                {row.pilot ? <span className="ml-2 text-xs font-normal text-gold">(pilot)</span> : null}
              </td>
              <td className="px-4 py-3">{row.medianHome}</td>
              <td className="px-4 py-3">{row.typicalDues}</td>
              <td className="px-4 py-3">{row.years1to2}</td>
              <td className="px-4 py-3">{row.atScale}</td>
              <td className="px-4 py-3 font-semibold">{row.totalAtScale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
