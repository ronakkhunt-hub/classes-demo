import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Form } from "react-bootstrap";
import { auth, signInWithGoogle } from "../firebase-config";
import { addItem } from "../utils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(`result`, result)
    // addItem("profile", { name: result.fullName, email: result._tokenResponse.email, photoUrl: result._tokenResponse.photoUrl });
    navigate("/");
  };
  
  const googleSignIn = async () => {
    const result = await signInWithGoogle();
    addItem("profile", { name: result._tokenResponse.fullName, email: result._tokenResponse.email, photoUrl: result._tokenResponse.photoUrl });
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <Container className="formWrapper">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email..."
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Button className="submitButton" type="submit">
              Continue
            </Button>
          </Form.Group>
        </Form>
        <span className="mt-3 text-center">OR</span>
        <div className="googleLogin">
          <img
            className="googleLogo"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
          />
          <Button
            className="googleButton"
            onClick={googleSignIn}
          >
            Continue with Google
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
