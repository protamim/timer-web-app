import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Destructuring form data
    const {email, password} = data;
    // Sign In a user
    logIn(email, password).then((userCredential=> {
        // Signed In
        console.log(userCredential.user);
    })).catch(err=> {
        console.error(err.message);
    })
    // Reset all the fields
    reset();
  };
  return (
    <>
      <div className="max-w-screen-sm w-[95%] my-28 mx-auto">
        <h2 className="text-center text-2xl mb-4">Welcome Back</h2>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-7 flex-col"
          >
            <div className="flex flex-col gap-3">
              <label className="text-sm">Your Email</label>
              <input
                className="border py-2 pl-2 rounded-md"
                type="email"
                placeholder="Your Email"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm">Your Password</label>
              <input
                className="border py-2 pl-2 rounded-md"
                type="password"
                placeholder="Your Password"
                {...register("password")}
              />
            </div>

            <button
              className="bg-green-500 py-2 rounded-lg text-white border border-green-500 hover:bg-transparent transition-colors hover:text-black"
              type="submit"
            >
              Login
            </button>
          </form>
          <Link
            className="mt-10 block w-max mx-auto underline text-green-500 hover:text-black transition-colors"
            to={"/sign-up"}
          >
            Create new account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
