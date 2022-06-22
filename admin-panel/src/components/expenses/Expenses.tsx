import axios from "axios";
import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Month } from "./models";

const apiUrl = `${(window as any).env.REACT_APP_API_URL}/expenses`;

function Expenses() {

    const [expenses, setExpenses] = React.useState<Month>();

    React.useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setExpenses(response.data);
        });
    }, []);

    return (
        <div>
            <ListGroup>
                {expenses?.expenses.map(e => <ListGroup.Item style={{marginTop: 25, marginBottom: 25}}>
                    <Container>
                        {Object.getOwnPropertyNames(e).map(p =>
                            <Row>
                                <Col>{p}</Col>
                                <Col>{(e as any)[p]}</Col>
                            </Row>
                        )}
                    </Container>
                </ListGroup.Item>)}
            </ListGroup>
        </div>
    );
}

export default Expenses;