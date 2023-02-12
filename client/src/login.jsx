import "./login.css";
import {useRef, useState, useEffect} from 'react';

export default function Login() {
  const userRef=useRef();
  const errRef=useRef();

  const [user, setUser]=useState('');
  const [pwd, setPwd]=useState('');
  const [errMsg, setErrMsg]=useState('');
  const [success, setSuccess]=useState(false);

  useEffect(()=>{
      userRef.current.focus();
  },[])

  useEffect(()=>{
    setErrMsg('');
  },[user,pwd])

  return (
    <div class="login">
      <p ref={errRef} className={errMsg? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
      <div class="loginwrapper">
        <div class="logo">
          <h3 class="loginlogo">AGRI-CONNECT</h3>
          <span class="logindesc">
          Enhance your farming experience by connecting with fellow farmers and passionate agriculture enthusiasts.
          </span>
        </div>
          <div class="loginbox">
            <input placeholder="E-Mail " class="logininput"/>
            <input placeholder="Password " class="logininput"/>
            <button class="loginbutton">LOGIN</button>
            <span class="signup">
            new here? <a href="./homepage"> SIGNUP</a>
            </span>
          </div>
      </div>
    </div>
  );
}
