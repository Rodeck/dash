// import {createLogger} from '../../logger';
import axios from 'axios';
import {OutputList} from './../models/output-list';
import {List} from './..//models/list';
import {ListItem} from './../models/list-item';

// tslint:disable-next-line: no-console
console.log(process.env.RABBIT_URL);

// const logger = createLogger();

export const getItemsInBoard = async (boardId: string): Promise<OutputList[]> => {
  const url = `https://api.trello.com/1/boards/${boardId}/cards?`;
  const authorizedUrl = authorizeUrl(url);

  const result = await axios.get<ListItem[]>(authorizedUrl);

  if (result.status === 200) {
    const items = result.data;
    const lists = await getLists(boardId);

    return lists.map((list) => {
      const listItems = items.filter((item) => item.idList === list.id).map((item) => {
        return {
          name: item.name
      }});

      return {
        id: list.id,
        name: list.name,
        items: listItems,
      };
    });
  }

  return [];
};

export const getLists = async (boardId: string): Promise<List[]> => {
  const url = `https://api.trello.com/1/boards/${boardId}/lists?`;
  const authorizedUrl = authorizeUrl(url);

  const result = await axios.get<List[]>(authorizedUrl);

  if (result.status === 200) {
    return result.data;
  }

  return [];
};

function authorizeUrl(url: string): string {
  const [token, key] = [process.env.TRELLO_TOKEN, process.env.TRELLO_APIKEY];
  const params = `key=${key}&token=${token}`;

  return url + params;
}
