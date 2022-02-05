import styled from 'styled-components';
import { useGlobalContext } from '../contextAPI/context';
import { usersData } from '../data';

const SelectUser = () => {
  const { userSelected } = useGlobalContext();

  return (
    <Wrapper>
      <h1>Select your user</h1>
      <div className='user-container'>
        {usersData.map((item) => {
          const { id, name, img } = item;
          return (
            <article key={id} onClick={() => userSelected(name)}>
              <img src={img} alt='name' />
              <h2>{name}</h2>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  .user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  article {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 150px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }
`;
export default SelectUser;
