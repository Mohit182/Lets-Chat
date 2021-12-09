import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "./Firebase";
const Chats = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.pushState("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">LetsChat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="Calc(100vh-66px)"
        projectId="5497b895-e1e4-4ce0-a7e1-613569648511"
      />
    </div>
  );
};

export default Chats;
