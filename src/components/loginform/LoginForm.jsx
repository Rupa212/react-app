import React,{useState} from "react";
import styles from './LoginForm.module.css'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';




const Loginform = ()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword,setshowPassword]=useState(false);
  
  const handlerSumit =(e)=>{
    e.preventDefault();
    console.log(email,password);
  };
  return(
    <>
    <form className={styles.form}onSumit={handlerSumit}>
      <h1>Login</h1>
      <div className={styles.inputContainer}>
        <EmailIcon className={styles.icon}/>
        <input
         type="email" 
         placeholder="Enter email..."
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         required />
      </div>
      <div className={styles.inputContainer}>
        <LockIcon className={styles.icon}/>
        <input 
        type={showPassword ? "password":"text" }
        placeholder="Enter password..." 
        className={styles.passwordInput}
        value={password}
         onChange={(e)=>setPassword(e.target.value)}
        required />
        { !showPassword?(
        <VisibilityIcon className={styles.icon} onClick={()=> setshowPassword(!showPassword)}/>
        ):(
        
        <VisibilityOffIcon className={styles.icon}
        onClick={()=> setshowPassword(!showPassword)}/>
        )}

      </div>
      <button className={styles.loginButton} type="submit">Login</button>

    </form>
    </>

    
  ) 
}
export default Loginform;

