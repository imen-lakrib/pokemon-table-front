import PropTypes from 'prop-types';

export const PokemonCardPropTypes = {
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


export const FieldTableCellPropTypes = {
    value: PropTypes.string.isRequired,
};

export const FilterComponentPropTypes = {
    filter: PropTypes.shape({
        placeholder: PropTypes.string.isRequired,
        handleFilter: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
    }).isRequired,
};

export const PokemonTableHeaderPropTypes = {
    tableHeadTitles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            align: PropTypes.oneOf(['center']),
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export const PokemonTablePaginationPropTypes = {
    count: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
};