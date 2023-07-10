import { useState } from "react";

let intialState = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

const TransFornOfArray = () => {
  const [shape, setshape] = useState(intialState);
  const handleMoveDown = () => {
    const newShapeArray = shape.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return { ...shape, y: shape.y + 50 };
      }
    });
    setshape(newShapeArray);
  };
  const handleMoveUp = () => {
    const newShapeArray = shape.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return { ...shape, y: shape.y - 50 };
      }
    });
    setshape(newShapeArray);
  };

  const divisonList = shape.map((shape) => (
    <div
      key={shape.id}
      style={{
        background: "yellow",
        width: "50px",
        height: "50px",
        borderRadius: shape.type === "circle" ? "50%" : "",
        position: "absolute",
        top: shape.y,
        left: shape.x,
      }}
    ></div>
  ));
  return (
    <>
      <button onClick={handleMoveDown}>Move Circle Down</button>
      <button onClick={handleMoveUp}>Move Circle Up</button>
      {divisonList}
    </>
  );
};

export default TransFornOfArray;