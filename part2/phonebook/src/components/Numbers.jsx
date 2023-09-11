import React from "react";

const Numbers = ({ filteredPersons, handleDeletion }) => {
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDeletion(person.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Numbers;
