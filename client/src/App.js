import { useEffect, useState } from 'react';
import axios from 'axios';
import MessageContainer from './components/MessageContainer';

const App = () => {
  const [messages, setMessages] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios('/api/v1/comments');
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {messages.map((message) => {
        return <MessageContainer key={message._id} {...message} />;
      })}
    </main>
  );
};

export default App;
