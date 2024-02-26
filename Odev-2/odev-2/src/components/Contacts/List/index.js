import React from "react";

function List({ contacts }) {
  return (
    <div>
      <ul className="list">
        {contacts.map((contact, i) => (
          <li key={i}>
            <span>{contact.activity}</span> 
            <button className="btn-rmv">Remove</button>
            </li>
        ))}
      </ul>

      <p>Total Contacts ({contacts.length})</p>
    </div>
  );
}

export default List;