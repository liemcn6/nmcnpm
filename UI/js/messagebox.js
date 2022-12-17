const messageInput = document.querySelector('.action__input');
const sendButton = document.querySelector('.action__send');
const messageChat = document.querySelector('.message-box__chat__main');

const sendMessage = function(){
    let message = messageInput.value.trim();
    console.log(message);
    messageInput.value = '';
    messageInput.focus();
    if(message === '') return;
    const html = `<p class="massage-out">${message}</p>`
    messageChat.insertAdjacentHTML('beforeend', html);
    messageChat.scrollTop = messageChat.scrollHeight;
}

sendButton.addEventListener('click', sendMessage);
document.addEventListener('keydown',(e)=>{
    if(e.code === 'Enter') sendMessage();
});