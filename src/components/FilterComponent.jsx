import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import PropTypes from 'prop-types';

const FilterComponent = ({ filter }) => {
    return (
        <FormControl sx={{ width: "90%" }} variant="outlined">
            <OutlinedInput
                size='small'
                placeholder={filter.placeholder}
                type='text'
                onChange={filter.handleFilter}
                value={filter.value}

                startAdornment={
                    <InputAdornment position="start">
                        <IconButton edge="start">
                            {filter.icon}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

FilterComponent.propTypes = {
    filter: PropTypes.shape({
        placeholder: PropTypes.string.isRequired,
        handleFilter: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
    }).isRequired,
};

export default FilterComponent