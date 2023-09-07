import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import FieldTableCell from './FieldTableCell';
import { TableHeadTitles } from '../utils/data';

function PokemonCard({ pokemon }) {
    return (
        <TableRow hover key={pokemon.id} tabIndex={-1}>
            {TableHeadTitles.map((feild, index) => {
                return (<FieldTableCell
                    key={index}
                    value={feild.value === 'type' ? pokemon[feild.value].join(', ') : pokemon[feild.value]}
                />)
            })}

        </TableRow>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.arrayOf(PropTypes.string).isRequired,
        hp: PropTypes.number.isRequired,
        attack: PropTypes.number.isRequired,
        defense: PropTypes.number.isRequired,
        special_attack: PropTypes.number.isRequired,
        special_defense: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
        power: PropTypes.number.isRequired,

    }).isRequired,
};


export default PokemonCard;
