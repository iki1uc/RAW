export function ZoneConflict(Q, X) {
    if (X.priority > Q.priority) return "X81 gewinnt";
    if (Q.priority > X.priority) return "Q81 gewinnt";
    return "Gleichstand – Meta entscheidet";
}

