import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;

  & tbody tr:nth-of-type(odd) {
    background: #fff;
  }

  & tbody tr:nth-of-type(even) {
    background: #f7f7f7;
  }
`;

export const TableTransactionTh = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
`;

export const TableTransactionTd = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: left;
`;
