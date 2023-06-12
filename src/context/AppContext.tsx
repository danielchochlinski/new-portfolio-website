import React, { createContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};
const AppContext = createContext({});
export const AppContextProvider = ({ children }: Props) => {
  const [projectId, setProjectId] = useState<string>("");
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
