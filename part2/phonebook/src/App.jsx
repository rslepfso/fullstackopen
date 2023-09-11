import { useState, useEffect } from "react";
import axios from "axios";
import numbers from "./services/numbers";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageClass, setMessageClass] = useState("");

  useEffect(() => {
    numbers.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newPhone,
    };

    const duplicates = persons.filter(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
    );

    if (duplicates.length > 0) {
      const confirmation = window.confirm(
        `${newPerson.name} is already added to phonebook! Do you want to update number?`
      );
      if (confirmation) {
        numbers.editNum(duplicates[0].id, newPerson).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== duplicates[0].id ? person : response.data
            )
          );
        });
      }
    } else {
      numbers.createNum(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewPhone("");
        setMessage(`Added ${response.data.name}`);
        setMessageClass("message");
        setTimeout(() => {
          setMessage(null);
          setMessageClass("");
        }, 3000);
      });
    }
  };

  const handleDeletion = (id) => {
    const confirmation = window.confirm(
      "Do you really want to delete this entry?"
    );

    if (confirmation) {
      numbers.deleteNum(id).catch((error) => {
        setMessage(`User already deleted`);
        setMessageClass("error");
        setTimeout(() => {
          setMessage(null);
          setMessageClass(null);
        }, 3000);
      });
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleFiltering = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <Message message={message} messageClass={messageClass} />
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFiltering={handleFiltering} />
      <Form
        handleAddPerson={handleAddPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Numbers
        filteredPersons={filteredPersons}
        handleDeletion={handleDeletion}
      />
    </div>
  );
};

export default App;
