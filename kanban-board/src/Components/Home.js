import { useContext, useEffect } from "react";
import {
    Box,
    Grid,
    styled,
    Paper,
    Tooltip,
    Backdrop,
    CircularProgress,
} from "@mui/material";
import { AppStateContext } from "../Context/AppStateContext";
import { DataContext } from "../Context/DataContext";
import Utils from "../Utils/Utils.js";

import StatusTicketGroup from "./TicketGroups/StatusTicketGroup";
import UserTicketGroup from "./TicketGroups/UserTicketGroup";
import PriorityTicketGroup from "./TicketGroups/PriorityTicketGroup";

import inProgressIcon from "../assets/inProgressIcon.png";
import backlogIcon from "../assets/backlogIcon.png";
import cancelIcon from "../assets/cancelIcon.png";
import doneIcon from "../assets/doneIcon.png";
import todoIcon from "../assets/todoIcon.png";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import SignalCellular3BarIcon from "@mui/icons-material/SignalCellular3Bar";
import SignalCellular1BarIcon from "@mui/icons-material/SignalCellular1Bar";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const statusIcons = {
    Backlog: backlogIcon,
    Todo: todoIcon,
    "In progress": inProgressIcon,
    Done: doneIcon,
    Canceled: cancelIcon,
};

const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
};

const priorityIcons = {
    4: (
        <Tooltip title={priorityLabels[4]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <ErrorTwoToneIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    ),
    3: (
        <Tooltip title={priorityLabels[3]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <SignalCellular4BarIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    ),
    2: (
        <Tooltip title={priorityLabels[2]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <SignalCellular3BarIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    ),
    1: (
        <Tooltip title={priorityLabels[1]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <SignalCellular1BarIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    ),
    0: (
        <Tooltip title={priorityLabels[0]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <MoreHorizIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    ),
};

const priorityValues = [4, 3, 2, 1, 0];

const statusValues = ["Backlog", "Todo", "In progress", "Done", "Canceled"];

const MainContainer = styled(Grid)({
    /* ... */
});


const Home = () => {
    const { data, isLoaded } = useContext(DataContext)
    const { AppState } = useContext(AppStateContext);
    const { TicketsByUser, TicketsByStatus, TicketsByPriority } = Utils(data, AppState)
    return (
        <>
            <Box
                style={{
                    backgroundColor: "#f5f5f5",
                    minHeight: "100vh",
                    padding: "1rem",
                }}
            >
                <MainContainer container>
                    {!isLoaded ? (
                            <Backdrop
                                open={!isLoaded}
                                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        ) : (
                            <>
                                {
                                    AppState.grouping === "status" ? (
                                        <StatusTicketGroup
                                            TicketsByStatus={TicketsByStatus}
                                            priorityIcons={priorityIcons}
                                            statusIcons={statusIcons}
                                            priorityLabels={priorityLabels}
                                            statusValues={statusValues}
                                        />
                                    ) : null
                                }

                                {AppState.grouping === "user" ? (
                                    <UserTicketGroup
                                        TicketsByUser={TicketsByUser}
                                        priorityIcons={priorityIcons}
                                        statusIcons={statusIcons}
                                        priorityValues={priorityValues}
                                        priorityLabels={priorityLabels}
                                        statusValues={statusValues}
                                    />
                                ) : null}

                                {AppState.grouping === "priority" ? (
                                    <PriorityTicketGroup
                                        TicketsByPriority={TicketsByPriority}
                                        priorityIcons={priorityIcons}
                                        statusIcons={statusIcons}
                                        priorityValues={priorityValues}
                                        priorityLabels={priorityLabels}
                                        statusValues={statusValues}
                                    />
                                ) : null}
                            </>
                        )
                    }


                </MainContainer>
            </Box>
        </>
    );
}

export default Home;