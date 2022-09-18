import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import NavBar from "./Navbar";
import { db } from "../firebase-config";
import ReactModal from "./Modal";

function User() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [description, setDescription] = useState("");
  const [userAction, setUserAction] = useState("create");

  const [show, setShow] = useState(false);

  const userCollection = collection(db, "users");

  useEffect(() => {
    const getUser = async () => {
      const users = await getDocs(userCollection);
      const usersData = users.docs.map((user) => ({
        ...user.data(),
        id: user.id,
      }));
      setUsers(usersData);
    };
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userAction === "create") {
      await addDoc(userCollection, { name, email, dob, description }).then(
        (result) => {
          setUsers([
            { id: result.id, name, email, dob, description },
            ...users,
          ]);
        }
      );
    } else {
      const updateCollection = doc(db, "users", id);
      await updateDoc(updateCollection, { name, email, dob, description });
      let newArray = [...users];
      const index = newArray.findIndex((user) => user.id === id);
      newArray[index] = { ...newArray[index], name, email, dob, description };
      setUsers(newArray);
    }
    setShow(false);
  };

  const updateUser = (user) => {
    setUserAction("update");
    setShow(true);
    setId(user.id);
    setName(user.name);
    setEmail(user.email);
    setDob(user.dob);
    setDescription(user.description);
  };

  const deleteUser = async (id) => {
    const deleteCollection = doc(db, "users", id);
    await deleteDoc(deleteCollection).then(() => {
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
    });
  };

  return (
    <>
      <NavBar />
      <div style={{ textAlign: "right", margin: "10px" }}>
        <Button onClick={() => setShow(true)}>Create</Button>
      </div>
      <div className="m-3">
        <Container className="d-flex flex-wrap justify-content-center">
          {users?.map((user, key) => (
            <Card className="m-1" key={key}>
              <Card.Header className="text-center">{user.name}</Card.Header>
              <Card.Body className="text-left">
                <b>Name:</b> {user.name}
                <br />
                <b>Email:</b> {user.email}
                <br />
                <b>DOB:</b> {user.dob}
                <br />
                <b>Description:</b> {user.description}
                <br />
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  onClick={() => updateUser(user)}
                  variant="warning"
                  className="m-2"
                >
                  Update
                </Button>
                <Button
                  onClick={() => deleteUser(user.id)}
                  variant="danger"
                  className="m-2"
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </Container>

        <ReactModal
          title={`${userAction} User`}
          onClose={() => setShow(false)}
          show={show}
        >
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Enter Title"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="input"
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="input"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button className="m-2" type="submit">
                Submit
              </Button>
              <Button
                onClick={() => setShow(false)}
                className="m-2"
                variant="danger"
                type="reset"
              >
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </ReactModal>
      </div>
    </>
  );
}

export default User;
