import { useReducer } from "react";

import { initialState, typingReducer } from "../reducer/typingReducer";

function useTypingReducer() {
  return useReducer(typingReducer, initialState);
}

export { useTypingReducer };
