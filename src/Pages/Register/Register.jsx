import { useForm } from "react-hook-form";
import Navber from "../Navber/Navber";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/FirebaseProvider";
import Useauth from "../../Hooks/Useauth";


const Register = () => {
    const {createUser,googleSignIn} = Useauth()
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()

    //   google sign  in
    const handleGoogle = () =>{
        googleSignIn()
    }

      const onSubmit = data => {
        const {email,password} = data
        // create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
            
        })
        console.log(data);
      }

     
    return (
        <div>
            <Navber></Navber>
            <h1 className="text-4xl text-center mt-10">Register Now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input type="text"  name="name" placeholder="Name" className="input input-bordered"  
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>

                    <input type="text"name="photo"  placeholder="URL" className="input input-bordered"  
                     {...register("photo", { required: false })}/>
                     {errors.photo && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email"  placeholder="email" className="input input-bordered" 
                     {...register("email", { required: true })} />
                     {errors.email && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type="password" name="password"  placeholder="password" className="input input-bordered"  
                     {...register("password", { required: true })}/>
                     {errors.password && <span className="text-red-600">This field is required</span>}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Continue with</p>
            <div className="flex mx-auto justify-center gap-10 mt-4">
                <button onClick={handleGoogle} className="btn btn-ghost">Google</button>
                <button className="btn btn-ghost">Github</button>
            </div>
        </div>
    );
};

export default Register;