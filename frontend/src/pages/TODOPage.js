import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoApp from "../components/TodoApp";

function TODOPage({backend}) {
  const navigate = useNavigate();
  console.log("backedn", backend);

  useEffect(() => {//Redirect to login page in case there is no token 
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <TodoApp backend={backend}/>;
}

export default TODOPage;
