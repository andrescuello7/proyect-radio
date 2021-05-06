import Iframe from "react-iframe";

const Cover = () => {
  return (
    <div className="cover-page">
      <div className="cover-page-interno">
        <Iframe
          url="https://streaming.radiosenlinea.com.ar/cp/widgets/player/single/?p=8150"
          className="w-100 border-0"
        />
      </div>
      <div className="social">
        <a href="#">
          <span className="fab fa-facebook-f icon-favicon"></span>
        </a>
        <a href="#">
          <span className="fab fa-twitter icon-favicon"></span>
        </a>
        <a href="#">
          <span className="fab fa-instagram icon-favicon"></span>
        </a>
        <a href="#">
          <span className="fab fa-youtube icon-favicon"></span>
        </a>
      </div>
    </div>
  );
};
export default Cover;
