import { ContactList } from '../ContactList/contactList';
import { Filter } from '../Filter/filter';
import { ContactForm } from '../ContactForm/contactForm';
import { Container, Title, SectionTitle, Message } from './App.styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {loading && !error && <Loader />}
      <Title>Phonebook</Title>
      <SectionTitle>Add contact</SectionTitle>
      <ContactForm />
      <SectionTitle>Contacts</SectionTitle>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Message>
          {' '}
          "There are no contacts in your phonebook. Please add your first
          contact!"
        </Message>
      )}
    </Container>
  );
};
