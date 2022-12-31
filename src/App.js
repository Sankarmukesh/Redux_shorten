import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/shorten/Home";
import Login from "./components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import ShortenUrl from "./components/shorten/ShortenUrl";
import Contact from "./components/shorten/Contact";
function App() {
  const data = useSelector((state) => state.loginReducer.logined);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "CHECK" });
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{ padding: "20px",background:"#f1f3f4",margin:"2px 20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {data === false ? (
              <Route path="login" element={<Login />} />
            ) : (
              <Route path="/" element={<Home />} />
            )}
            {data === true ? (
              <>
                <Route path="shorten" element={<ShortenUrl />} />
                <Route path="contact" element={<Contact />} />
              </>
            ) : (
              <Route path="/" element={<Home />} />
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
