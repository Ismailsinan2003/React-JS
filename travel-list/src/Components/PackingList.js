import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteitems,
  onUpdateitems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sorteditems;

  if (sortBy === "input") sorteditems = items;

  if (sortBy === "description")
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleClearlist() {
    const confirmed = window.confirm("Are you sure you want to clear the list");

    if (confirmed) onClearList([]);
  }

  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteitems={onDeleteitems}
            onUpdateitems={onUpdateitems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed item</option>
        </select>
        <button onClick={handleClearlist}>Clear list</button>
      </div>
    </div>
  );
}
