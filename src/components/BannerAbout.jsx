import img from '../images/imgAbout.png'

const BannerAbout = () => {
  return (
    <div className="bannerAbout">
      <img src={img} alt="montagnes" className="bannerImgAbout" />
    </div>
  );
};

export default BannerAbout;