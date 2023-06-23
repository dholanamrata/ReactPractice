import './UpdateObjWithSpreadOperator.css'
import { useState } from "react";

export default function FormGallary() {
  const [person, setPerson] = useState({
    name: "Namrata",
    title: "xcvcxgv",
    city: "Berlin",
    Image: "https://e0.pxfuel.com/wallpapers/355/72/desktop-wallpaper-cartoon-boy-iphone-cute-cartoon-boys-thumbnail.jpg",
  });

  function handleNameChange(e) {
    console.log(e);
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
  function handleTitleChange(e) {
    console.log(e);
    setPerson({
      ...person,
      title: e.target.value,
    });
  }
  function handleCityChange(e) {
    setPerson({
      ...person,
      city: e.target.value,
    });
  }
  function handleImageChange(e) {
    setPerson({
      ...person,
      Image: e.target.value,
    });
  }
  return (
    <div className="mainbody">
      <div className="innerbody">
        <h1>PHOTO GALLARY</h1>
        <label>
          Name:
          <input value={person.name} onChange={handleNameChange} />
        </label>
        <br/>
        <label>
          Title:
          <input value={person.title} onChange={handleTitleChange} />
        </label>
        <br/>
        <label>
          City:
          <input value={person.city} onChange={handleCityChange} />
        </label>
        <br/>
        <label>
          Image:<br/>
          <input
            
            value={person.Image}
            onChange={handleImageChange}
          />
        </label>
        <h2>
          {person.title}
          {" by "}
          {person.name}
          <br />
          {' - '}{person.city}
        </h2>
        <img src={person.Image} alt={person.title} />
      </div>
    </div>
  );
}
