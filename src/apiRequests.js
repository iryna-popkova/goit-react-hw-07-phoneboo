import axios from 'axios';
axios.defaults.baseURL = 'https://6575b1ccb2fbb8f6509d6413.mockapi.io';

export async function getContacts() {
  try {
    const response = await axios.get(`/contacts`);
    return response.data;
  } catch (error) {
    return new Error('Sorry, something is wrong. Please try again later');
  }
}

export async function addContact({ name, number }) {
  try {
    const response = await axios.post('/contacts', { name, number });
    return response.data;
  } catch (error) {
    return new Error('Sorry, something is wrong. The contact already excists');
  }
}

export async function deleteContact(id) {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return new Error(
      'Sorry, something is wrong. cannot find a contact to delete'
    );
  }
}
