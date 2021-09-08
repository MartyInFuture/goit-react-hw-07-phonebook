import { SearchStyled } from './SearchStyled';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../../redux/search';
import { contactsSelectors } from '../../redux/contacts';

const Search = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const search = (e) => dispatch(searchActions.search(e.target.value));
  return (
    <SearchStyled>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <>
          <h3>Find contacts by name</h3>
          <input className="search" type="text" onChange={search} />
        </>
      )}
    </SearchStyled>
  );
};

export default Search;
