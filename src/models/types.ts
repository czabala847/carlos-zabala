export interface Project {
  id: number;
  name: string;
  description: string;
  urlRepo: string;
  urlPublic: string;
  technologies: string[];
  img: string;
}

export type AppContextType = {
  projects: Project[];
  // mas metodos
};

//Estado global
export interface AppState {
  projects: Project[];
}

//Actions type
export enum AppActionKind {
  ADD_PROJECT = "ADD_PROJECT",
  DELETE_PROJECT = "DELETE_PROJECT",
  GET_ALL_PROJECTS = "GET_ALL_PROJECTS",
}

//Action and payload
export interface AppAction {
  type: AppActionKind;
  payload?: number | string;
}
