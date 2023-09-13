import { Paper, Tooltip } from "@mui/material"
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import SignalCellular3BarIcon from "@mui/icons-material/SignalCellular3Bar";
import SignalCellular1BarIcon from "@mui/icons-material/SignalCellular1Bar";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
};

const priorityValues = [4, 3, 2, 1, 0];

const Urgent = () => {
    return(
        <Tooltip title={priorityLabels[4]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <ErrorTwoToneIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    )
}

const High = () =>{
    return (
        <Tooltip title={priorityLabels[3]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <SignalCellular4BarIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    )
}

const Medium = () =>{
    return (
        <Tooltip title={priorityLabels[2]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <SignalCellular3BarIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    )
}

const Low = () =>{
    return (
        <Tooltip title={priorityLabels[1]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <SignalCellular1BarIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    )
}

const NoPriority = () => {
    return (
        <Tooltip title={priorityLabels[0]} followCursor>
            <Paper style={{ marginRight: "0.3rem", display: "inline-block" }}>
                <MoreHorizIcon
                    style={{ fontSize: "14px", padding: "0.3rem 0.3rem 0.1rem 0.3rem" }}
                />
            </Paper>
        </Tooltip>
    )
}

const PriorityIcons = (priority) => {
    if(priorityLabels[priority] === "Urgent") return <Urgent />;
    if(priorityLabels[priority] === "High") return <High />;
    if(priorityLabels[priority] === "Medium") return <Medium />;
    if(priorityLabels[priority] === "Low") return <Low />;
    if(priorityLabels[priority] === "No priority") return <NoPriority />;
}

export  {PriorityIcons, priorityLabels, priorityValues}