import { Button } from "react-bootstrap";
import "./HomePage.css";

//Components
import Cover from "../../components/cover-page/Cover";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <Cover />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
