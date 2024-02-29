import Contact from '../Contact/Contact';
import css from './contactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filter.text);
  const filteredContacts = contacts.filter(contact => {
    return (contact.name && contact.name.toLowerCase().includes(filters.toLowerCase()));
  });


  return (
    <ul className={css.container}>
      {filteredContacts.map(item => (
        <Contact key={item.id} contact={item} />
      ))}
    </ul>
  );
}
