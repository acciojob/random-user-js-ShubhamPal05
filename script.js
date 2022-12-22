//your code here

const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

const btn = document.getElementsByClassName("btn"); //this will return array;
const getUser = document.getElementById("getUser");

async function APICall(){

    const data = await fetch("https://randomuser.me/api/").then(data =>data.json()).then((data) => {
        const firstName = data.results[0].name.first;
        const lastName = data.results[0].name.last;
        const imageURL = data.results[0].picture.large;
        const age = data.results[0].dob.age;
        const email = data.results[0].email;
        const phone = data.results[0].phone;

        display1.innerHTML=`<span style="position:relative; bottom: 2.5rem; right: 1rem;"> ${firstName} ${lastName} </span> <span> <img src="${imageURL}" alt="userImage"> </span> `;

        btn[0].addEventListener("click", ()=>{
            display2.innerHTML=`<p> ${age} </p>`
        });
        btn[1].addEventListener("click", ()=>{
            display2.innerHTML=`<p> ${email} </p>`
        });
        btn[2].addEventListener("click", ()=>{
            display2.innerHTML=`<p> ${phone} </p>`
        });

        getUser.onclick = APICall;

    });


}


APICall();