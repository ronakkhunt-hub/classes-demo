import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, getPostAction } from "../Redux/actions";
import ReactModal from "./Modal";
import NavBar from "./Navbar";

function Post() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(
      getPostAction({ url: "https://jsonplaceholder.typicode.com/posts" })
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPostAction({
        url: "https://jsonplaceholder.typicode.com/posts",
        data: { title, body },
      })
    );
    setTitle("");
    setBody("");
    setShow(false);
  };

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "right", margin: "10px" }}>
        <Button onClick={() => setShow(true)}>Create</Button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactModal
        title="Create User"
        onClose={() => setShow(false)}
        show={show}
      >
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Enter Title"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Enter Body"
              onChange={(e) => setBody(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button className="m-2" type="submit">Submit</Button>
            <Button className="m-2" variant="danger" type="reset">Cancel</Button>
          </Form.Group>
        </Form>
      </ReactModal>
    </div>
  );
}

export default Post;
