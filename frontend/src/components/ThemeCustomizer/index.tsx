import React, { useState, useEffect, useCallback } from "react";

const ThemeCustomizer = () => {
  return (
    <React.Fragment>
      <h6 className="fw-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
        <span className="d-block py-1">Theme Settings</span>
      </h6>
      <div className="p-3">
        <div className="alert alert-warning" role="alert">
          <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-primary" id="resetBtn">
            Reset to Default
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThemeCustomizer;
