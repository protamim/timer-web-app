import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { createAccount, userProfile, setReload } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
        const {email, password, yourName, photoURL} = data;
        // Register a user
        createAccount(email, password)
        .then(userCredential=> {
            // Update user's profile
            userProfile({
                displayName: yourName,
                photoURL: photoURL,
            })
            .then(()=> {
                setReload(true);
                console.log("Profile Updated")
            })
            .catch(()=> console.log("An error occurred with updating profile"))
            // Register success log
            console.log(userCredential.user);
        }).catch(err=> {
            console.log(err.message);
        })
     // reset all the fields 
        reset();
    }


    return (
        <>
            <div className="max-w-screen-sm w-[95%] my-28 mx-auto">
                <h2 className="text-center text-2xl mb-4">START TRACKING TIME</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-7 flex-col">
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Your Name</label>
                            <input className="border py-2 pl-2 rounded-md" type="text" placeholder="Full Name" {...register("yourName", {required: true})} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Your Email</label>
                            <input className="border py-2 pl-2 rounded-md" type="email" placeholder="Your Email" {...register("email", {required: true})} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Your Password</label>
                            <input className="border py-2 pl-2 rounded-md" type="password" placeholder="Your Password" {...register("password", {required: true})} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Photo URL</label>
                            <input className="border py-2 pl-2 rounded-md" type="url" placeholder="Photo URL" {...register("photoURL", {required: true})} />
                        </div>
                        <button className="bg-green-500 py-2 rounded-lg text-white border border-green-500 hover:bg-transparent transition-colors hover:text-black" type="submit">
                            Create Account
                        </button>
                    </form>
                    <Link className="mt-10 block text-center underline text-green-500 hover:text-black transition-colors" to={"/login"}>Login with existing account</Link>
                </div>
            </div>
        </>
    );
};

export default SignUp;