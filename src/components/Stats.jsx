function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <span>📝Kamu punya 0 catatan dan 0 yang dichecklist (0%)✅</span>
      </footer>
    );
  }

  const totalItems = items.length;
  const totalDoneItems = items.filter((item) => item.done).length;
  const progress = Math.round((totalDoneItems / totalItems) * 100);

  return (
    <footer className="stats">
      <span>
        {progress === 100
          ? "✅ Kamu sudah melakukannya semua"
          : `📝Kamu punya ${totalItems} catatan dan ${totalDoneItems} yang dichecklist (${progress}%)✅`}
      </span>
    </footer>
  );
}

export default Stats;
