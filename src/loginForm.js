import './loginForm.css'
export const Form = ({OnSubmit}) => {
  return (
    <>
      <form OnSubmit={prevent}>
        <h1>Sign up</h1>
        <Input type="text" name="Enter Your E-mailid..." id="fortitle" />
        <Input type="password" name="Password" id="password" />
        <Button type="submit" name="Submit" submited={OnSubmit}/>
      </form>
    </>
  );
};

const Input = ({ name, id, type }) => {
  return (
    <p>
      <lable htmlFor={id}>{name}</lable>
      <br />
      <input type={type} id={id} />
    </p>
  );
};
const Button = ({ type, name, submited }) => {
  return (
    <>
      <button type={type} onClick={submited}>{name}</button>
    </>
  );
};
const prevent = (e) => {
    e.preventDefault();
    for (const iterator of e.target) {
      if (iterator.value === "") {
        continue;
      }
      console.log(iterator.value);
    }
  };

