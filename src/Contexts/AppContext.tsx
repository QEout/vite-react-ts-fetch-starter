//App context
import { createContext, ReactNode, useState } from "react";

export const AppContext = createContext({
  user: null,
  setUser: (user: any) => {},
});

//App provider
export default function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
