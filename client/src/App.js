import styled from 'styled-components';
import CreateForm from './components/CreateForm';
import DeleteAside from './components/DeleteAside';
import MessageContainer from './components/MessageContainer';
import SelectUser from './components/SelectUser';
import { useGlobalContext } from './contextAPI/context';

const App = () => {
  const { messages, loading, error, mounted } = useGlobalContext();

  if (!mounted) {
    return <SelectUser />;
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>error...</h1>;
  }

  return (
    <Wrapper>
      {messages.map((message) => {
        return <MessageContainer key={message.id} message={message} />;
      })}
      <CreateForm />
      <DeleteAside />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 730px;
  margin: 0 auto;
`;

export default App;
