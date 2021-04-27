//importing types
import { Order } from '../../interfaces';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
//props interface
interface OrderDetailsProps {
  order: Order;
}
//order details
const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderDetails;
