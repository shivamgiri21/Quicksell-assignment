import { Grid, Paper, Radio, styled } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import MoreButton from "../Buttons/MoreButton";
import AddButton from "../Buttons/AddButton";
import { PriorityIcons, priorityLabels, priorityValues } from "../GroupComponents/PriorityGroup";
import { StatusIcon, statusIcons } from "../GroupComponents/StatusGroup";
import { ProfileIcon } from "../GroupComponents/UserGroup";
import { DataContext } from "../../Context/DataContext";
import { useContext } from "react";


const CustomLabel = styled("label")({
    display: "flex",
    alignItems: "center",
    padding: "0px",
});

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
                <div
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
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {ticket?.tag?.map((tag)=>(
                        <Paper  key = {tag} style={{ padding: "0.1rem 0.2rem 0.2rem 0.1rem" }}>
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

const PriorityTicketGroup = ({ TicketsByPriority }) => {
    const { data } = useContext(DataContext)
    const getUserAvailability = (userId) => {
        const user = data.users.find((user) => user.id === userId);
        return user?.available || false;
    };


    return (
        <>
            {priorityValues.map((priority) => (
                <Grid item lg={2.4} key={priority} padding={2}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomLabel>
                            {PriorityIcons(priority)}
                            <h4
                                style={{ margin: "0", fontWeight: "500", marginLeft: "0.8rem" }}
                            >
                                {priorityLabels[priority]}
                            </h4>
                            <h4
                                style={{
                                    margin: "0",
                                    fontWeight: "400",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                {TicketsByPriority[priority]?.length || 0}
                            </h4>
                        </CustomLabel>
                        <div style={{ marginLeft: "auto" }}>
                            <AddButton />
                            <MoreButton />
                        </div>
                    </div>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {TicketsByPriority[priority]
                            ? TicketsByPriority[priority].map((ticket) => (
                                <li key={ticket.id} style={{ marginBottom: "8px" }}>
                                    <CustomTicketCard
                                        ticket={ticket}
                                        statusIcons={statusIcons}
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
export default PriorityTicketGroup;