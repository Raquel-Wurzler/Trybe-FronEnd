import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Controls from './components/Controls';
import emailsList from './data/emailsList';

function App() {
  const [messages, setMessages] = useState(emailsList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === 1);
  
    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  };

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: 1 }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: 0 }));
    setMessages(allAsRead);
  };

  return (
    <div className="App">
      <header>
        <h1>Trybe Mail</h1>
      </header>
      <Controls markAllAsRead={markAllAsRead} markAllAsUnread={markAllAsUnread} />
      <List messages={messages} setMessageStatus={setMessageStatus}/>
   </div>
  );
}

export default App;
