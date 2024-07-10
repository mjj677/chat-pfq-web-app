import * as React from "react";
import { Skeleton } from "@mui/material";
import { MessagePreview } from "../components/MessagePreview";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export function PreviewsView({
  nonAdminMessages,
  setTalkingTo,
  category,
  loading,
}) {
  const skeletonCount = 14;
  const [sentiment, setSentiment] = useState("neutral");
  const theme = useTheme();

  const handleClick = (selection) => {
    if (sentiment === selection) {
      setSentiment("neutral");
    } else {
      setSentiment(selection);
    }
  };

  if (loading) {
    return (
      <div id="column-3" style={{ overflow: "scroll" }}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div key={index} id="preview-container">
            <div id="preview-avatar">
              <Skeleton variant="circular" width={40} height={40} />
            </div>
            <div id="message-preview">
              <Skeleton variant="text" width="80%" />
            </div>
            <div id="message-preview-timestamp">
              <Skeleton variant="text" width="40%" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="column-3" style={{ position: "relative" }}>
      <div
        id="sentiment-filter"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <SentimentSatisfiedRoundedIcon
          sx={{
            fontSize: 46,
            cursor: "pointer",
            color:
              sentiment === "positive"
                ? theme.palette.positive.main
                : "inherit",
            marginLeft: 2.6,
          }}
          onClick={() => handleClick("positive")}
        />
        <SentimentDissatisfiedRoundedIcon
          sx={{
            fontSize: 46,
            cursor: "pointer",
            color:
              sentiment === "negative" ? theme.palette.error.main : "inherit",
          }}
          onClick={() => handleClick("negative")}
        />
      </div>
      {nonAdminMessages.map((msg) => (
        <MessagePreview
          key={msg.created_at}
          msg={msg}
          setTalkingTo={setTalkingTo}
          category={category}
          loading={loading}
          sentiment={sentiment}
        />
      ))}
    </div>
  );
}

