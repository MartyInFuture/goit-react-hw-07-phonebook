import { useEffect } from 'react';
import Contact from './contactsList/Contact';
import { ContactsListStyled } from './ContactsListStyled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactsList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.length !== 0 && (
        <ContactsListStyled>
          <ul className="list">
            {filteredContacts.map(({ id, name, phone }) => {
              return <Contact key={id} name={name} phone={phone} id={id} />;
            })}
          </ul>
        </ContactsListStyled>
      )}
    </>
  );
};

export default ContactsList;
