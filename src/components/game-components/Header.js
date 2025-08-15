import React from "react";

export default function Header({ money }) {
  return (
    <header
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <div>Grow a City</div>
      <div>Pieniądze: ${money}</div>
      <div>Level: 1</div>
    </header>
  );
}
