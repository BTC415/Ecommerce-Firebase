//importing utils
import { v4 as uuidv4 } from 'uuid';
import { columns, styles, formatText } from '../../Utils';
//importing types
import { Order } from '../../interfaces';
//importing components
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@material-ui/core';
//props interface
interface OrderHistoryProps {
  orders: Order[];
}
//order history
const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  return (
    <TableContainer className="order__table">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => {
              return (
                <TableCell key={uuidv4()} style={styles}>
                  {column.lable}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(orders) &&
            orders.length > 0 &&
            orders.map(row => {
              return (
                <TableRow key={uuidv4()}>
                  {columns.map(column => {
                    //rendering based on prop
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    const formattedText = formatText(columnName, columnValue);
                    return (
                      <TableCell key={uuidv4()} style={styles}>
                        {formattedText}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderHistory;
