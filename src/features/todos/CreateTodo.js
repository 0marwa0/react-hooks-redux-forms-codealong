import React from "react";
import React from "react";

function CreateTodo() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <form>
        <p>
          <label>add todo</label>
          <input type="text" onChange={e=>handleChange(e)} />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTodo;