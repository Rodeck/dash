
import { useState, useEffect } from 'react';
import { ListGroupItem, Table } from 'react-bootstrap';
import TrelloService from './trello-service';
import { List } from './models/list';

export interface Event {
    name: string;
    date: Date;
}

export interface Calendar {
  closeEvents: Event[];
  allEvents: Event[];
  allEventsCount: number;
}

export const TrelloComponent = () => {
    const [lists, setLists] = useState(new Array<List>());

    useEffect(() => {
      let secTimer = setInterval( async () => {
        await fetchData();
      },1000)
  
      return () => clearInterval(secTimer);
    }, []);

    async function fetchData() {
      let lists = await TrelloService.getLists();
      setLists(lists);
    }

    return (

      <Table striped bordered hover style={{tableLayout: 'fixed'}}>
        <thead>
          <tr>
            {lists.map(list => <th>{list.name}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {
            lists.map(list => <td>
              { list.items.map(item => <ListGroupItem>{item.name}</ListGroupItem>) }
            </td>)}
          </tr>
        </tbody>
      </Table>
    )
}