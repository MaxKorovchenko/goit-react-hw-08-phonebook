import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';

import { Filter } from 'components/Filter/Filter';
import { GlobalStyle } from 'components/GlobalStyle';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main
      style={{
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
      }}
    >
      {/* <Layout> */}
      {/* <MainTitle>Phonebook</MainTitle> */}
      <ContactsForm />

      {/* <Title>Contacts</Title> */}
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>}
        {error && <b>{error}</b>} */}
      <ContactsList />

      <GlobalStyle />
      {/* </Layout> */}
    </main>
  );
};

export default ContactsPage;
