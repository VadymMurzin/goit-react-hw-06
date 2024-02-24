import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBar from './components/SearchBar/SearchBar';

export default function App() {
  return (
    <div>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}

