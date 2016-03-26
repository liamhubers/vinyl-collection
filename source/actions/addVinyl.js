export const ADD_VINYL = 'ADD_VINYL';

export default function addVinyl(name) {
  return dispatch => {
    dispatch({
      type: ADD_VINYL,
      item: {
        name,
      },
    });
  };
}
