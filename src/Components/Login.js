import React from "react";
import { Container, Form } from "react-bootstrap";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-2">
            <Form.Control type="email" placeholder="Enter email..." />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control type="password" placeholder="Enter password..." />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
