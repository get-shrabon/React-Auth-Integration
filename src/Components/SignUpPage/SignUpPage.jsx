import { Link } from "react-router-dom";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUpPage = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-20">
      <form
        onSubmit={handleSignUp}
        className="container formContainer mx-auto w-[fit-content] border-lime-700 border p-10 rounded"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <SiAmazonsimpleemailservice className="text-4xl text-green-700"></SiAmazonsimpleemailservice>
          <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
        </div>
        <div className="mb-3">
          <p>Your Full Name :</p>
          <input
            className="inputBox"
            type="text"
            name="name"
            id=""
            placeholder="Type your name..."
            required
          />
        </div>
        <div className="mb-3">
          <p>Your E-mail :</p>
          <input
            className="inputBox"
            type="email"
            name="email"
            id=""
            placeholder="Type your email..."
            required
          />
        </div>
        <div className="mb-3">
          <p>New Password :</p>
          <input
            className="inputBox"
            type="password"
            name="password"
            id=""
            placeholder="Type New Password..."
            required
          />
        </div>
        <div className="flex mb-3 items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept Terms and Conditions</label>
          </div>
          <Link className="underline" to="/login">
            Already Have a Account?
          </Link>
        </div>
        <button className="btn w-full btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
