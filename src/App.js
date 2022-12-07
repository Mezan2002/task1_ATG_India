import "./App.css";
import Articles from "./Components/Articles/Articles";
import Banner from "./Components/Navbar/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Articles></Articles>
    </div>
  );
}

export default App;
