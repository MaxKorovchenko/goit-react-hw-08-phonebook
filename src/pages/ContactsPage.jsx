import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const style = {
  main: {
    width: 700,
    margin: '20px auto',
    padding: 20,
    backgroundColor: 'whitesmoke',
    border: '2px solid grey',
    borderRadius: 10,
    boxShadow: '1px 1px 7px 1px grey',
  },
  mainTitle: {
    fontSize: 30,
    color: ' rgb(69, 73, 78)',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    marginLeft: 40,
    marginBottom: 30,
    color: ' rgb(69, 73, 78)',
  },
};

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main style={style.main}>
      <h2 style={style.mainTitle}>Phonebook</h2>
      <ContactsForm />

      <h3 style={style.title}>Contacts</h3>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>{error}</b>}
      <ContactsList />
    </main>
  );
};

export default ContactsPage;
