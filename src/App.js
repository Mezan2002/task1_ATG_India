import { useState } from "react";
import "./App.css";
import ArticleCard from "./Components/ArticleCard/ArticleCard";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Tabs from "./Components/Tabs/Tabs";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <Banner></Banner>
      <Tabs loggedIn={loggedIn}></Tabs>
      <ArticleCard loggedIn={loggedIn}></ArticleCard>
    </div>
  );
}

export default App;
