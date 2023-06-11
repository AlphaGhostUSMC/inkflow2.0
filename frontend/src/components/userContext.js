import { createContext, useState, useMemo } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userInfo, setUserInfo] = useState({});
  const value = useMemo(() => ({userInfo, setUserInfo}), [userInfo, setUserInfo]);
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
