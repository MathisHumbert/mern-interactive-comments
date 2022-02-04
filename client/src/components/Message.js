import { useState } from 'react';
import styled from 'styled-components';
import FooterMessage from './FooterMessage';
import HeaderMessage from './HeaderMessage';
import ReplyText from './ReplyText';

const Message = ({ user, createdAt, content, replyingTo, id, replyID }) => {
  const [edit, setEdit] = useState(false);
  const [reply, setReply] = useState(false);

  return (
    <Wrapper>
      <article>
        <HeaderMessage {...user} createdAt={createdAt} />
        {edit ? (
          'edit'
        ) : (
          <p>
            {replyingTo && <span>@{replyingTo}</span>} {content}
          </p>
        )}
        <FooterMessage
          username={user.username}
          id={id}
          replyID={replyID}
          setReply={setReply}
          setEdit={setEdit}
        />
      </article>
      {reply && (
        <ReplyText id={id} username={user.username} setReply={setReply} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  article {
    background: #ffffff;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p span {
    color: var(--moderate-blue-color);
    font-weight: 500;
  }
`;
export default Message;
