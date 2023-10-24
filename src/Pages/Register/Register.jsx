import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { AiFillEyeInvisible,  AiFillEye} from 'react-icons/ai'


const Register = () => {

    const {user,  createUser} = useContext(AuthContext) ;
    const [registerError, setRegisterError] = useState('') ;
    const [showPassword, setShowPassword] = useState(false) ;
    const [registerSuccess, setRegisterSuccess] = useState('') ;


    const handleRegister = e =>{

        setRegisterError('');
        setRegisterSuccess('');

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value ;
        console.log(name, email, password, photo) ;

     
        if(password < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            Swal.fire('Password should be more than 6 charecters and one upper letter and a special cherecter')
            return ;
        }

        //create user

        createUser(email,password,name,photo)
        .then (result =>{
            console.log(result.user)
            e.target.reset() ;
            Swal.fire('Registration done succesfully!')
           
        })
        .catch(error =>{
            console.error(error.message)
            Swal.fire('Already have an account, please login!')
        }) 




    }
    return (
        <div>
            <h1 className="text-center text-3xl mt-4">Registration</h1>
           <div className="hero min-h-screen  ">
  <div className="hero-content flex-col  lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-[900px] max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
          
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="photo" placeholder="Photo URL" name="photo" className="input input-bordered" required />
          <label className="label">
          
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-3">Register</button>
          <p>Already have an account? please <Link to="/login" className="  underline"> login</Link></p>
        </div>
      </form>
      {
    registerError && <p className="ml-7 text-red-400 mb-3">{registerError}</p>
    
  }
  {
    registerSuccess && <p className="ml-7 text-green-700 mb-3">{registerSuccess}</p>
  }

    </div>
  </div>
</div> 
        </div>
    );
};

export default Register;