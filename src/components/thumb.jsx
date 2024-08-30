import { NavLink } from "react-router-dom";



const Thumb = ({ locations }) => {

    return (
      <>
        {locations.map((location) => (
          <div key={`routePaths${location.id}`} className="thumb">
            <NavLink to={`/location/${location.id}`}>
              <img src={location.cover} alt={ `photo ${location.title}`} />
              <h2 key={`${location.id}`}>{location.title}</h2>
            </NavLink>
          </div>
        ))}
      </>
    );
  };
  export default Thumb;