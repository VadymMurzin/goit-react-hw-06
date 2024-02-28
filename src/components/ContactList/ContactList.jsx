import Contact from '../Contact/Contact';
import css from './contactList.module.css';
import { useSelector } from 'react-redux';

// export default function ContactList() {
//   const contacts = useSelector(state => state.contacts);

//   const filteredContacts = Array.isArray(contacts)
//     ? contacts.filter(contact => {
//         return contact.name;
//       })
//     : [];

//   return (
//     <ul className={css.container}>
//       {filteredContacts.map(item => (
//         <Contact key={item.id} contact={item} />
//       ))}
//     </ul>
//   );
// }

// export default function ContactList() {
//   const contacts = useSelector(state => state.contacts);
//   const filters = useSelector(state => state.filter.text); // Доступ до властивості text
//   const filteredContacts = Array.isArray(contacts)
//     ? contacts.filter(contact => {
//         return contact.name.toLowerCase().includes(filters.toLowerCase()); // Використовуйте filters.text для фільтрації
//       })
//     : [];
//   return (
//     <ul className={css.container}>
//       {filteredContacts.map(item => (
//         <Contact key={item.id} contact={item} />
//       ))}
//     </ul>
//   );
// }

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filter.text);
  const filteredContacts = contacts.filter(contact => {
    return (contact.name && contact.name.toLowerCase().includes(filters.toLowerCase()));
  });


//   console.log('Contacts:', contacts);
// console.log('Filters:', filters);
// console.log('All Contacts:', contacts);

  // const filteredContacts = Array.isArray(contacts)
  // ? contacts.filter(contact => {
  //     return (
  //       contact.name &&
  //       filters &&
  //       contact.name.toLowerCase().includes(filters.toLowerCase())
  //     );
  //   })
  // : [];

  // console.log('Filtered Contacts:', filteredContacts);

  return (
    <ul className={css.container}>
      {filteredContacts.map(item => (
        <Contact key={item.id} contact={item} />
      ))}
    </ul>
  );
}
