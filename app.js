const currentUser = { name: "Way2withMemer", role: "admin" };

let messages = [
  { user: "Way2withMemer", role: "admin", time: "10:18 PM", text: "Wow! This is amazing!" },
  { user: "NitroGames101", role: "admin", time: "10:18 PM", text: "yeah lol" },
  { user: "Way2withMemer", role: "admin", time: "10:18 PM", text: "You can even add images!", image: "car-meme.jpg" }
];

const chatWindow = document.getElementById("chatWindow");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function renderMessages() {
  chatWindow.innerHTML = "";
  messages.forEach((msg, index) => {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");

    const header = document.createElement("div");
    header.classList.add("message-header");

    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("username");
    usernameSpan.textContent = msg.user;

    if (msg.role === "admin") {
      const adminTag = document.createElement("span");
      adminTag.classList.add("admin-tag");
      adminTag.textContent = "Admin";
      usernameSpan.appendChild(adminTag);
    }

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("timestamp");
    timeSpan.textContent = msg.time;

    header.appendChild(usernameSpan);
    header.appendChild(timeSpan);

    if (currentUser.role === "admin") {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "❌";
      deleteBtn.onclick = () => {
        messages.splice(index, 1);
        renderMessages();
      };
      header.appendChild(deleteBtn);
    }

    const textDiv = document.createElement("div");
    textDiv.classList.add("message-text");
    textDiv.textContent = msg.text;

    msgDiv.appendChild(header);
    msgDiv.appendChild(textDiv);

    if (msg.image) {
      const img = document.createElement("img");
      img.src = msg.image;
      msgDiv.appendChild(img);
    }

    chatWindow.appendChild(msgDiv);
  });
}

sendBtn.addEventListener("click", () => {
  if (messageInput.value.trim() !== "") {
    messages.push({
      user: currentUser.name,
      role: currentUser.role,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: messageInput.value
    });
    messageInput.value = "";
    renderMessages();
  }
});

renderMessages();
