
let json = [
    {
        account : "melvin.sjostrand12@gmail.com",
        password : "123"
    }
]


function login(){

    let account = document.getElementById('account').value
    let password = document.getElementById('password').value

    for (var i = 0 ; i< json.length; i++) {
        if(account == json[i].account && password == json[i].password) {
            console.log(username + "loggade in")
            window.location.href = 'http://omsapp.te-vxo.se/';
            return
        }
    }
    console.log('Fel Mail, Telefonnummer eller lösenord')
}
