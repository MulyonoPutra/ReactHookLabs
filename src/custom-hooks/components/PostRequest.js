import usePost from "custom-hooks/Hooks/UsePost";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const PostRequest = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const { execute, pending, error, data } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    execute({
      endpoint: "posts",
      postData: {
        title,
        author,
        body,
      },
    });
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                Title:
                <input
                  className="form-control"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <br />
              <label className="form-label">
                Author:
                <input
                  className="form-control"
                  type="text"
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                />
              </label>
              <br />
              <label className="form-label">
                Body:
                <input
                  className="form-control"
                  type="text"
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                />
              </label>
              <br />
              <input
                className="btn btn-primary"
                type="submit"
                value={!pending ? "Submit" : "Loading..."}
                disabled={pending}
              />
            </form>
            <br />
            <div className="card">
              <div className="card-body">
                {" "}
                {error && <span>There was an error 😞...</span>}
                {data && <span>Success! 😀: {JSON.stringify(data)}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRequest;
