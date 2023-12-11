import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  Field,
  Form,
  Button,
  FormContainer,
  FormGroup,
  ErrorMessage,
} from './contactForm.styled';
import { selectContacts } from 'redux/selectors';
import { saveNewContact } from 'redux/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={contactSchema}
        onSubmit={async (values, actions) => {
          actions.resetForm();

          if (contacts.some(contact => contact.name === values.name)) {
            Notify.failure(`${values.name} already in phonebook!`);
            return;
          }
          try {
            await dispatch(saveNewContact(values));
            Notify.success(`${values.name} added to your contacts!`);
          } catch (error) {
            Notify.failure('Something went wrong please try again');
          }
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" placeholder="Mike" />
            <ErrorMessage name="name" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field name="number" placeholder="+380..." />
            <ErrorMessage name="number" />
          </FormGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
