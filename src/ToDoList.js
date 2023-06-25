import { useState } from "react";
const listItem = ["Namrata", "Nayan", "Dhruti"];

const List = ({ data }) => {
  const list = data.map((data, index) => {
    return <li key={index}>{data}</li>;
  });
  return <ul>{list}</ul>;
};

const TodoList = () => {
  const [value, setvalue] = useState("");
  const [arry, setarry] = useState(listItem);

  const handlechange = (e) => {
    setvalue(e.target.value);
  };

  const handleclick = () => {
    setarry([...arry, value]);
    setvalue("");
  };
  return (
    <>
      <h1>To do list</h1>
      <input
        type="text"
        value={value}
        onChange={handlechange}
        placeholder="add items..."
      />
      <button onClick={handleclick}>Add</button>
      <List data={arry} />
    </>
  );
};
export default TodoList;
