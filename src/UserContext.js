import { createContext, useEffect, useState, useContext } from "react";
import userFromAPI from "./user.json";

const UserContext = createContext({
  user: null
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userFromAPI);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const user = useContext(UserContext);
  return user;
};

export { UserProvider, useUser };
