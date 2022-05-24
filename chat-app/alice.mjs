import { io } from "socket.io-client";
import prompts from 'prompts';

const NAME = "alice";
const socket = io("ws://localhost:3000");

// send a message to the server
socket.emit("hello from client", "Hello");

// receive a message from the server
socket.on("hello from server", (...args) => {
  console.log("Received Hello from Server");
});


while (true) {
  const response = await prompts({
    type: 'text',
    name: 'msg',
    message: 'Plese enter a message (Press exit to quit)?'
  });

  console.log("You entered: ", response.msg);
  if (response.msg == 'exit') {
    process.kill(0)
  }
}