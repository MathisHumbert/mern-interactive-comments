import { useState } from 'react';
import styled from 'styled-components';
import FooterMessage from './FooterMessage';
import HeaderMessage from './HeaderMessage';
import ReplyForm from './ReplyForm';
import EditForm from './EditForm';

const Message = ({
  user,
  createdAt,
  content,
  replyingTo,
  id,
  replyID,
  score,
  main,
}) => {
  const [edit, setEdit] = useState(false);
  const [reply, setReply] = useState(false);

  return (
    <Wrapper className={main ? 'main-message' : 'reply-message'}>
      <article>
        <HeaderMessage {...user} createdAt={createdAt} />
        {edit ? (
          <EditForm
            id={id}
            replyID={replyID}
            setEdit={setEdit}
            content={content}
          />
        ) : (
          <p>
            {replyingTo && <span>@{replyingTo}</span>} {content}
          </p>
        )}
        {!edit && (
          <FooterMessage
            username={user.username}
            id={id}
            replyID={replyID}
            setReply={setReply}
            setEdit={setEdit}
            score={score}
          />
        )}
      </article>
      {reply && (
        <ReplyForm id={id} username={user.username} setReply={setReply} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 1rem;

  &.reply-message {
    padding-left: 1rem;
    border-left: 2px solid var(--border-color);
  }

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
