import React from "react";
import { connect } from "react-redux";
import Sidenav from "../../../components/Sidenav/Sidenav";
import Box from "@mui/material/Box";

import Navbar from "../../../components/Navbar/Navbar";
function About() {
  return (
    <>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
