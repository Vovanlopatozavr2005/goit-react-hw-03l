import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    return savedContacts ? JSON.parse(savedContacts).contacts : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    setContacts(prevContacts => [...prevContacts, newContact]);
		actions.resetForm();
  };

  const deleteClick = (contactId) => { 
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  
  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().required('Required')
  });

  const [filter, setFilter] = useState("");

  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify({ contacts }));
  }, [contacts]);
 
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} ContactSchema={ContactSchema} />
        <SearchBox inputValue={filter} handleChange={handleChange} />
        <ContactList filteredContacts={filteredContacts} deleteClick={deleteClick} />
      </div>
    </>
  );
};

export default App
