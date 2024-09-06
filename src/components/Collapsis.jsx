import { useState } from "react";
import svgFleche from "../images/arrow (1).svg";
import PropTypes from "prop-types"

const Collapsis = ({title,children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`collapsis ${isVisible ? "visible" : ""}`}>
      <div className="headCollapsis" onClick={handleToggle}>
        <h3>{title}</h3>
        <img
          src={svgFleche}
          alt="flèche"
          className={`arrow ${isVisible ? "down" : ""}`}
        />
      </div>
      <div className={`paragraph ${isVisible ? "animate" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Collapsis.propTypes ={
  title : PropTypes.string.isRequired,
  children : PropTypes.node.isRequired,
};

export default Collapsis;