import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContactAct } from "redux/contactsSlice";
import {getContacts, getFilterValue} from 'redux/selectors'

const ContactList = () => {
  const contactsFromState = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const normalizedFilter = filterValue.filter.toLowerCase();
  const visibleContacts = contactsFromState.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  
  const deleteContact = contactId => {
    dispatch(deleteContactAct(contactId))
  }

return (
  <ul className={css.list}>
    {visibleContacts.map(({name, number, id}) => {
      return (
        <li key={id} className={css.listItem}>
          <p className={css.text}>
          {name}: {number}
          </p>
          <button onClick={() => deleteContact(id)} className={css.btn}>Delete</button>
        </li>
      )
    } )}
</ul>
)

}

export default ContactList;

