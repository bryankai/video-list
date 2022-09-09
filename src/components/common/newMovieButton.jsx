import React from "react";
import { Link } from "react-router-dom";

const NewMovieButton = () => {
  return (
    <Link to="/movies/new">
      <button className="btn btn-primary">New Movie</button>
    </Link>
  );
};

export default NewMovieButton;
