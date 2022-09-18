import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction, getUserAction } from "../Redux/actions";
import NavBar from "./Navbar";

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserAction({ url: "https://reqres.in/api/users" }));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="m-3">
        <Container className="d-flex flex-wrap justify-content-center">
          {users?.map((user, key) => (
            <Card className="m-1" key={key}>
              <Card.Header className="text-center">{user.email}</Card.Header>
              <Card.Body className="text-center">
                <img src={user.avatar} />
              </Card.Body>
              <Card.Footer className="text-center">
                {user.first_name} {user.last_name}
              </Card.Footer>
            </Card>
          ))}
        </Container>
      </div>
    </>
  );
}

export default User;
