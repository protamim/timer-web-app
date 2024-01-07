import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div className="max-w-screen-sm w-[95%] my-28 mx-auto">
                <h2 className="text-center text-2xl mb-4">START TRACKING TIME</h2>
                <div>
                    <form className="flex gap-7 flex-col">
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Your Name</label>
                            <input className="border py-2 pl-2 rounded-md" type="text" placeholder="Full Name" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Your Email</label>
                            <input className="border py-2 pl-2 rounded-md" type="email" placeholder="Your Email" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Your Password</label>
                            <input className="border py-2 pl-2 rounded-md" type="password" placeholder="Your Password" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-sm">Confirm Password</label>
                            <input className="border py-2 pl-2 rounded-md" type="password" placeholder="Confirm Password" />
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