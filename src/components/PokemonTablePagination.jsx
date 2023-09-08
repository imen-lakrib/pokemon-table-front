import TablePagination from '@mui/material/TablePagination';
import { PokemonTablePaginationPropTypes } from '../utils/propsTypes';

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



PokemonTablePagination.propTypes = PokemonTablePaginationPropTypes;

export default PokemonTablePagination;
