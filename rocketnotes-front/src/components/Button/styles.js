import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: none;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
