import "./App.css";
import ArticleCard from "./Components/ArticleCard/ArticleCard";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Tabs from "./Components/Tabs/Tabs";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Banner></Banner>
      <Tabs></Tabs>
      <ArticleCard></ArticleCard>
    </div>
  );
}

export default App;
