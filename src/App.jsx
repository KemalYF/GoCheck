import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/Checklist";
import Stats from "./components/Stats";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems([...listItems, item]);
  }

  function handleDeleteItem(id) {
    setListItems(listItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function handleClearItems() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) {
      setListItems(listItems.filter((item) => !item.done));
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <CheckList
        items={listItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={listItems} />
    </div>
  );
}

export default App;
