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

const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const NotFound = lazy(() => import('../../pages/NotFound'));

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
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
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
