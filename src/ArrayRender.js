const RenderArray = () => {
  const array = [1, 451, "radha"];
  const array1 = [<li>{"dhola"}</li>,<li>{"namrata"}</li>]
  const ArrayOfObject = [
    {
        name:"dhola",
        age:25
    },
    {
        name:"namrata",
        age:26
    }
  ]
  const PrintObject = ArrayOfObject.map((obj)=>{
    return <li>{obj.name}</li>
  })
  const PrintObject1 = ArrayOfObject.map((obj)=>{
    return <li>{obj.age}</li>
  })

  return <>
  <h2>Print list using array</h2>
  <ul>{array1}</ul> 
  <h2>Print Object using array</h2>
  <ul>{PrintObject}</ul> 
  <ul>{PrintObject1}</ul>        
</>
};
 
export default RenderArray;
