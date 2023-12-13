import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Routes } from "react-router-dom";
import PeopleManage from "../containers/Admin/PeopleManage";

class System extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="system-container">
          <div className="system-list">
            <Routes>
              <Route path="/" component={PeopleManage} />
              <Route
                component={() => {
                  return <Redirect to={"/"} />;
                }}
              />
            </Routes>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
