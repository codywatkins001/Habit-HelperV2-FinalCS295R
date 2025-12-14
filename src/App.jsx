import { useEffect, useState } from "react";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";
import Progress from "./components/Progress";

export default function App() {
  const [habits, setHabits] = useState(() => {
    return JSON.parse(localStorage.getItem("habits")) || [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const markHabit = (id) => {
    const today = new Date().toLocaleDateString();

    setHabits((prev) =>
      prev.map((h) =>
        h.id === id && !h.history.includes(today)
          ? { ...h, history: [...h.history, today] }
          : h
      )
    );
  };

  const deleteHabit = (id) => {
    console.log("Deleting habit with id:", id); // 🔹 debug
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const resetHabits = () => setHabits([]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold mb-4">Habit Helper</h1>
        <Progress habits={habits} />
        <AddHabit onAdd={addHabit} />
        <HabitList habits={habits} onMark={markHabit} onDelete={deleteHabit} />
        <button
          onClick={resetHabits}
          className="mt-4 w-full bg-black text-white py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
