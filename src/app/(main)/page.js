import Card from"../../../components/Card";
export default function Home() {
  return (
    <div style={{ display: "flex",justifyContent : "center",flexWrap: "wrap",gap :"20px",padding : "20px" }}>
      <Card title ="React Development" desc = "HTML, CSS, JavaScript,React"/>
      <Card title ="FullStack Development" desc = "MERN Stack"/>
      <Card title ="Software Testing" desc = "Automated and manual testing"/>
    </div>
  );
}
