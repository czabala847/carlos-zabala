import React, { useReducer } from "react";
import { AppAction, AppState, AppActionKind } from "models/types";

import { db } from "store/db";

const defaultState: AppState = {
  projects: db,
};

/*
    Ejemplo de manejo del estado con use reducer
*/
const useProjects = () => {
  const reducer = (state: AppState, action: AppAction) => {
    switch (action.type) {
      //solo un ejemplo
      case AppActionKind.GET_ALL_PROJECTS:
        return { ...state, projects: state.projects };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  // const getAll = () => {
  //   dispatch({ type: AppActionKind.GET_ALL_PROJECTS });
  // };

  // const getAllProjects = () => {
  //   return [...state.projects];
  // };

  return { projects: [...state.projects] };
};

export { useProjects };
