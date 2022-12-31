import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Login from "../login/Login";


const Home = () => {

  const data = useSelector((state) => state.loginReducer.logined);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type:"CHECK"})
  }, [dispatch]);


  return (
    <div>
    {data===false ? 
    <Navigate to="login" />
    :
    <Navigate to="shorten" />
    }
  </div>
  )
};

export default Home;
