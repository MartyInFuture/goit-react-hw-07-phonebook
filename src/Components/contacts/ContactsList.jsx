import { useEffect } from 'react';
import Contact from './contactsList/Contact';
import { ContactsListStyled } from './ContactsListStyled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import * as contactsOperations from '../../redux/contacts/contacts-operations';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, []);

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
