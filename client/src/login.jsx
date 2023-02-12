import "./login.css";

function Login() {
  return (
    <div class="login">
      <div class="loginwrapper">
        <div class="logo">
          <h3 class="loginlogo">AGRI-CONNECT</h3>
          <span class="logindesc">
          Enhance your farming experience by connecting with fellow farmers and passionate agriculture enthusiasts.
          </span>
        </div>
          <form class="loginbox">
            <input type="email" placeholder="E-Mail " class="logininput" name="email"/>
            <input type="password" placeholder="Password " class="logininput" name="password"/>
            <button type="Submit" class="loginbutton">LOGIN</button>
            <span class="signup">
            new here? <a href="/"> SIGNUP</a>
            </span>
          </form>
      </div>
    </div>
  );
}

export default Login;