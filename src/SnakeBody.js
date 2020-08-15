import React from "react";

export default props => {
  return (
    <div>
      {props.snakeSegments.map((segment, i) => {
        const style = {
          left: `${segment[0]}%`,
          top: `${segment[1]}%`
        };
        return <div className="snake-segment" key={i} style={style}></div>;
      })}
    </div>
  );
};
