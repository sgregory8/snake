import React from "react";

export default props => {

const style = {
  left: `${props.food[0]}%`,
  top: `${props.food[1]}%`
}

  return (
    <div>
        <div className="food-piece" style={style}></div>
    </div>
  );
};
