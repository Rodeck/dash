export interface Month {
    year: string;
    month: string;
    expenses: Expense[];
}

export interface Expense {
    day: number,
    amount: number,
    name: string,
    overdue: number,
}