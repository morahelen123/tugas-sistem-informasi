import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) 
      .then((data) => {
        setUsers(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Gagal mengambil data API:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>📋 Data Pengguna (Tugas 4)</h1>

      {loading ? (
        <p>⏳ Sedang mengambil data...</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            borderCollapse: "collapse",
            margin: "20px auto",
            width: "80%",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Kota</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;