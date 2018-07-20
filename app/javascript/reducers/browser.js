import { STORE_ITEMS, SELECT_ITEM, TOGGLE_ITEM, CLEAR_SELECTION, SHIFT_SELECT_ITEMS, selectItem } from '../actions/browser';
import { USER_MESSAGE } from '../actions/index';

const browser = (state = {}, action) => {
  switch (action.type) {
    case USER_MESSAGE:
      return Object.assign({}, state, { userMessage: { message: action.message, msgType: action.msgType }});
    case STORE_ITEMS:
      return Object.assign({}, state, { items: Object.values(action.items) });

    case SELECT_ITEM:
      return Object.assign({}, state, { last_shift_selected: [], last_selected: action.key, selected: [state.items[action.key]] });

    case TOGGLE_ITEM:
      if (state.selected.indexOf(state.items[action.key]) == -1) {
        return Object.assign({}, state, { last_shift_selected: [], last_selected: action.key, selected: [...state.selected, ...[state.items[action.key]]]})
      } else {
        return Object.assign({}, state, { last_shift_selected: [], last_selected: action.key, selected: state.selected.filter((s, i) => i != action.key )})
      }

    case SHIFT_SELECT_ITEMS:
      if (typeof state.last_selected == 'undefined') {
        return browser(state, selectItem(action.key));
      } else {

        let current_shift_selected = state.last_shift_selected;

        let selected = current_shift_selected.reduce((memo, value) => {
          let index = memo.indexOf(state.items[value])

          if (index != -1) {
            memo.splice(index, 1);
          }

          return memo;
        }, state.selected);

        let new_shift_selected = [];
        let lowend, highend;

        if (action.key < state.last_selected) {
          lowend = action.key, highend = state.last_selected;
        } else {
          lowend = state.last_selected, highend = action.key;
        }

        while(lowend <= highend) {
          new_shift_selected.push(lowend++);
        }

        selected = new_shift_selected
          .reduce((memo, value) => {

            let material = state.items[value];

            if (!memo.find( (bm) => bm._id == material._id)) {
              memo.push(material);
            }

            return memo;
          }, selected)

        return Object.assign({}, state, { selected, last_shift_selected: new_shift_selected });
      }

    case CLEAR_SELECTION:
      return Object.assign({}, state, { selected: [] });

    default:
      return state;
  }
}

export default browser;