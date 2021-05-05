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
    </div>
  );
};
export default Cover;
