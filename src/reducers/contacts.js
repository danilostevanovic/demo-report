
import contacts from '../config/contacts';

const contactsState = [...contacts];


const contactsReducer = (state = contactsState, action) => state

export default  contactsReducer