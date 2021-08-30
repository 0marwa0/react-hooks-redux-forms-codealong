import React from "react";
import React from "react";
import {useDispatch} from "react-redux"
function CreateTodo() {
  const dispatch =useDispatch()
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
   function handleSubmit(event) {
    event.preventDefault();
    dispatch(todoAdded(text));
  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" value={text} onChange={e=>handleChange(e)} />
        </p>
        <input type="submit" />
              <p>Form Text: {text}</p>
      </form>
    </div>
  );
}

export default CreateTodo;