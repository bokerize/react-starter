import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch('http://stats.nba.com/stats/scoreboard/?GameDate=02/14/2015&LeagueID=00&DayOffset=0', {
      method: 'GET',
      mode: 'no-cors',
      'Access-Control-Allow-Origin': '*'
    })
      .then(response => response.json())
      .then(json => {
        console.log('sample', json);
        dispatch({ type: 'DATA_LOADED', payload: 'remote' });
      })
      .catch(e => {
        console.log('ERROR!!!', e);
      });
  };
}
