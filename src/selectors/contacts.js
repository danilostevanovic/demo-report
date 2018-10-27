const getContact =  (id,contacts)=>{
    return contacts.filter((contact)=>{
       return contact.contactId === id
    })
}

export default getContact