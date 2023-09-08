import TableRow from '@mui/material/TableRow';
import FieldTableCell from './FieldTableCell';
import { TableHeadTitles } from '../utils/data';
import { PokemonCardPropTypes } from '../utils/propsTypes';

function PokemonCard({ pokemon }) {
    return (
        <TableRow hover key={pokemon.id} tabIndex={-1}>
            {TableHeadTitles.map((feild, index) => {
                return (
                    <FieldTableCell
                        key={index}
                        value={
                            feild.value === 'type'
                                ? pokemon[feild.value].join(', ')
                                : String(pokemon[feild.value]) // Convert to string
                        }
                    />
                );
            })}
        </TableRow>
    );
}

PokemonCard.propTypes = PokemonCardPropTypes;


export default PokemonCard;
