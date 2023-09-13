import { Grid, Paper, Radio, styled, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import MoreButton from "../Buttons/MoreButton";
import AddButton from "../Buttons/AddButton";
import { PriorityIcons } from "../GroupComponents/PriorityGroup";
import { ProfileIcon } from "../GroupComponents/UserGroup";
import { StatusIcon } from "../GroupComponents/StatusGroup";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const CustomLabel = styled("label")({
    display: "flex",
    alignItems: "center",
    padding: "0px",
});

const CustomTicketCard = ({ ticket }) => {
    return (
        <Paper style={{ padding: "8px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0.2rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <p
                        style={{
                            margin: "0",
                            fontSize: 14,
                            marginBottom: "0.4rem",
                        }}
                    >
                        {ticket.id}
                    </p>
                </div>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}
                >
                    <StatusIcon status={ticket.status} />
                    <p
                        style={{
                            marginTop: "0",
                            paddingTop: "0",
                            fontSize: 15,
                            fontWeight: "600",
                            marginBottom: "1rem",
                        }}
                    >
                        {ticket.title}
                    </p>
                </Box>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {PriorityIcons(ticket.priority)}
                    {ticket?.tag?.map((tag) => (
                        <Paper key = {tag} style={{ padding: "0.1rem 0.2rem 0.2rem 0.1rem" }}>
                            <Radio
                                disabled={true}
                                icon={<CircleIcon style={{ fontSize: 14 }} />}
                                color="default"
                                size="small"
                                style={{ marginRight: 4, padding: 0, marginBottom: "0.1rem" }}
                            />
                            <span style={{ fontSize: 12 }}>{tag}</span>
                        </Paper>
                    ))}
                </div>
            </div>
        </Paper>
    );
};
const UserTicketGroup = ({ TicketsByUser }) => {
    const { data } = useContext(DataContext)
    const getUserAvailability = (userId) => {
        const user = data.users.find((user) => user.id === userId);
        return user?.available || false;
    };

    return (
        <>
            {Object.keys(TicketsByUser).map((userId) => (
                <Grid item lg={2.4} key={userId} padding={2}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomLabel>
                            <ProfileIcon
                                userId={userId}
                                getUserAvailability={getUserAvailability}
                            />
                            <h4
                                style={{ margin: "0", fontWeight: "500", marginLeft: "0.8rem" }}
                            >
                                {data.users.map((user) =>
                                    user.id === userId ? user.name : null
                                )}
                            </h4>
                            <h4
                                style={{
                                    margin: "0",
                                    fontWeight: "400",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                {TicketsByUser[userId]?.length || 0}
                            </h4>
                        </CustomLabel>
                        <div style={{ marginLeft: "auto" }}>
                            <AddButton />
                            <MoreButton />
                        </div>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {TicketsByUser[userId].map((ticket) => (
                            <li key={ticket.id} style={{ marginBottom: "8px" }}>
                                <CustomTicketCard
                                    ticket={ticket}
                                    getUserAvailability={getUserAvailability}
                                />
                            </li>
                        ))}
                    </ul>
                </Grid>
            ))}
        </>
    );
}

export default UserTicketGroup;