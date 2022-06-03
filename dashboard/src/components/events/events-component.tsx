
import { useState, useEffect } from 'react';
import { Col, Container, ListGroup, Row, ListGroupItem } from 'react-bootstrap';
import EventsService from './events-service';

export interface Event {
    name: string;
    date: Date;
}

export interface Calendar {
  closeEvents: Event[];
  allEvents: Event[];
  allEventsCount: number;
}

export const EventsComponent = () => {
    const [closeEvents, setCloseEvents] = useState(Array<Event>());
    const [allEvents, setAllEvents] = useState(Array<Event>());

    useEffect(() => {
      let secTimer = setInterval( () => {
        buildEvents();
      },1000)
  
      return () => clearInterval(secTimer);
    }, []);

    function buildEvents() {
      let calendar = EventsService.getCalendar();
      setCloseEvents(calendar.closeEvents);
      setAllEvents(calendar.allEvents);
    }

    return (
      <div>

        <span>All events: {allEvents.length}</span>
        <ListGroup>
          {closeEvents.map((event, idx) => (<ListGroupItem style={
            {
              display: 'flex',
              padding: '0.2rem 1rem'
            }
          }>
            {<span style= {{flex: 1}}>{idx+1}.</span>}
            {<span style= {{flex: 4}}>{event.date.toDateString()}</span>}
            {<span style={{alignSelf: 'flex-end', flex: 4}}>{event.name}</span>}
          </ListGroupItem>))}
        </ListGroup>

      </div>
    )
}