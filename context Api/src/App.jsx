import React from "react";
import { ThemeProvider } from "./Themecontext";
import ThemeToggle from "./ThemeToggle";
function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
    
  );
}

export default App;



/*import React from "react";
import { UserProvider } from "./UserContext";
import Auth from "./Auth";

function App() {
  return (
    <UserProvider>
      <Auth />
    </UserProvider>
  );
}

export default App;*/







