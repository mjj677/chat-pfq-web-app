import { Avatar, useTheme } from "@mui/material";

export function AvatarContainer({ talkingTo }) {
  const theme = useTheme();

  return (
    <div id="avatar-container">
      <div id="customer-avatar">
        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
          {talkingTo ? talkingTo[0].toUpperCase() : ''}
        </Avatar>
        <h1>{talkingTo}</h1>
      </div>
    </div>
  );
}