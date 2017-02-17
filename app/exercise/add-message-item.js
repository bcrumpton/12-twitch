import createMessageItem from './create-message-item';
export default function addMessageItem(ul, li) {
  const idiot = createMessageItem(li);
  ul.appendChild(idiot);
}
