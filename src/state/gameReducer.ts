import { GameAction, GameState } from "../types/@types";

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "UPDATE_CARDS": {
      return { ...state, cards: action.payload }; // TODO: this format is important (return the whole states but override the cards list only)
    }
    case "COMPARE_CARDS": {
      return { ...state, isComparing: action.payload };
    }
    default:
      return state;
  }
}

export default gameReducer;
