function emailSend(){

	var userName=document.getElementById('name').value;
	var phone=document.getElementById('phone').value;;
	var email=document.getElementById('email').value;;

	var messageBody="Name"+ userName+"</br> Phone"+phone+ "</br> Email"+email;

	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "Akijaclothing@gmail.com",
    Password : "D9007A0770318D8A2199DBA4085D1ADE31DE",
    To : 'adriansalandanan1217@gmail.com',
    From : "Akijaclothing@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}