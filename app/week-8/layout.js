// Code for the layout component, which wraps the entire application and provides the AuthContextProvider to all children components.

import { AuthContextProvider } from "./_utils/auth-context";
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;