import { stateSavings } from "@/content/savings";

export default function FeeLockTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-forest/15">
      <table className="w-full min-w-[420px] text-left text-sm">
        <thead className="bg-forest text-cream">
          <tr>
            <th className="px-4 py-3 font-semibold">State</th>
            <th className="px-4 py-3 font-semibold">5-year savings vs. escalating fees</th>
          </tr>
        </thead>
        <tbody>
          {stateSavings.map((row, i) => (
            <tr key={row.state} className={i % 2 === 1 ? "bg-cream-deep" : "bg-white"}>
              <td className="px-4 py-3 font-medium text-forest">
                {row.state}
                {row.pilot ? <span className="ml-2 text-xs font-normal text-gold">(pilot)</span> : null}
              </td>
              <td className="px-4 py-3 font-semibold">{row.fiveYearLock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
