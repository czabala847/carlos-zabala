import React from "react";
import { AppContextType, Project } from "models/types";

import { useProjects } from "hooks/useProjects";

const AppContext = React.createContext<AppContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const useAppContext = (): AppContextType => {
  return React.useContext(AppContext);
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const { projects } = useProjects();

  return (
    <AppContext.Provider value={{ projects }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
