import styled from 'styled-components';

const HeaderInfo = ({ image, username, createdAt }) => {
  console.log(image);
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

export default HeaderInfo;
