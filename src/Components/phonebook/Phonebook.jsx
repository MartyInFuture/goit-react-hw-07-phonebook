import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PhonebookStyled } from './PhonebookStyled';
import { v4 as uuidv4 } from 'uuid';
import { contactsOperations } from '../../redux/contacts';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inputId] = useState(uuidv4());
  const [phoneInputId] = useState(uuidv4());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, phone, id: uuidv4() };

    dispatch(contactsOperations.postContact(body));
    setName('');
    setPhone('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  return (
    <PhonebookStyled>
      <h2>Phonebook</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor={inputId}>Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          id={inputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor={phoneInputId}>Phone</label>
        <input
          onChange={handleChange}
          type="text"
          name="phone"
          id={phoneInputId}
          value={phone}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </PhonebookStyled>
  );
};

export default Phonebook;
