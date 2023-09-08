import { TableCell, Typography } from '@mui/material';
import { FieldTableCellPropTypes } from '../utils/propsTypes';


const FieldTableCell = ({ value }) => {
    return (
        <TableCell align="center" component="th" scope="row">
            <Typography variant="subtitle4" noWrap>
                {value}
            </Typography>
        </TableCell>
    )
}


FieldTableCell.propTypes = FieldTableCellPropTypes;


export default FieldTableCell