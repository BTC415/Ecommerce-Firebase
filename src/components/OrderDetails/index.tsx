//importing types
import { Order } from '../../interfaces';
//importing hooks
import { useEffect } from 'react';
import { useOrdersActions } from '../../hooks';
//importing components
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
//importing utils
import { orderDetailsColumns, styles, formatText } from '../../Utils';
import { v4 as uuidv4 } from 'uuid';

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const orderItems = order && order.orderItems;
  const { setOrderDetails } = useOrdersActions();

  useEffect(() => {
    return () => {
      setOrderDetails(null);
    };
  }, [setOrderDetails]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {orderDetailsColumns.map(column => {
              return (
                <TableCell
                  style={{
                    ...styles,
                    cursor: 'default',
                  }}
                  key={uuidv4()}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(orderItems) &&
            orderItems.length > 0 &&
            orderItems.map(row => {
              return (
                <TableRow key={uuidv4()}>
                  {orderDetailsColumns.map(column => {
                    //rendering based on prop
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    return (
                      <TableCell
                        style={{
                          ...styles,
                          cursor: 'default',
                        }}
                        key={uuidv4()}
                      >
                        {formatText(columnName, columnValue)}
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

export default OrderDetails;
