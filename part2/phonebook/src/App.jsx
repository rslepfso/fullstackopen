import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

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
      alert(`${newPerson.name} is already added to phonebook!`);
      return;
    }

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewPhone("");
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
      <Numbers filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
