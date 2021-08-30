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
          <input type="text" value={text} onChange={e=>handleChange(e)} />
        </p>
        <input type="submit" />
              <p>Form Text: {text}</p>
      </form>
    </div>
  );
}

export default CreateTodo;