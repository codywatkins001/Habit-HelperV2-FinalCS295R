import HabitItem from "./HabitItem";

export default function HabitList({ habits, onMark }) {
  if (habits.length === 0) {
    return <p className="text-gray-500">No habits yet</p>;
  }

  return (
    <div className="space-y-2">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit}  onMark={onMark} />
      ))}
    </div>
  );
}
