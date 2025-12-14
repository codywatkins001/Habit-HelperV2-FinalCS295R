export default function HabitItem({ habit, onMark }) {
  const doneToday = habit.history.length > 0;

  return (
    <div className="flex justify-between items-center p-3 bg-white rounded shadow">
      <span>{habit.name}</span>
      <button
        onClick={() => onMark(habit.id)}
        className={`px-3 py-1 rounded text-white ${
          doneToday ? "bg-green-600" : "bg-gray-400"
        }`}
      >
        {doneToday ? "Done" : "Mark"}
      </button>
      
    </div>
  );
}
