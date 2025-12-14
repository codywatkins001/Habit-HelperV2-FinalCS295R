export default function Progress({ habits }) {
  const today = new Date().toLocaleDateString();

  const completedToday = habits.filter(h =>
    h.history.includes(today)
  ).length;

  const total = habits.length;
  const percent = total === 0 ? 0 : Math.round((completedToday / total) * 100);

  return (
    <div className="mb-4">
      <p className="mb-1 text-sm text-gray-700">
        Completed Today: {completedToday} / {total}
      </p>

      <div className="w-full bg-gray-200 rounded h-3">
        <div
          className="h-3 rounded bg-green-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
