import React from "react";
import { Link, useHistory } from "react-router-dom";

function homestu() {
  return (
    <div>
      <h1>Student Homepage</h1>

      <div className="col-12 col-md-4 my-2">
        <img className="card-img-top" />
        <div className="card-body">
          <img
            className="card-img-top"
            src="https://yt3.ggpht.com/ytc/AAUvwniZgi1B2MEAMI1hrYuk1AFy_9fv2cZDkaCNBop5AA=s900-c-k-c0x00ffffff-no-rj"
            alt="class10"
            style={{ height: "250px", width: "250px" }}
          />
          <h4 className="card-title">Class 10</h4>

          <Link to="/stutable" className="stretched-link"></Link>
        </div>
      </div>
    </div>
  );
}

export default homestu;
