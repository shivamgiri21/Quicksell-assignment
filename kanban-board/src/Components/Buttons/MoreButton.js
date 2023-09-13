import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MoreButton = () => {
  const handleIconClick = () => {
    alert("More Button: Not Yet Implemented");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <MoreHorizIcon style={{ fontSize: 18 }} />
    </IconButton>
  );
};

export default MoreButton;
