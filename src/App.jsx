import { Body } from "./components/body/Body";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

const App = () => {
 
  return (
    <div className="wrapper flex align-items-center">
      <Header />  
      <Body />
      <Footer />
      <div className="purple-ball"></div>
      <div className="red-ball"></div>
      <div className="red-ball-second"></div>
      <div className="purple-light"></div>
      <div className="red-light"></div>
    </div>
  );
}

export {App};
