const name=document.getElementById('name');
var email=document.getElementById('email');
const phone=document.getElementById('phone');
document.getElementById('submitbtn').addEventListener('click',submitfrom);

async function submitfrom(e){
    e.preventDefault();
    let obj1={
        "name":name.value,
        "email":email.value,
        "phone":phone.value 
    }
// let obj1=JSON.stringify({
//     name.value,
//     email.value,
//     phne
// })
    try{
        let response=await axios.post('http://localhost:3000/save',obj1);
        console.log(response);
        if(response.data[0].status==1){
            getuser();
        }
    }
    catch(err){console.log(err)};
    
}
window.addEventListener('DOMContentLoaded',getuser);
async function getuser(){
    try{
        let response=await axios.get('http://localhost:3000/getuser');
        console.log(response);
        for(let i=0;i<response.data.length;i++){
            viewuser(response.data[i]);
        }
    }
    catch(err){
        console.log(err);
    }
}
async function viewuser(data){
    const childhtml=`<li id=${data.id}> ${data.name} ${data.email} ${data.contact} <button onclick="editexpense('${data.id}');">Edit</button><button onclick="deleteuser('${data.id}');">Delete</button>`;
    
    const parentnode=document.querySelector('.users');
    parentnode.innerHTML=parentnode.innerHTML+childhtml;
}

async function deleteuser(id){
    try{
        let response=await axios.get(`http://localhost:3000/deleteuser/${id}`);

        if(response.data[0].status==1){
            deletefromscreen(id);
        }
    }catch(err){
        console.log(err);
    }
}

function deletefromscreen(id){
    const parentnode=document.getElementById('user');
    const nodedelete=document.getElementById(id);
    if(nodedelete){
        parentnode.removeChild(nodedelete);
    }
   }