import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, ListGroup, Row, Table } from "react-bootstrap";
import { Expense, Month } from "./models";
import { Save } from 'react-bootstrap-icons';
import BootstrapTable from 'react-bootstrap-table-next';


function Expenses() {

    const apiUrl = `${(window as any).env.REACT_APP_API_URL}/expenses`;
    const [expenses, setExpenses] = React.useState<Month>();
    const [hasChanges, setHasChanges] = React.useState(false);

    React.useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setExpenses(response.data);
        });
    }, []);

    const updateValue = (expense: Expense, value: unknown, schema: Column) => {
        (expense as any)[schema.name] = value; 
    }

    interface Column {
        name: string,
        display: string,
        type: 'number' | 'text',
        validator?: (value: string | number) => boolean,
        editable: boolean;
    }

    const schema: Column[] = [
        { name: "amount", display: "Amount", type: 'number', validator: (value) => value > 0, editable: true },
        { name: "day", display: "Day of the month", type: 'number', validator: (value) => value > 0, editable: true },
        { name: "name", display: "Name", type: 'text', editable: true },
        { name: "_id", display: "Key", type: 'text', editable: false },
    ];

    return (
        <div>
            <Container>
                <Row style={{marginTop: 25}}>
                    <Button variant="outline-success" disabled={!hasChanges} style={{width: 50}}><Save /></Button>
                </Row>
                <Row>
                    <Table striped bordered hover style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                {schema.map(s => (<th>{s.display}</th>))}
                            </tr>
                        </thead>
                        <tbody>
                            {expenses?.expenses.map(e => (
                                <tr>
                                    {schema.map(i => (
                                        <td>
                                            <Form.Group>
                                                <Form.Control
                                                    value={(e as any)[i.name]}
                                                    onChange={v => updateValue(e, v.target.value, i)}
                                                    type="text"
                                                    disabled={!i.editable}
                                                />
                                            </Form.Group>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    );
}

const columns = [{
  dataField: '_id',
  text: 'Id'
}, {
  dataField: 'day',
  text: 'Day of the month'
}, {
  dataField: 'amount',
  text: 'Amount'
}];

export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } />

export default Expenses;