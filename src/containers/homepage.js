import React from "react";
import { Link } from "react-router-dom";

function homepage(props) {
  return (
    <div>
      <div className="container" style={{ margintop: "30px" }}>
        <div className="row">
          <div className="col-sm-6">
            <div className="my-5">
              <div className="fakeimg">Fake Image</div>
              <Link to="/student-login" className="ml-auto mx-3">
                Student Login
              </Link>
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="my-5">
              <div className="fakeimg">Fake Image</div>
              <Link to="/teacher-login" className="ml-auto mx-3">
                Teacher Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homepage;
