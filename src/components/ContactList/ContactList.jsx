import React from 'react'
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css';

const ContactList = ({ filteredContacts, deleteClick }) => {
  return (
    <div>
      <ul className={styles.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteClick={deleteClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList