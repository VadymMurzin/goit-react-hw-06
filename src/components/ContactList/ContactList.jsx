import Contact from '../Contact/Contact';
import css from './contactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(contact => {
        return contact.name;
      })
    : [];

  return (
    <ul className={css.container}>
      {filteredContacts.map(item => (
        <Contact key={item.id} contact={item} />
      ))}
    </ul>
  );
}

