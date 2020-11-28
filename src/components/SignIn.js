import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div>Hello Log In</div>
      <div>
          <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default SignIn;
