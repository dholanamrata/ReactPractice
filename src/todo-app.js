import { useState } from "react";

const List = ({ arry, setarry, checkcompleted }) => {
const list = arry.map((x) => (
    <li key={x.id}>
      <input
        type="checkbox"
      />
      {x.task}
      &nbsp;
      <button>delete</button>
      <button>edit</button>
    </li>
  ));
return(
    <>
    {list}
    </>
)    
}
export default List;