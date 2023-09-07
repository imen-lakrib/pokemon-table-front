import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableHead } from "@mui/material";
import PropTypes from 'prop-types';

function PokemonTableHeader({ tableHeadTitles }) {
  return (
    <TableHead sx={{ background: "#e9ecef" }}>
      <TableRow>
        {tableHeadTitles.map((title) => (
          <TableCell key={title.id} align={'center'}>
            {title.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

PokemonTableHeader.propTypes = {
  tableHeadTitles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['center']),
    name: PropTypes.string.isRequired,
  })).isRequired,
};
export default PokemonTableHeader;
