const initialState = {
  items: [{
    name: 'A',
  }, {
    name: 'B',
  }],
};

export default function vinyl(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
