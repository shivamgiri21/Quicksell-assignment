import { useEffect } from "react";

const PriorityTicketGroup = (
    TicketsByPriority,
    priorityIcons,
    statusIcons,
    priorityValues,
    priorityLabels,
    statusValues
) =>{
    useEffect(()=>console.log(TicketsByPriority))
    return(
        <>
            Priority
        </>
    )
}
export default PriorityTicketGroup;