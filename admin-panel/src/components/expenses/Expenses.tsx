import axios, { AxiosResponse } from "axios";
import React from "react";
import { Button, Col, Container, Form, ListGroup, Row, Table } from "react-bootstrap";
import { Expense, Month } from "./models";
import { Save, Plus, Trash2 } from 'react-bootstrap-icons';
import BootstrapTable, { ColumnDescription } from 'react-bootstrap-table-next';

// @ts-ignore
import cellEditFactory from 'react-bootstrap-table2-editor';

const columns: ColumnDescription[] = [{
    dataField: '_id',
    text: 'Id',
}, {
    dataField: 'day',
    text: 'Day of the month',
    validator: (cell: any, value: any) => {
        if (value < 1 || value > 31) {
            return {
                valid: false,
                message: 'Day must be between 1 and 31',
                async: false,
            };
        }

        return {
            valid: true,
            async: false,
        }; 
    },
}, {
    dataField: 'amount',
    text: 'Amount'
}, {
    dataField: 'name',
    text: 'Name',
}];

interface ExpensesTableProps {
    expenses: Expense[],
    onSelect: (selected: string[]) => void,
}

const ExpensesTable = ({ expenses, onSelect }: ExpensesTableProps) => {

    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

    const selectRow = (row: Expense, isSelect: boolean, rowIndex: number) => {
        if (selectedRows.indexOf(row._id) === -1)
            setSelectedRows(selectedRows.concat([row._id]));
        else
            setSelectedRows(selectedRows.filter(r => r !== row._id));

        onSelect(selectedRows);
    };

    return (
        <div>
            <BootstrapTable
                keyField='_id'
                data={expenses}
                columns={columns}
                cellEdit={cellEditFactory({mode: 'click'})}
                selectRow={{
                    mode: "radio",
                    clickToSelect: true,
                    bgColor: "#99ccff",
                    onSelect: selectRow,
                    selected: selectedRows
                }}
            />
        </div>

    );
}

function Expenses() {

    const apiUrl = `${(window as any).env.REACT_APP_API_URL}/expenses`;
    const [expenses, setExpenses] = React.useState<Month>();
    const [hasChanges, setHasChanges] = React.useState(true);
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

    React.useEffect(() => {
        fetchData().then((response) => {
            setExpenses(response.data);
        });
    }, []);

    const fetchData = () : Promise<AxiosResponse<Month>> => {
        return axios.get(apiUrl);
    }

    const saveChanges = () => {
        axios.post(apiUrl, expenses).then((response) => {
            fetchData().then(res => setExpenses(res.data));
        });
    }

    const saveNewChanges = (month: Month) => {
        axios.post(apiUrl, month).then((response) => {
            fetchData().then(res => setExpenses(res.data));
        });
    }

    const onSelected = (selectedRows: string[]) => setSelectedRows(selectedRows);

    const createExpense = () => {
        const expense: Expense = {
            amount: 0,
            day: 1,
            name: 'Name',
            _id: new Date().getTime().toString(),
        }
        expenses?.expenses.push(expense);
        let copy = Object.assign({}, expenses);

        setExpenses(copy);
    }

    const deleteExpenses = () => {
        const copy = Object.assign({}, expenses);
        copy.expenses = copy.expenses.filter(e => selectedRows.indexOf(e._id) === -1);
        saveNewChanges(copy);
        setSelectedRows([]);
    }

    return (
        <div>
            <Container>
                <Row style={{ marginTop: 25, padding: 13 }}>
                    <Button
                        variant={!hasChanges? 'outline-secondary' : 'outline-success'}
                        disabled={!hasChanges}
                        style={{ width: 50, marginRight: 5 }}
                        onClick={() => saveChanges() }
                        >
                        <Save />
                    </Button>
                    <Button
                        variant="outline-success"
                        style={{ width: 50, marginRight: 5 }}
                        onClick={() => createExpense() }
                        >
                        <Plus />
                    </Button>
                    <Button
                        variant="outline-success"
                        style={{ width: 50, marginRight: 5 }}
                        onClick={() => deleteExpenses() }
                        >
                        <Trash2 />
                    </Button>
                </Row>
                <Row>
                    <ExpensesTable onSelect={onSelected} expenses={expenses?.expenses ?? []}></ExpensesTable>
                </Row>
            </Container>
        </div>
    );
}

export default Expenses;