import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    <Wrapper>
      {messages.map((message) => {
        return <MessageContainer key={message._id} message={message} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
`;

export default App;
