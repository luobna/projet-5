import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to ="/" className={({isActive}) => (isActive ? "nav-underline" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to ="/About" className={({isActive}) => (isActive ? "nav-underline" : "")}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;