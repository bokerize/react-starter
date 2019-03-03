import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return fetch('stats.nba.com/stats/scoreboard/?GameDate=02/14/2015&LeagueID=00&DayOffset=0')
    .then(response => response.json())
    .then(json => {
      return { type: 'DATA_LOADED', payload: json };
    });
}
