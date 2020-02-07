import React, { useState } from "react";

const BlogForm = ({ title, author, url, category }) => {
  return (
    <form>
      <div>
        <label>Title:</label>
        <input type="text" value={title} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} />
      </div>
      <div>
        <label>Url:</label>
        <input type="text" value={url} />
      </div>
      <div>
        <label>Category:</label>
        <select>
          <option />
          <option value>Fantasy</option>
          <option>Tech</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

const LoginForm = ({
  username,
  password,
  handleUsername,
  handlePassword,
  handleLogin
}) => {
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsername} />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" value={password} onChange={handlePassword} />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleLogin = event => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      console.log("savings");
      setLoggedIn(loggedIn);
      setErrorMessage("");
      setUsername("");
      setPassword("");
    } else if (username === "") {
      setErrorMessage("Username is empty");
    } else if (password === "") {
      setErrorMessage("Password is empty");
    } else {
      setErrorMessage("Wrong credentials");
    }
  };

  const loginForm = () => {
    return (
      <LoginForm
        username={username}
        password={password}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
      />
    );
  };

  const blogForm = () => {
    return <BlogForm />;
  };

  return (
    <div>
      <h1>Blog</h1>

      {loggedIn ? blogForm() : loginForm()}
    </div>
  );
};

export default App;
