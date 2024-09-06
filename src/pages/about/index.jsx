import BannerAbout from "../../components/BannerAbout";
import Collapsis from "../../components/Collapsis";
import collapsisJson from "../../assets/dataJson/collapsis.json";

const About = () => {
  return (
    <div className="about">
      <BannerAbout />
      {collapsisJson.map((collapsis, index) => (
        <Collapsis key={index} index={index} title={collapsis.title}>
          {collapsis.text}
        </Collapsis>
      ))}
    </div>
  );
};

export default About;