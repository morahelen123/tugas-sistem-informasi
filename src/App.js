import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // useEffect dijalankan setiap kali count berubah
  useEffect(() => {
    document.title = `Kamu klik ${count} kali`;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Tugas 3: Contoh useEffect Sederhana</h1>
      <p>Kamu klik tombol sebanyak: {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik Saya!</button>
    </div>
  );
}

export default App;
