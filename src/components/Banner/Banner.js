import React, { useState } from "react";
import "./Banner.css";

import { Button } from "@material-ui/core";
import Search from "../DatePickerSearch/Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  const handleDateButton = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={handleDateButton}
          className="banner__searchButton"
          varient="outlined"
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gams near you.
        </h5>
        <Button varient="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
