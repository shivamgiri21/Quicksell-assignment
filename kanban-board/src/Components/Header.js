import {useState, useContext} from "react";
import {
  Paper,
  Button,
  Select,
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { AppStateContext } from "../Context/AppStateContext";

import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    body1: {
      fontSize: "0.8rem",
    },
  },
});

const Header = ()  => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { AppState, updateAppState } = useContext(AppStateContext); 

  const handleChange1 = (event) => {
    updateAppState(event.target.value, AppState.ordering); // Update using the context function
  };

  const handleChange2 = (event) => {
    updateAppState(AppState.grouping, event.target.value); // Update using the context function
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={0}
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Paper
          style={{
            marginLeft: "1.2rem",
            marginTop: "0.3rem",
            marginBottom: "0.5rem",
          }}
        >
          <Button
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            startIcon={<TuneIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            size="small"
            style={{ fontSize: "12px" }}
          >
            Display
          </Button>
        </Paper>
        <Menu
          id="dropdown-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          style={{ marginTop: "10px" }}
        >
          <MenuItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Grouping
            <Select
              value={AppState.grouping}
              onChange={handleChange1}
              style={{ width: "100px", marginLeft: "5rem" }} // Adjust width as needed
              size="small"
            >
              <MenuItem value="status">Status</MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
            </Select>
          </MenuItem>
          <MenuItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Ordering
            <Select
              value={AppState.ordering}
              onChange={handleChange2}
              style={{ width: "100px", marginLeft: "5rem" }} // Adjust width as needed
              size="small"
            >
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="title">Title</MenuItem>
            </Select>
          </MenuItem>
        </Menu>
      </Paper>
    </ThemeProvider>
  );
}

export default Header;