import React from "react";

export default props => {

  const style = {
    left: 0,
    top: 450
  }

  return (
    <div>
      <div className="score" style={style}>Score: {props.score}</div>
    </div>
  );
};
