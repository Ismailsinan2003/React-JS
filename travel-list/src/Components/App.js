import { useState } from "react";
import "../index.css";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function updateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleItems} />
      <PackingList
        items={items}
        onClearList={setItems}
        onDeleteitems={deleteItems}
        onUpdateitems={updateItems}
      />
      <Stats items={items} />
    </div>
  );
}
