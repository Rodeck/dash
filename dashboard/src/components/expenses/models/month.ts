export interface Month {
    year: string;
    month: string;
    expenses: Expense[];
    totalAmount: number;
    upcomingExpenses: Expense[];
    totalUpcomingAmount: number;
}

export interface Expense {
    day: number,
    amount: number,
    name: string,
    overdue: number,
}
