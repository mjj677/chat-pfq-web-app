import * as React from "react";
import { Avatar } from "@mui/material";
import { timeSince } from "../utils/TimeAgo";
import { useEffect, useRef } from "react";

export const MessagePreview = ({
  msg,
  category,
  setTalkingTo,
  talkingTo,
  sentiment,
}) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" , block: "end"  });
    }
  }, [msg, category]);

  const handleClick = (from) => {
    setTalkingTo(from);
  };

  if (
    (msg.category === category || category === "All") &&
    (msg.sentiment === sentiment || sentiment === "neutral")
  ) {
    return (
      <div className="main-container">
        <div id="preview-container" onClick={() => handleClick(msg.from)}>
          <div id="preview-avatar">
            <Avatar
              sx={
                msg.sentiment === "positive"
                  ? { bgcolor: "positive.main" }
                  : { bgcolor: "error.main" }
              }
            >
              {msg.from[0].toUpperCase()}
            </Avatar>
          </div>
          <div id="message-preview">
            <p>{msg.body}</p>
          </div>
          <div id="message-preview-timestamp">
            <p>{timeSince(msg.created_at)}</p>
          </div>
          <div ref={messageEndRef} />
        </div>
      </div>
    );
  }

  return null;
};