import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";


const AddButton = () => {
  const handleIconClick = () => {
    alert("Add Button: Not Yet Implemented");
  };


  return (
    <>
      <IconButton onClick={handleIconClick}>
        <AddIcon style={{ fontSize: 18 }} />
      </IconButton>
    </>
  );
};

export default AddButton;
