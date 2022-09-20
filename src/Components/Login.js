import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Form } from "react-bootstrap";
import { auth } from "../firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/');
  };

  return (
    <div>
      <Container className="m-5 d-flex justify-content-center">
        <Form
          className="p-5 rounded"
          style={{ width: "50%", border: "2px solid #666666" }}
          onSubmit={(e) => handleSubmit(e)}
        >
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
            <Button className="me-1" type="submit">
              Submit
            </Button>
            <Button className="ms-1" variant="danger">
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
