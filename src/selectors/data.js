const getData = (id,data,{date,info}) =>{
    return data.filter(data=>{
        const idMatch = data.contactId === id;
        const dateMatch = true
        const info = true
         return idMatch && dateMatch && info
     })
    
 };


export default getData
    