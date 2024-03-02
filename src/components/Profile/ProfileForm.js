import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {

  const newPasswordInputref = useRef();
  const authCtx = useContext(AuthContext)
  const submitHandler = event =>{
    event.preventDefault();

    const enteredNewPassword = newPasswordInputref.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA86EiEpf6MC0veSZUyVtiTdAcSRLI_QuM',{
      method: 'POST',
      body: JSON.stringify({
        idToken : authCtx.token,
        password : enteredNewPassword,
        returnSecureToken: false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res =>{
      
    });
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputref}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
