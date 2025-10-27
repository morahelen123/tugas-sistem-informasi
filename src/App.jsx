import React from "react";

function App() {
  const handleButton = () => {
    alert("Tombol dipencet!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleButton}
        style={{
          backgroundColor: "#d795cbff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        KLIK
      </button>
    </div>
  );
}

export default App;
