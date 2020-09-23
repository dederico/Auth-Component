//Signup Form
const signupForm = document.querySelector(
  "div.user-panel.main input[name='login']",
  "div.password-panel.main input[name='password']"
);
console.log(signupForm);
// Signup
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //Get the field values from the signup from
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((Credential) => {
        console.log("Succesfully signed up", Credential.user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
}

// Login Form
const loginForm = document.querySelector("#login-form");
//Login
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((Credential) => {
        console.log("Logged in successfully", Credential);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
}
// auth
auth.onAuthStateChanged((user) => {
  console.log("user info", user);
});
