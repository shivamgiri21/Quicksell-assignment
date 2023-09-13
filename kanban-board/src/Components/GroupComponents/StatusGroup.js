import Tooltip from "@mui/material/Tooltip";
import inProgressIcon from "../../assets/inProgressIcon.png";
import backlogIcon from "../../assets/backlogIcon.png";
import cancelIcon from "../../assets/cancelIcon.png";
import doneIcon from "../../assets/doneIcon.png";
import todoIcon from "../../assets/todoIcon.png";

const statusValues = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
const statusIcons = {
    "Backlog": backlogIcon,
    "Todo": todoIcon,
    "In progress": inProgressIcon,
    "Done": doneIcon,
    "Canceled": cancelIcon,
};

const StatusIcon = ({ status }) => {
  return (
    <Tooltip title={status} followCursor>
      <img
        src={statusIcons[status]}
        alt={status}
        style={{
          marginTop: "0.2rem",
          width: "14px",
          height: "14px",
          marginRight: "0.3rem",
        }}
      />
    </Tooltip>
  );
};

export  { StatusIcon, statusValues, statusIcons };
