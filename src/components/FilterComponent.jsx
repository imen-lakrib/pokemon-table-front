import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { FilterComponentPropTypes } from "../utils/propsTypes";

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



FilterComponent.propTypes = FilterComponentPropTypes;


export default FilterComponent