import Child from "./Child";
import "./styles.css";
import { UserProvider } from "./UserContext";

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <Child />
      </UserProvider>
    </div>
  );
}
