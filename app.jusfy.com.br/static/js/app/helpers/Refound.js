import {
    differenceInCalendarDays,
    addDays,
    isBefore
} from "date-fns";

const getRemainingDays = (startDate, endDate) => {
    const total = differenceInCalendarDays(endDate, startDate);

    const tomorrow = addDays(new Date(), 1);

    if (isBefore(endDate, tomorrow)) {
        return {
            total,
            remaining: 0
        };
    }

    const rangeStart = isBefore(tomorrow, startDate) ? startDate : tomorrow;
    const remaining = differenceInCalendarDays(endDate, rangeStart);

    return {
        total,
        remaining
    };
};

export const calculateRemainingValue = (
    expirationDate,
    startDate,
    planAmount
) => {
    const {
        total,
        remaining
    } = getRemainingDays(
        new Date(startDate),
        new Date(expirationDate)
    );

    const remainingAmount = (planAmount * remaining) / total;
    return {
        amount: Number(remainingAmount.toFixed(2)),
        total,
        remaining
    };
};