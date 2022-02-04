import styled from 'styled-components';

const user = 'juliusomo';

const HeaderMessage = ({ image, username, createdAt }) => {
  return (
    <Wrapper>
      <img src={image.png} alt={username} />
      <div className='container'>
        <h2>{username}</h2>
        {username === user && <div className='you'>you</div>}
      </div>
      <p>{createdAt}</p>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 32px;
  }

  .container {
    display: flex;
    gap: 8px;
  }

  .you {
    width: 36px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--moderate-blue-color);
    color: #fff;
    line-height: 0;
    font-size: 13px;
    font-weight: 500;
  }
`;

export default HeaderMessage;
