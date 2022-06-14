import axios from 'axios';
import {List} from './models/list';

const TrelloService = {

    async getLists() : Promise<List[]> {
        let url = (window as any).env.REACT_APP_TRELLO_URL!;
        let result = await axios.get<List[]>(url);

        return result.data
    },
};

export default TrelloService;