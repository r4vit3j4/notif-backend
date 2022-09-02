import "./App.css";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://172.16.220.19:3000");

function App() {
  const handleClick = () => {
    socket.emit("test");
  };
  return (
    <div className="App">
      <button onClick={() => handleClick()}>Send</button>
    </div>
  );
}

export default App;
