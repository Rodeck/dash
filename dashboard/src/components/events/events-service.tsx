import events from './events.json';
import { Calendar, Event } from './events-component';
import moment from 'moment';

let recentCount = 3;

const EventsService = {

    getCalendar() : Calendar {
        const now = new Date();
        let events = this.getEvents();
        let incomingEvents = events.filter(event => event.date > now);
        
        return {
            allEvents: events,
            allEventsCount: incomingEvents.length,
            closeEvents: incomingEvents
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .slice(0, recentCount),
        }
    },

    getEvents() : Event[] {
        return events.map<Event>(event => ({
            name: event.name,
            date: moment(event.date, "DD-MM-YYYY").toDate(),
        }));
    }
};

export default EventsService;