import { ContactStyled } from './ContactStyled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(contactsOperations.removeContact(id));
  };

  return (
    <ContactStyled>
      <p className="text">
        {name}: {phone}
      </p>
      <button
        className="submit-button"
        type="button"
        value={id}
        onClick={deleteItem}
      >
        Delete
      </button>
    </ContactStyled>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
