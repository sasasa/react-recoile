import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "佐伯";
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ contextName, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
