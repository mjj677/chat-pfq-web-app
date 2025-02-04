import { useEffect, useState } from "react";
import React from "react";
import { getRequest } from "../utils/api.js";
import { MessageView } from "../Views/MessageView.jsx";
import { PreviewsView } from "../Views/PreviewsView.jsx";
import { CategoryButtons } from "./CategoryButtons.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { NoMessageView } from "./NoMessageView.jsx";
import { MetricsDashboard } from "./MetricsDashboard.jsx";
import { useTheme } from "../ThemeContext.jsx";

export const MainScreen = ({ username, setUsername, socket }) => {
  const [AllMessages, setAllMessages] = useState([]);
  const [everyMessage, setEveryMessage] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [conversationMessages, setConversationMessages] = useState([]);
  const [category, setCategory] = useState("All");
  const [talkingTo, setTalkingTo] = useState("");
  const [body, setBody] = useState("");
  const [nonAdminMessages, setNonAdminMessages] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const getMessageThread = async () => {
      try {
        const messages = await getRequest("messages");
        setEveryMessage(messages);
        const updatedMessages = messages.map((message) => {
          if (message.from === username.toLowerCase()) {
            message.sender = true;
            return message;
          } else {
            return message;
          }
        });
        setAllMessages(updatedMessages);
        setLoading(false);
      } catch (err) {
        console.log("Error:", err);
        throw err;
      }
    };

    getMessageThread();
  }, []);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await getRequest("users");
        setTotalUsers(users.length);
      } catch (err) {
        console.log("Error:", err);
        throw err;
      }
    };

    getAllUsers();
  }, []);

  useEffect(() => {
    socket.emit("register", username);
  }, [username]);

  useEffect(() => {
    socket.on("receive-message", (msg) => {
      setAllMessages((prevMessages) => {
        return [...prevMessages, msg];
      });
    });
    return () => {
      socket.off("receive-message");
    };
  }, [socket]);

  useEffect(() => {
    const filteredMessages = AllMessages.filter(
      (msg) => msg.from === talkingTo || msg.to === talkingTo
    );
    setConversationMessages(filteredMessages);
  }, [talkingTo, AllMessages]);

  useEffect(() => {
    const filteredMessages = AllMessages.filter((msg) => msg.from !== "admin");
    setNonAdminMessages(filteredMessages);
  }, [AllMessages]);

  const handleClick = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    setTalkingTo("");
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const replyingTo = conversationMessages[1].from;

    if (body.trim() !== "") {
      socket.emit("send-admin-message", {
        body,
        replyingTo,
        sender: false,
        created_at: new Date().toISOString(),
      });
      setBody("");
    }
  };

  useEffect(() => {
    let categoryList = AllMessages.reduce((acc, message) => {
      if (message.category) {
        if (!acc[message.category]) {
          acc[message.category] = 0;
        }
        acc[message.category]++;
      }
      return acc;
    }, {});
    setAllCategories(Object.keys(categoryList));
  }, [AllMessages]);


  return (
    <div className={`parent ${darkMode ? "dark-mode" : ""}`}>
      <div id="column-1">
        <Sidebar
          setUsername={setUsername}
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
        />
      </div>
      {!showDashboard ? (
        <>
          <div id="column-2">
            <CategoryButtons
              handleClick={handleClick}
              category={category}
              allCategories={allCategories}
              loading={loading}
            />
          </div>
          <PreviewsView
            nonAdminMessages={nonAdminMessages}
            setTalkingTo={setTalkingTo}
            category={category}
            talkingTo={talkingTo}
            loading={loading}
          />
          {talkingTo !== "" ? (
            <MessageView
              talkingTo={talkingTo}
              body={body}
              sendMessage={sendMessage}
              conversationMessages={conversationMessages}
              setBody={setBody}
            />
          ) : (
            <NoMessageView />
          )}
        </>
      ) : (
        <MetricsDashboard allMessages={everyMessage} totalUsers={totalUsers} />
      )}
    </div>
  );
};