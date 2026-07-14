import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">Jeonghye</NavLink>
      <nav>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experiences">Experiences</NavLink>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/labs">Labs</NavLink>
      </nav>
    </header>
  );
}
