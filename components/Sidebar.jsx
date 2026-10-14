import Link from "next/link";

export default function Sidebar() {
  return (
    <aside 
    style={{ width: "250px",
     backgroundColor: "#f0f0f0", 
     padding: "20px",
     height: "100vh"
     }}
     >
        <h2>Sidebar</h2>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            <li>
                <Link href="/services">Services</Link>
            </li>
        </ul>
    </aside>
  );
}
