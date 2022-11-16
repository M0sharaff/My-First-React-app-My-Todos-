import "./styles.css";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">My Todos !!</h1>
      <Todo text="Attending the 9AM class" />
      <Todo text="Having a good breakfast" />
      <Todo text="Eat plenty of water" />
      <Todo text="Sleep" />
    </div>
  );
}
