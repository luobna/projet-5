import Thumb from "./Thumb";
import locations from "../json.json";

const Gallery = () => {
    return (
      <div className="gallery">
        <Thumb locations={locations}/>
      </div>
    );
  };
  export default Gallery;