const getContact = (contacts, { id, mac }) => {
    return contacts.filter((contact) => {
        return contact.contactId === id || contact.mac === mac
    })
}

export default getContact