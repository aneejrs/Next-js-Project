"use client";     
import { useEffect, useState } from "react";
import { useParams,useRouter } from "next/navigation";

export default function EditUser() {
  const { id } = useParams();
   const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch single user
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        const user = data.find(u => u._id === id);
        if (user) {
          setName(user.name);
          setEmail(user.email);
        }
      });
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify({ id, name, email }),
    });
    router.push("/crud");   // redirect

  };
  return (
    <div className="container">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       <button type="submit">Update</button>
      </form>
    </div>
  );
}


