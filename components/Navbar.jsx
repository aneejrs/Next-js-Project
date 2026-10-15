import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "black", padding: "10px" }}>
      <Link href="/" style={{ color: "white", marginRight: "10px" }}>
        Home
      </Link>

      <Link href="/about" style={{ color: "white", marginRight: "10px" }}>
        About
      </Link>

      <Link href="/contact" style={{ color: "white", marginRight: "10px" }}>
        Contact
      </Link>

      <Link href="/dashboard" style={{ color: "white", marginRight: "10px" }}>
        Dashboard
      </Link>

      <Link href="/users" style={{ color: "white", marginRight: "10px" }}>
        Users-Client
      </Link>

      <Link href="/users-server" style={{ color: "white", marginRight: "10px" }}>
        Users-Server
      </Link>

      <Link href="/crud" style={{ color: "white", marginRight: "10px" }}>
         Crud
      </Link>
    </nav>
  );
}