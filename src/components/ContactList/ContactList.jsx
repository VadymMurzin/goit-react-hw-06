// ContactList.js
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './contactList.module.css';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <ul className={css.listStyle}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
