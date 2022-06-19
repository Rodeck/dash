import axios from 'axios';
import { Month } from './models/month';

const ExpensesService = {

    async getExpenses() : Promise<Month> {
        let baseUrl = (window as any).env.REACT_APP_API_URL!;
        let apiUrl = `${baseUrl}/expenses`;
        let result = await axios.get<Month>(apiUrl);
        let currentDay = new Date().getDate();
        result.data.expenses = result.data.expenses.sort((a, b) => a.day - b.day).map(expense => {
            let overdue = 0;
            if (expense.day < currentDay) overdue = -1;
            if (expense.day > currentDay) overdue = 1;
            if (expense.day === currentDay) overdue = 0;
            
            expense.overdue = overdue;
            return expense;
        });

        return result.data
    },
};

export default ExpensesService;