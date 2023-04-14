import { useDispatch } from 'react-redux';
import { StyledForm, StyledLabel } from './EditForm.styled';
import { editContact } from 'redux/contacts/operations';

export const EditForm = ({ id, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      number: { value: number },
    } = e.currentTarget;

    dispatch(editContact({ id, name, number }));
    e.currentTarget.reset();
    close();
  };

  const handleEdit = () => {
    dispatch(editContact());
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="on">
      <StyledLabel>
        Username
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>

      <button type="submit" onClick={handleEdit}>
        Edit contact
      </button>
    </StyledForm>
  );
};
