import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="erreur404">
      <h1>404</h1>
      <p>Oups! La page que <br/>vous demandez n'existe pas.</p>
      <ul>
        <NavLink to="/">
          <li>Retourner sur la page d’accueil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Error404;