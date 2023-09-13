import { useContext } from "react";
import {
    Box,
    Grid,
    styled,
    Backdrop,
    CircularProgress,
} from "@mui/material";
import { AppStateContext } from "../Context/AppStateContext";
import { DataContext } from "../Context/DataContext";
import Utils from "../Utils/Utils.js";

import StatusTicketGroup from "./TicketGroups/StatusTicketGroup";
import UserTicketGroup from "./TicketGroups/UserTicketGroup";
import PriorityTicketGroup from "./TicketGroups/PriorityTicketGroup";


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
                                        />
                                    ) : null
                                }

                                {AppState.grouping === "user" ? (
                                    <UserTicketGroup
                                        TicketsByUser={TicketsByUser}
                                    />
                                ) : null}

                                {AppState.grouping === "priority" ? (
                                    <PriorityTicketGroup
                                        TicketsByPriority={TicketsByPriority}
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