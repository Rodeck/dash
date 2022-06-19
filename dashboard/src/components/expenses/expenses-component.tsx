
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ExpensesService from './expenses-service';
import { Month } from './models/month';

export interface Event {
    name: string;
    date: Date;
}

export interface Calendar {
  closeEvents: Event[];
  allEvents: Event[];
  allEventsCount: number;
}

export const getOverdueClass = (overdue: number) => {
  if (overdue === 0) return 'table-warning';
  if (overdue === 1) return 'table-succes';
  if (overdue === -1) return 'table-danger';
}

export const ExpensesComponent = () => {
    const [month, setMonth] = useState<Month>();

    useEffect(() => {
      let secTimer = setInterval( async () => {
        await fetchData();
      },10000)
  
      return () => clearInterval(secTimer);
    }, []);

    async function fetchData() : Promise<Month> {
      let expenses = await ExpensesService.getExpenses();
      setMonth(expenses);

      return expenses;
    }

    return (

      <Table bordered style={{tableLayout: 'fixed'}}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Amount</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            month?.expenses.map(expense => <tr className={getOverdueClass(expense.overdue)}>
              <td>{expense.day}</td>
              <td>{expense.amount}</td>
              <td>{expense.name}</td>
            </tr>)
          }
          <tr>
            <td><span style={{fontWeight: 500}}>Upcoming:</span></td>
            <td><span style={{fontWeight: 500}}>{month?.totalUpcomingAmount}</span></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    )
}
