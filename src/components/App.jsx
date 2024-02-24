import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBar from "./SearchBar/SearchBar";

export default function App() {
  return (
    <div>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}
