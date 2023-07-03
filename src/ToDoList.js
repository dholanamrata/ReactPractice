import './ToDoList.css'
import { useState } from "react";
import { useImmer } from "use-immer";
// const listItem = ["Namrata", "Nayan", "Dhruti"];
const initialarry = [
  { name: "namrata", id: 0 },
  { name: "kajal", id: 1 },
  { name: "pinal", id: 2 },
  { name: "sejal", id: 3 },
  { name: "gopi", id: 4 },
];
// const List = ({ data }) => {
//   const list = data.map((data, index) => {
//     return <li key={index}>{data}</li>;
//   });
//   return <ul>{list}</ul>;
// };

const Items = ({ data, settingarry }) => {
  const list = data.map((item) => (
    <div className='list'>
      <li key={item.id} >
        <span className='spantag'>{item.name}</span>
        {/* <i class="fa-solid fa-trash"></i> */}
        <input
          type="button"
          name="delete"
          value="Delete"
          onClick={() => {
            settingarry(
              data.filter((a) => {
                console.log(a.id);
                return a.id !== item.id;
              })
            );
          }}
        />
      </li>
      <br />
    </div>
  ));
  return <ol className='litage'>{list}</ol>;
};

const TodoList = () => {
  const [newid, setid] = useState(6);
  const [value, setvalue] = useState({ name: "", id: 6 });
  const [arry, setarry] = useState(initialarry);

  const handleclick = () => {
    setarry([...arry, value]);
    setvalue({ ...value, name: "" });
  };
  const handlechange = (e) => {
    setid(newid + 1);
    setvalue({ ...value, name: e.target.value, id: newid });
  };

  return (
    <div className='master'>
      <h1>To do list</h1>
      <input
        type="text"
        onChange={handlechange}
        placeholder="add items..."
      />
      <button class="custom-btn btn-7" onClick={handleclick}>Add</button>
      <Items data={arry} settingarry={setarry} />
    </div>
  );
};
export default TodoList;
