import produce from 'immer';

switch (action.type) {
  case '@cart/ADD':
    return produce(state, (draft) => {
      return;
    });
  case '@cart/REMOVE':
    return produce(state, (draft) => {
      return;
    });
}
