import { DesktopNavigation } from "./components/navigation/desktopnavigation/DesktopNavigation";
import { Routing } from "./routes/Routing";
import { UserProvider } from "./shared/provider/UserProvider";
import "./shared/design/Global.css";

function App() {
  return (
    <UserProvider>
      <Routing>
        <DesktopNavigation />
      </Routing>
    </UserProvider>
  );
}

export default App;
