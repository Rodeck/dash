import axios from 'axios';
import env from "react-dotenv";
import {List} from './models/list';

const TrelloService = {

    async getLists() : Promise<List[]> {
        console.log(env);
        let url = env.REACT_APP_TRELLO_URL!;
        let result = await axios.get<List[]>(url);

        return result.data
    },
};

export default TrelloService;