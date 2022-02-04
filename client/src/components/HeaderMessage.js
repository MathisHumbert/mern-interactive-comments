import styled from 'styled-components';

const HeaderMessage = ({ image, username, createdAt }) => {
  return (
    <Wrapper>
      <img src={image.png} alt={username} />
      <h2>{username}</h2>
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
`;

export default HeaderMessage;
