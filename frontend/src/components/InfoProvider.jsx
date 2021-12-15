import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function InfoProvider(props) {
  const [isLog, setIsLog] = useState(false);
  return (
    <UserContext.Provider value={[isLog, setIsLog]}>
      {props.children}
    </UserContext.Provider>
  );
}
