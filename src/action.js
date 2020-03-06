const setContacts = (contacts) =>{
    return{
        type:'SETCONTACTS',
        payload:contacts
    }
}
const setCurrentContact = (contact)=>{
    return{
        type:'LOAD',
        payload:contact
    }
}
export {setContacts,setCurrentContact}