import { BrowserRouter as Router } from "react-router-dom";
import AppBarComponent from "./features/app-bar/AppBar";

import routes from "./routes/routes";

function App() {
  return (
    <>
      <AppBarComponent />
      <Router>{routes}</Router>
    </>
  );
}

export default App;
