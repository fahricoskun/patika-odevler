import { useState, useEffect } from "react";

import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      activity: "learning code",
    },
    {
      activity: "go shopping",
    },
    {
      activity: "go for a walk",
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <Form addContact={setContacts} contacts={contacts}/>
      <List contacts={contacts}/>
    </div>
  );
}

export default Contacts;