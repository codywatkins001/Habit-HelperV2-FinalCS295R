import { useState } from "react";

export default function AddHabit({ onAdd }) {
  const [name, setName] = useState("");

  // Simple URL validation function
  const isValidURL = (str) => {
    try {
      const url = new URL(str);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  };

  const submit = () => {
    if (!name.trim()) return;

    // Block if name looks like a URL
    if (isValidURL(name)) {
      alert("Adding direct links is not allowed!");
      return;
    }

    onAdd({
      id: Date.now(),
      name,
      history: [],
    });

    setName("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New habit"
        className="flex-1 border p-2 rounded"
      />
      <button onClick={submit} className="bg-blue-600 text-white px-4 rounded">
        Add
      </button>
    </div>
  );
}
