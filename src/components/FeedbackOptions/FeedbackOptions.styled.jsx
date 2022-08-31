import styled from '@emotion/styled';

export const Button = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  width: 80px;
  height: 50px;
  border-radius: 20%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  & + & {
    margin-left: 15px;
  }
`;
