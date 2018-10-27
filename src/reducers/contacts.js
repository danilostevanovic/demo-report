
import contacts from '../config/contacts';

const contactsState = [...contacts];


const contactsReducer = (state = contactsState) => state

export default  contactsReducer