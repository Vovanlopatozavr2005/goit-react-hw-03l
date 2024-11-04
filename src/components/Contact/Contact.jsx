import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from './Contact.module.css';

const Contact = ({ id, name, number, deleteClick }) => {
  return (
    <div className={styles.contactBloc}>
      <div className={styles.contactItem}>
        <p><span className={styles.icon}><BsFillPersonFill size={20}/></span>{name}</p>    
        <p><span className={styles.icon}><BsFillTelephoneFill /></span>{number}</p>
      </div>
      <button type='button' onClick={() => deleteClick(id)}>Delete</button>

    </div>
  )
}

export default Contact