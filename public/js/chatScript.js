let chatsData = [];

document.addEventListener('DOMContentLoaded', async () => {
    const chatList = document.getElementById('chatList');
    const chatWindow = document.getElementById('chatWindow');
    const chatMessages = document.getElementById('chatMessages');
    const chatTitle = document.getElementById('chatTitle');
    const chatAvatar = document.getElementById('chatAvatar');
    const backButton = document.getElementById('backButton');

    const response = await fetch('/mock.json');
    chatsData = await response.json();

    chatsData.forEach((chat, index) => {
        const item = document.createElement('div');
        item.classList.add('chat-item');
        item.dataset.index = index;

        const avatar = document.createElement('img');
        avatar.src = chat.fulaninImageLink;
        avatar.alt = chat.sender;

        const info = document.createElement('div');
        info.classList.add('chat-info');

        const name = document.createElement('div');
        name.classList.add('chat-name');
        name.textContent = chat.sender;

        const lastMessage = document.createElement('div');
        lastMessage.classList.add('chat-last-message');
        lastMessage.textContent = chat.messages[chat.messages.length - 1].message;

        info.appendChild(name);
        info.appendChild(lastMessage);

        item.appendChild(avatar);
        item.appendChild(info);

        item.addEventListener('click', () => openChat(index));
        chatList.appendChild(item);
    });

    backButton.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
            chatList.style.display = 'flex';  
    });

    function openChat(index) {
        const chat = chatsData[index];
        chatMessages.innerHTML = '';
        chatTitle.textContent = chat.sender;
        chatAvatar.src = chat.fulaninImageLink;

        chat.messages.forEach(msg => {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', msg.from);

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('message-content');
            contentDiv.textContent = msg.message;

            msgDiv.appendChild(contentDiv);
            chatMessages.appendChild(msgDiv);
        });

        chatList.style.display = 'none';
        chatWindow.classList.remove('hidden');
    }
});
