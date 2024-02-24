// Contact.js
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlicer';  // Use deleteContacts instead of deleteContact
import css from './contact.module.css';

export default function Contact ({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDeleteClick = () => {
    dispatch(deleteContacts(id));  // Use deleteContacts instead of deleteContact
  };

  return (
    <li className={css.liStyle}>
      <p className={css.pStyle}><BsFillTelephoneFill className={css.iconStyle}/>{name}</p>
      <p className={css.pStyle}><IoMdPerson className={css.iconStyle}/>{number}</p>
      <button className={css.btnStyle} onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

