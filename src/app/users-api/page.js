"use client";  //GET Request to fetch users from the API

//import {useEffect, useState} from "react";

// export default function UsersAPI() {
//   useEffect(() => {
//     fetch("/API/users")
//       .then(res => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Users (from API)</h1>
//         {users.map((user) => (
//             <p key={user.id}>
//              {user.name} - {user.email}
//           </p>
//         ))}
//     </div>
//   );
// }


//  const [name, setName] = useState("");
//  const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res= await fetch("/API/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, phone }),
//     });
//     const data = await res.json();
//     console.log( data);
//   };

//   return (
//     <div className="container">
//       <h1>Add User</h1>
//       <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="name"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="tel"
//             placeholder="phone"
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         <button type="submit">Create User</button>
//       </form>
//     </div>
//   );
// }

// import {useEffect, useState} from "react";
// export default function UsersAPI() {
// const [name, setName] = useState("");
//  const [email, setEmail] = useState("");
// const [Users,setUsers]= useState([]);
// const fetchUsers = () => {
//   fetch("/api/user")
//   .then(res=> res.json())
//   .then(data=>setUsers(data));
// };
// useEffect(()=>{
//   fetchUsers();
// },[]);
// const handleSubmit = async(e)=>{
//   e.preventDefault();
//   await fetch("/api/user",{
//     method : "POST",
//     headers : {
//       "content-Type": "application/json"
//     },
//     body:JSON.stringify({name,email})
//   });
//   setName(""); //clear input
//   setEmail("");
//   fetchUsers(); //RefreshData
// };
// return(
//   <div className="container">
//     <h1> Add User </h1>
//   <form onSubmit={handleSubmit}>
//     <input
//     type = "text"
//     placeholder="Name"
//     value = {name}
//     onChange={(e)=> setName(e.target.value)}
//     />
//     <input
//        type = "email"
//        placeholder="Email"
//        value={email}
//        onChange={(e)=> setEmail(e.target.value)}
//        />
//        <button type ="submit"> Submit </button>
//   </form>
//   <h2>UserList</h2>
//   {Users.map (user => (
//     <p key = {user._id}>
//       {user.name}-{user.email}
//     </p>
//   ))}
//   </div>
// );
//  }


import { useEffect, useState } from "react";

export default function UsersAPI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch Users
  const fetchUsers =() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add User  / Upadte
  const handleSubmit = async (e) => {
    e.preventDefault();
  if (editId) {
      await fetch("/api/user", {
        method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
  }else{
    //create 
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
  }

    setName("");   //clear input
    setEmail("");
    setEditId(null);
    fetchUsers();   //refresh Data
  };

  //Delete 
  const handleDelete = async (id) => {
    await fetch("/api/user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    fetchUsers();  
  };
// Edit
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user._id);
  };
  return (
    <div className="container">
       <div className="crud-card">
      <h1>CRUD User</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">{editId ? "Update" : "Add"} User</button>
      </form>

       {/*List*/}

      <h2>User List</h2>

      {users.map((user) => (
          <div key={user._id} style={{ marginBottom: "10px" }}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        ))}
    </div>
    </div>
  );
}