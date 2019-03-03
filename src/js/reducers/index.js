import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  articles: [],
  isFoundBadWords: false
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      isFoundBadWords: false
    });
  } else if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      isFoundBadWords: true
    });
  }
  return state;
}

export default rootReducer;
