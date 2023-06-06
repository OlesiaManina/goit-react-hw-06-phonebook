import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContactAct } from "redux/contactsSlice";
import {getContacts, getFilterValue} from 'redux/selectors'

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filterValue = useSelector(getFilterValue);
  console.log(filterValue)
  
  const deleteContact = contactId => {
    dispatch(deleteContactAct(contactId))
  }

return (
  <ul className={css.list}>
    {contacts.map(({name, number, id}) => {
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

