(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAdhz-c9pBkXvcBG7OyVydZnz-gwyFVUjU",
        authDomain: "templatee-7cbc9.firebaseapp.com",
        projectId: "templatee-7cbc9",
        storageBucket: "templatee-7cbc9.appspot.com",
        messagingSenderId: "878155909872",
        appId: "1:878155909872:web:9215e523b3b04a09e45035",
        measurementId: "G-BJQRN3464K" 
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");
    const btnSignOut =document.getElementById("btnSignOut");
    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
            window.location = "index.html";
             var displayName = user.displayName;
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
            window.location = "login.html";
        }).catch(err => {
            alert(err.message);
        });

    });

    btnSignOut.addEventListener('click', e => {
    
        firebase.auth().signOut()
	
        .then(function() {
           alert('Signout Succesfull')
        }, function(error) {
           alert('Signout Failed')  
        });
        
    });

    var fileButton = document.getElementById('send');
fileButton.addEventListener('change', function(e){
var file = e.target.files[0];
var storageRef = firebase.storage().ref(file.name);
storageRef.put(file);
});
   
})
