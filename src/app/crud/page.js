
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setError("");

      const res = await fetch("/api/user");

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Unable to load users. Please check the API and MongoDB connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch("/api/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Failed to delete user");
      }

      await fetchUsers();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Unable to delete user.");
    }
  };

  return (
    <main className="container">
      <h1>Users</h1>

      <Link href="/crud/add">Add User</Link>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>{error}</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            <strong>{user.name}</strong> - {user.email}

            <div style={{ marginTop: "5px" }}>
              <Link href={`/crud/edit/${user._id}`}>Edit</Link>

              <button
                onClick={() => handleDelete(user._id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  );
}

