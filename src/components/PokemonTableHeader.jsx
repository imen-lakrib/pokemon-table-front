import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableHead } from "@mui/material";
import { PokemonTableHeaderPropTypes } from "../utils/propsTypes";

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



PokemonTableHeader.propTypes = PokemonTableHeaderPropTypes;

export default PokemonTableHeader;
