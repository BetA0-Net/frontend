import React from "react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
// with draw
import Withdraw from "./components/withdraw/Withdraw";
import MultiPlayer from "./components/multiPlayer/MultiPlayer";

function App() {
  return (
    <div className="AppMain--wrapperBox">
      <Header />
      <Toaster
        position="bottom-left"
        reverseOrder={true}
        toastOptions={{
          style: {
            marginRight: "2rem",
            borderRadius: 0,
            padding: "16px",
            color: "#000",
            background: "#7AE7FF",
          },
        }}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/multiPlayer" element={<MultiPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
