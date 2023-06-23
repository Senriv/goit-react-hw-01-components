import styled from '@emotion/styled';

export const StatContainer = styled.section`
  margin-bottom: 50px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 3px solid #000;
  border-radius: 30%;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
