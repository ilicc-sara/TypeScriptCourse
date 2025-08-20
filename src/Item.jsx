import React from "react";

function Item(props) {
  const { id, completed, title, userId, activeId, setActiveId } = props;
  return (
    <div
      onClick={() => setActiveId(id)}
      className={`card ${completed ? "done" : "pending"} ${
        activeId === id ? "active" : ""
      }`}
    >
      <h3>{title}</h3>
      <p>Status: {completed ? "✅ Completed" : "⏳ Pending"}</p>
      <small>
        ID: {id} | User: {userId}
      </small>
    </div>
  );
}

export default Item;
