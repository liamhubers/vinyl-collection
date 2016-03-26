import { ADD_VINYL } from 'actions/addVinyl';

const initialState = {
  items: [{
    name: 'A',
  }, {
    name: 'B',
  }],
};

export default function vinyl(state = initialState, action) {
  switch (action.type) {
    case ADD_VINYL:
      return Object.assign({}, state, {
        items: [...state.items, action.item],
      });
    default:
      return state;
  }
}
