import styled from 'styled-components';
import { useGlobalContext } from '../contextAPI/context';

const HeaderMessage = ({ image, username, createdAt }) => {
  const {
    user: { username: user },
  } = useGlobalContext();

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

  p {
    line-height: 0;
  }

  @media (min-width: 1440px) {
    margin-left: 64px;
    margin-bottom: 22px;
  }
`;

export default HeaderMessage;
