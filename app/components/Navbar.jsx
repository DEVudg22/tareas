import Link from "next/link";

export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-5">
      <Link className="navbar-brand" href="/">
        Tareas App
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/tareas">
              Ver Tareas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
