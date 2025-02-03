import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  text-decoration: none;
  color: inherit;

  display: block;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`;
