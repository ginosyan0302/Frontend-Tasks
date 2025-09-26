export const ToDoFilter = ({ currentFilter, setFilter }) => {

    const filters = ["all", "active", "completed"];

  return (
    <div style={{ margin: "20px 0" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{
            marginRight: "10px",
            backgroundColor: currentFilter === f ? "green" : "lightgray",
            color: currentFilter === f ? "white" : "black",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
};
