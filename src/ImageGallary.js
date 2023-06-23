import './ImageGallary.css'
import { useState } from "react";
import { arry } from "./ImageArry";

export default function Gallary() {
  const [index, setindex] = useState(0);
  const [Show, setshow] = useState(false);
  const lastindex = index === arry.length - 1;

  const NewArryDate = () => {
    if (index < arry.length - 1) {
      setindex(index + 1);
    }
    if (index === arry.length - 1) {
      setindex(0);
    }
    //hide and show condition--->true and false
    if (Show === true) {
      setshow(!Show);
    }
  };
  const showHandling = (data) => {
    setshow(!Show);
  };
  const resetHandling = () => {
    setindex(0);
  };
  return (
    <div className='maincontainer'>
      <div className='innercontainer'>
      <h1>PHOTO GALLARY</h1>
      {lastindex ? (
        <button onClick={resetHandling}>Reset</button>
      ) : (
        <button onClick={NewArryDate}>Next</button>
      )}

      <h2>
        {arry[index].name} by {arry[index].artist}
      </h2>
      <p>
       [{index} of {arry.length}]  
      </p>
      <button onClick={showHandling}>{Show ? "hide" : "show"}</button>
      <br />
      {Show && <p className='description'>{arry[index].description}</p>}
      <br />
      <img className="imggallary" src={arry[index].url} atl={arry[index].alt} />
      </div>
    </div>
  );
}
