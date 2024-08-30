import img from '../images/Image-source1.png'
const BannerImg = () => {
  return (
    <div className="banner">
      <img src={img} alt="montagne" className="bannerImg" />
      
      
        <h1>Chez vous, partout et ailleurs
        </h1>
       
      
    </div>
  );
};

export default BannerImg;