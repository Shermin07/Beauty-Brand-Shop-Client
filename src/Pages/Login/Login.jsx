/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import  { AuthContext,auth } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import { AiFillEyeInvisible,  AiFillEye} from 'react-icons/ai'



const Login = () => {
     
   const { signIn} = useContext(AuthContext);
   const [loginError, setLoginError] = useState('') ;
   const [loginSuccess, setLoginSuccess] = useState('') ;
   const [showPassword, setShowPassword] = useState(false) ;

    const handleLogin = e =>{

      
      setLoginSuccess('');
      setLoginError('');

      e.preventDefault();
     
      const email = e.target.email.value;
      const password = e.target.password.value;
    
      console.log( email, password)

      if(password < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
        Swal.fire('Password should be more than 6 charecters and one upper letter and a special cherecter')
        return ;
    }







      signIn(email, password)
      .then(result =>{
        console.log(result.user)
        Swal.fire("Your login successfully done! now you can visit our website")
      })
      .catch(error =>{
        Swal.fire('Please register first')
      })
    }

    const githubProvider = new GithubAuthProvider() ;
    const handleGithubLogin = () =>{
       
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error) ;
        })

    }

    return (
        <div>
        
       
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais"></img>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-xl text-center mt-3 font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder=" Your email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' :'password'} placeholder="password" name="password" className="input input-bordered" required />
          
      <span className="absolute mt-[51px] ml-[290px] md:mt-[51px] md:ml-[290px]" onClick={ () => setShowPassword(!showPassword)}>
      {
       showPassword?<AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>  } 
      </span>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
       
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      
      {
    loginError && <p className="ml-7 text-red-400 mb-3">{loginError}</p>
    
     }
  {
    loginSuccess && <p className="ml-7 text-green-700 mb-3">{loginSuccess}</p>
  }

      <p className="ml-8">Don't have an account? Please</p> <br/> <Link to="/register"  className="ml-8 underline mb-2">Register</Link>
    
      <div>
    
    <Link><button onClick={handleGithubLogin}  className="btn bg-sky-500 text-white mb-4 ml-7">Login with Github</button></Link>
    </div>
    </div>
  </div>
</div>
         </div>
       
    );
};

export default Login;