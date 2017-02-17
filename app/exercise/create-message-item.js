export default function createMessageItem(stupid) {
  const message = document.createElement('li');
  message.innerHTML = `<span class="message-item__username">${stupid.username}</span> ${stupid.message}`;
  return message;
}
