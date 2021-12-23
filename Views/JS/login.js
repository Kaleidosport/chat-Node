//login username
//  obtaining DOM elements from the users
const nickError = document.getElementById("nickError");
const nickForm =  document.getElementById("nickForm");
const nickname = document.getElementById("nickname");
const users = document.getElementById("usernames");
const btnlog = document.getElementById("sendlog");

btnlog.addEventListener("click",  (e) => {
    e.preventDefault();
    socket.emit('new user', {nickname: nickname.value} );
    
    if (nickname.value != '') {            
        document.getElementById("nickWrap").style.visibility = "hidden";
        document.getElementById("contentWrap").style.display = "block"; 
        document.getElementById("carduser").style.display = "block";      
    } else {
        nickError.innerHTML = `
        <div class="alert alert-danger">
            That username already exits.
        </div>`;
    }
    nickname.innerHTML = '';  
});

socket.on('usernames', data => {    
    
    let html = '';
    for(let i = 0; i < data.length; i++){
        if (data[i].nickname ==='Admin') {
            html += `<p><i class="fas fa-user-shield"></i> ${data[i].nickname}</p>`;
        } else if(data[i].nickname !== ""){
            html += `<p><i class="fas fa-user"></i> ${data[i].nickname}</p>`; 
        }
        
    }
    users.innerHTML = html;
});