// import logo from './logo.svg';
// import Items from './list.js'
// import RenderArray from './ArrayRender.js'
// import {Form} from './loginForm'
// import Gallary from "./ImageGallary";
// import FormGallary from './UpdateObjWithSpreadOptaror';
import TodoList from "./ToDoList";
import BucketList from './UpdateArrayInState'


function App() {
  return (
    <div className="App">
      {/* <RenderArray />
      <Items name="namrata " ispacked={true} />
      <Items name="karina " ispacked={false} />
      <Items name="karishma " ispacked={true} />
      <Items name="madhuri " ispacked={false} />
      <Form OnSubmit={formSubmit}/> */}
      {/* <Gallary /> */}
      {/* <FormGallary /> */}
      <TodoList />
      <BucketList />
    </div>
   
  );
}

//form submiton
const formSubmit = () => {
  return alert("Welcome");
}

export default App;
