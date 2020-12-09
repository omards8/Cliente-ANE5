let btn = document.getElementById("btn").addEventListener("click", getPost);
let con=0;
let div=document.getElementById("cardDiv");

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      return res.json();
  })
  .then((post)=>{
      for (let index = 0; index < 1; index++) {
          div.innerHTML+=`
            <tr>
                <td>${post[con].id}</td>
                <td>${post[con].name}</td>
                <td>${post[con].username}</td>
                <td>${post[con].email}</td>
                <td>${post[con].street}</td>
                <td>${post[con].suite}</td>
                <td>${post[con].city}</td>
                <td>${post[con].zipcode}</td>
                <td>${post[con].lat}</td>
                <td>${post[con].lng}</td>
                <td>${post[con].phone}</td>
                <td>${post[con].website}</td>
                <td>${post[con].name}</td>
                <td>${post[con].catchPhrase}</td>
                <td>${post[con].bs}</td>
            </tr>
            `
            con=con+1;
            
      }
  })
  .catch((error)=>{
      console.log(error);
  })

}

