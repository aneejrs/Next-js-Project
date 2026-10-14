
export default function({ title, desc }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        width: "220px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

