import React from "react";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import Credits from "./components/Credits";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="px-4 md:px-32 lg:px-30 xl:px-60 2xl:px-96 ">
      <Profile />
      <Stats />
      <Gallery />
      <Credits />
    </div>
  );
}

export default App;
