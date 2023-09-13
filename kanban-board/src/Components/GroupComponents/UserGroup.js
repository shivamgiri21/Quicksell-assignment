import Tooltip from "@mui/material/Tooltip";

import defaultProfileicon from "../../assets/defaultProfileIcon.png";
import onlineIcon from "../../assets/onlineIcon.png";
import offlineIcon from "../../assets/offlineIcon.png";

const ProfileIcon = ({ userId, getUserAvailability }) => {
  return (
    <Tooltip
      title={getUserAvailability(userId) ? "Online" : "Offline"}
      followCursor
    >
      <div style={{ position: "relative" }}>
        <img
          src={defaultProfileicon}
          alt="icon"
          style={{
            width: "16px",
            height: "16px",
            marginRight: "4px",
          }}
        />
        <img
          src={getUserAvailability(userId) ? onlineIcon : offlineIcon}
          alt={getUserAvailability(userId) ? "Online" : "Offline"}
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />
      </div>
    </Tooltip>
  );
};

export { ProfileIcon };
