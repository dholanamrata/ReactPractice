import logo from './logo.svg';
import Items from './list.js'
import RenderArray from './ArrayRender.js'

function App() {
  return (
    <div className="App">
      <RenderArray />
      <Items name="namrata " ispacked={true} />
      <Items name="karina " ispacked={false} />
      <Items name="karishma " ispacked={true} />
      <Items name="madhuri " ispacked={false} />
    </div>
   
  );
}

export default App;
