import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CustomScrollbars from "../components/CustomScrollbars/CustomScrollbars";
import "./App.scss";
import Home from "./Admin/Home/Home";
import Setting from "./Admin/Setting/Setting";
import About from "./Admin/About/About";

function App({ persistor, onBeforeLift }) {
  useEffect(() => {
    handlePersistorState();
  });
  const [, setBootstrapped] = useState(false);
  const handlePersistorState = () => {
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (onBeforeLift) {
        Promise.resolve(onBeforeLift())
          .then(() => setBootstrapped(true))
          .catch(() => setBootstrapped(true));
      } else {
        setBootstrapped(true);
      }
    }
  };

  return (
    <>
      <BrowserRouter>
        <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/settings" exact element={<Setting />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </CustomScrollbars>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
