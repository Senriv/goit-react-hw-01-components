import PropTypes from 'prop-types';
import {TableTransaction, TableTransactionTh, TableTransactionTd} from './transactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <thead>
        <tr>
          <TableTransactionTh>Type</TableTransactionTh>
          <TableTransactionTh>Amount</TableTransactionTh>
          <TableTransactionTh>Currency</TableTransactionTh>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TableTransactionTd>{item.type}</TableTransactionTd>
              <TableTransactionTd>{item.amount}</TableTransactionTd>
              <TableTransactionTd>{item.currency}</TableTransactionTd>
            </tr>
          );
        })}
      </tbody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
