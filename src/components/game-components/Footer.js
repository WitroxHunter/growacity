import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#222",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <button>Map</button>
      <button>Inventory</button>
      <button>Shop</button>
      <button>Quests</button>
      <button>Settings</button>
    </div>
  );
}
