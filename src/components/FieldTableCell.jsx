import { TableCell, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const FieldTableCell = ({ value }) => {
    return (
        <TableCell align="center" component="th" scope="row">
            <Typography variant="subtitle4" noWrap>
                {value}
            </Typography>
        </TableCell>
    )
}

FieldTableCell.propTypes = {
    value: PropTypes.string.isRequired,
};

export default FieldTableCell