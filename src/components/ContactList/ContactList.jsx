import Contact from '../Contact/Contact';
import css from './contactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filters = Array.isArray(contacts)
    ? contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
    : [];

  console.log(contacts);

  return (
    <div>
      <ul className={css.container}>
        {filters.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <Contact contacts={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

