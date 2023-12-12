import { ListItem, ContactData, RemoveButton } from './contactItem.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ListItem>
      <ContactData>
        {name}: {number}
      </ContactData>
      <RemoveButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </RemoveButton>
    </ListItem>
  );
};
