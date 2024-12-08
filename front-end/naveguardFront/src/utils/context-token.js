import { createContext } from "react";



export const ContextToken = createContext({
    contextTokenPayload: undefined,
    setContextTokenPayload: () => {},
  });