import React from "react";
import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div className="smurf">
      <h2>{props.smurf.name}</h2>
      <h3>{props.smurf.age}</h3>
      <h3>{props.smurf.height}</h3>
    </div>
  );
};

export default connect()(Smurf);
