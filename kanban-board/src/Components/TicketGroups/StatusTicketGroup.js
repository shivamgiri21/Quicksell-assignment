import { Grid, Paper, Radio, styled } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import MoreButton from "../Buttons/MoreButton";
import AddButton from "../Buttons/AddButton";
import { PriorityIcons } from "../GroupComponents/PriorityGroup";
import { ProfileIcon } from "../GroupComponents/UserGroup";
import { statusIcons, statusValues } from "../GroupComponents/StatusGroup";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const CustomTicketCard = ({ ticket, getUserAvailability }) => {
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
                            marginBottom: "0.2rem",
                        }}
                    >
                        {ticket.id}
                    </p>
                    <ProfileIcon
                        userId={ticket.userId}
                        getUserAvailability={getUserAvailability}
                    />
                </div>
                <p
                    style={{
                        margin: "0",
                        fontSize: 15,
                        fontWeight: "600",
                        marginBottom: "1rem",
                    }}
                >
                    {ticket.title}
                </p>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {PriorityIcons(ticket.priority)}
                    {ticket?.tag?.map((tag) => (
                        <Paper style={{ padding: "0.1rem 0.2rem 0.2rem 0.1rem" }}>
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
const CustomLabel = styled("label")({
    display: "flex",
    alignItems: "center",
    padding: "0px",
});


const StatusTicketGroup = ({ TicketsByStatus }) => {
    const { data } = useContext(DataContext)
    const getUserAvailability = (userId) => {
        const user = data.users.find((user) => user.id === userId);
        return user?.available || false;
    };

    return (
        <>
            {statusValues.map((status) => (
                <Grid item lg={2.4} key={status} padding={2}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomLabel>
                            <img
                                src={statusIcons[status]}
                                alt="Status Icon"
                                style={{ width: 16, height: 16, marginRight: 4 }}
                            />
                            <h4
                                style={{ margin: "0", fontWeight: "500", marginLeft: "0.8rem" }}
                            >
                                {status}
                            </h4>
                            <h4
                                style={{
                                    margin: "0",
                                    fontWeight: "400",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                {TicketsByStatus[status]?.length || 0}
                            </h4>
                        </CustomLabel>
                        <div style={{ marginLeft: "auto" }}>
                            <AddButton />
                            <MoreButton />
                        </div>
                    </div>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {TicketsByStatus[status]
                            ? TicketsByStatus[status].map((ticket) => (
                                <li key={ticket.id} style={{ marginBottom: "8px" }}>
                                    <CustomTicketCard
                                        ticket={ticket}
                                        getUserAvailability={getUserAvailability}
                                    />
                                </li>
                            ))
                            : null}
                    </ul>
                </Grid>
            ))}
        </>
    );
}

export default StatusTicketGroup;