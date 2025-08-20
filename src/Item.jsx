import React from "react";

function Item(props) {
  const { id, completed, title, userId } = props;
  return (
    <div key={id} className={`card ${completed ? "done" : "pending"}`}>
      <h3>{title}</h3>
      <p>Status: {completed ? "✅ Completed" : "⏳ Pending"}</p>
      <small>
        ID: {id} | User: {userId}
      </small>
    </div>
  );
}

export default Item;
