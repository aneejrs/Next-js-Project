"use client";
import { useEffect, useState } from "react";
import Card from "../../../../components/Card";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1> Users List </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        {users.map((user) => (
          <Card key={user.id} title={user.name} desc={user.email} />
        ))}
      </div>
    </div>
  );
}
