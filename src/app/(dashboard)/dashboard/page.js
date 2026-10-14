export default function dashboard() {
  return (
    <div>
      <h1 style= {{marginBottom: "20px"}}>Dashboard</h1>
      {}
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px"}}>
        <div className = "Card">
          <h2>Student 1</h2>
          <p>React development Course</p>
          <p>fee : 25000</p>
        </div>
        <div className = "Card">
          <h2>Student 2 </h2>
          <p>FullStack  Development Course </p>
          <p>fee : 30000</p>
        </div>
        <div className = "Card">
          <h2>Student 3  </h2>
          <p>Software Testing Course </p>
          <p>fee : 25000</p>
        </div>
      </div>
    </div>
  );
}