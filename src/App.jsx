
import React, { useState } from 'react';
import { ImageList } from "./components/ImageList";
import { NavBar } from "./components/NavBar";

function App() {
  const [imageCount, setImageCount] = useState(10);

  return (
    <div className="bg-dark text-white">
      <NavBar imageCount={imageCount} setImageCount={setImageCount}/>
      <ImageList imageCount={imageCount}/>
    </div>
  )
}

export default App
