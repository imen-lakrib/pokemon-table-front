import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';

function PokemonTablePagination({ count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={"Element in page"}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}


PokemonTablePagination.propTypes = {
    count: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
};
export default PokemonTablePagination;
