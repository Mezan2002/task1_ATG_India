import "./App.css";
import ArticleCard from "./Components/ArticleCard/ArticleCard";
import Articles from "./Components/Articles/Articles";
import Banner from "./Components/Navbar/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Banner></Banner>
      <Articles></Articles>
      <ArticleCard></ArticleCard>
    </div>
  );
}

export default App;
