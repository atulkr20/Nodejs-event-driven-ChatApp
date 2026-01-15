const ChatRoom = require("./chatRoom.js")

const chat = new ChatRoom()

chat.on('join', (user) => {
    console.log(`${user} has joined the chat`)
});
chat.on("message", (user, message) => {
    console.log(`${user}: ${message}`);
});
chat.on("leave", (user) => {
    console.log(`${user} has left the chat`);
});

//  Simulating the chat

chat.join('Atul')
chat.join('Aman')

chat.sendMessage("Atul", "hey Aman, How are you?");
chat.sendMessage("Aman", "Hello Atul, i am doing fine, What about you?");

chat.leave("Aman");
chat.sendMessage("Aman", "This message won't be sent");
chat.leave("Atul")