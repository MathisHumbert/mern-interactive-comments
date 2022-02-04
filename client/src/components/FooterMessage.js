import styled from 'styled-components';
import ReplyBtn from './ReplyBtn';
import UpvoteBtn from './UpvoteBtn';
import EditDeleteBtn from './EditDeleteBtn';

const user = 'juliusomo';

const FooterMessage = ({ username, id, setReply, setEdit, replyID, score }) => {
  return (
    <Wrapper>
      <UpvoteBtn id={id} replyID={replyID} score={score} />
      {username === user ? (
        <EditDeleteBtn setEdit={setEdit} />
      ) : (
        <ReplyBtn setReply={setReply} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;

  h2 {
    line-height: 0;
    color: var(--moderate-blue-color);
  }

  h2,
  .icon {
    transition: color 0.3s ease;
  }
`;
export default FooterMessage;
