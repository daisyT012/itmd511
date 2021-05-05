import { TOGGLE_NAV } from './Navigation.constants';

const initialState = {
  open: false
};

export default function NavBarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return Object.assign({}, state, {
        open: !state.open
      });
    default:
      return state;
  }
}