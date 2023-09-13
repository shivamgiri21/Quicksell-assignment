const Utils = (data, AppState) => {

    const TicketsByUser = {}, TicketsByStatus = {}, TicketsByPriority = {};

    data?.tickets?.forEach((ticket) => {
        if (!TicketsByUser[ticket.userId]) TicketsByUser[ticket.userId] = [];
        if (!TicketsByStatus[ticket.status]) TicketsByStatus[ticket.status] = [];
        if (!TicketsByPriority[ticket.priority]) TicketsByPriority[ticket.priority] = [];

        TicketsByUser[ticket.userId].push(ticket);
        TicketsByStatus[ticket.status].push(ticket);
        TicketsByPriority[ticket.priority].push(ticket);
    });

    const compareTitles = (a, b) => {
        return a.title.localeCompare(b.title);
    };

    const comparePriority = (a, b) => {
        return a.priority - b.priority;
    };

    let comparator;
    switch (AppState.ordering) {
        case "priority":
            comparator = comparePriority;
            break;
        case "title":
            comparator = compareTitles;
            break;
        default:
            break;
    }

    for (const user in TicketsByUser) {
        TicketsByUser[user]?.sort(comparator);
    }
    for (const status in TicketsByStatus) {
        TicketsByStatus[status]?.sort(comparator);
    }
    for (const priority in TicketsByPriority) {
        TicketsByPriority[priority]?.sort(comparator);
    }

    return {TicketsByUser, TicketsByStatus, TicketsByPriority}
}

export default Utils