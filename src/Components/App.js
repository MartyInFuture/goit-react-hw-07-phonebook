import Phonebook from './phonebook/Phonebook';
import ContactsList from './contacts/ContactsList';
import Search from './search/Search';

const App = () => {
  return (
    <div>
      <Phonebook />
      <h2>Contacts</h2>
      <Search />
      <ContactsList />
    </div>
  );
};

export default App;
