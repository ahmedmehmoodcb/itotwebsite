import "../../App.css";
import NaveBar from "../component/NaveBar";
import CarosalSlider from "../component/dashboard/Slider";
import CardsComponent from "../component/cardsComponent/CardsComponent";
import Dashboard from "../Layout/Dashboard";
// import Footer from "../component/Footer/index";
function App() {
  return (
    <div className="App">
      <NaveBar />
      {/* <div className="card"> */}
      {/* <CarosalSlider /> */}
      <Dashboard />
    </div>
  );
}

export default App;
