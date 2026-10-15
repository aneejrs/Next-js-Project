
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    router.push("/crud");
  };
  return (

    <div className="container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Add </button>
      </form>
    </div>
  );
}
