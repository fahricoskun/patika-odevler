import { useState } from "react";

const initialFormValues = { activity: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.activity === "") {
      return false;
    }

    addContact([...contacts, form]);

    setForm(initialFormValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-area">
        <input
          name="activity"
          placeholder="What needs to be done?"
          value={form.activity}
          onChange={onChangeInput}
        ></input>
          <button className="btn-add">Add</button>
      </div>
    </form>
  );
}

export default Form;
