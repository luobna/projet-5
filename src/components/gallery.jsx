import Thumb from "./thumb";
import locations from "../json.json";

const Gallery = () => {
    return (
      <div className="gallery">
        <Thumb locations={locations}/>
      </div>
    );
  };
  export default Gallery;