import { useState } from "react";

import "./App.css";
import UserWrapper from "./components/userWrapper/UserWrapper";

function App() {

  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });

  return (
    <div className="app-wrapper">
      <h1> Awesome App</h1>
      <UserWrapper user={user} setUser={setUser}/>

      <>{user.token ? (
      <p>Logged in </p>) : (
      <p>Not logged in</p>)} 
      </>
    </div>
  );
}

export default App;
