// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { ContactsForm } from 'components/ContactsForm/ContactsForm';
// import { ContactsList } from 'components/ContactsList/ContactsList';
// import { Filter } from 'components/Filter/Filter';

// import { GlobalStyle } from 'components/GlobalStyle';
// import { Layout, MainTitle, Title } from './App.styled';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

//import { selectError, selectIsLoading } from 'redux/contacts/selectors';
//import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    // <Layout>
    //   <MainTitle>Phonebook</MainTitle>
    //   <ContactsForm />

    //   <Title>Contacts</Title>
    //   <Filter />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   {error && <b>{error}</b>}
    //   <ContactsList />

    //   <GlobalStyle />
    // </Layout>
  );
};
