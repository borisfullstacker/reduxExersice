export const getFullList=()=>{
   return fetch('http://localhost:3000/artist',{
    }).then((res)=>{return res.json()})
    .then((data)=>{return (data)});

}

export const updateById=(obj)=>{
           
    return fetch(`http://localhost:3000/artist/${obj.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(obj)
     }).then((res)=>{return res.json()})
     .then((data)=>{return (data)});
 
 }

 export const addNew=(obj)=>{
     debugger
 
    return fetch(`http://localhost:3000/artist`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(obj)
     }).then((res)=>{return res.json()})
     .then((data)=>{return (data)});
 
 }

 export const deleteById=(id)=>{
     
    return fetch(`http://localhost:3000/artist/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
     }).then((res)=>{return res.json()})
     .then((data)=>{return (data)});
 
 }
 
 
 


 
 
 






