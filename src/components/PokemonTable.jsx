
import { useState, useEffect } from 'react';

// material mui
import {
    Table,
    TableBody,
    TableContainer,
    Box,
    Container,
    Paper,
    Typography,
    CircularProgress,
    TableCell,
    TableRow,
    Grid
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


// utils
import { TableHeadTitles, ROWS_PER_PAGE } from '../utils/data'
import { fetchPokemonData } from '../utils/fetchPokemonData';


// components
import PokemonCard from './PokemonCard';
import PokemonTableHeader from './PokemonTableHeader';
import PokemonTablePagination from './PokemonTablePagination';
import FilterComponent from './FilterComponent';


export default function PokemonTable() {

    const [data, setData] = useState([]);
    const [minPower, setMinPower] = useState(null);
    const [maxPower, setMaxPower] = useState(null);
    const [loading, setLoading] = useState(false)

    //table UI
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE);
    const [connectionErr, setConnectionErr] = useState(false)
    const [search, setSearch] = useState('')
    const [power, setPower] = useState('')
    const [isPowerExiste, SetIsPowerExiste] = useState(true)



    const filters = [
        {
            placeholder: "Search...",
            handleFilter: (e) => {
                setSearch(e.target.value)
            },
            value: search,
            icon: <SearchIcon />
        },
        {
            placeholder: "Power threshold",
            handleFilter: (e) => {
                setPower(e.target.value)
            },
            value: power,
            icon: <FavoriteBorderIcon />
        },

    ]


    const powers = [
        { name: "Min", value: minPower },
        { name: "Max", value: maxPower },
    ]



    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, ROWS_PER_PAGE));
        setPage(0);
    };


    const filteredData = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
        (!power || pokemon.power >= parseInt(power))
    );







    useEffect(() => {
        fetchPokemonData(setData, setLoading, setConnectionErr);
    }, []);





    useEffect(() => {
        // Filter and paginate the data for the current page

        const pageStart = page * rowsPerPage;
        const pageEnd = pageStart + rowsPerPage;
        const paginatedData = filteredData.slice(pageStart, pageEnd);

        // Calculate the min and max power for the current page
        const pagePowers = paginatedData.map((pokemon) => pokemon.power);
        if (pagePowers.length > 0) {
            SetIsPowerExiste(true)

            const min = Math.min(...pagePowers);
            const max = Math.max(...pagePowers);
            setMinPower(min);
            setMaxPower(max);
        } else {
            setMinPower(null);
            setMaxPower(null);
            SetIsPowerExiste(false)
        }
    }, [data, page, rowsPerPage, search, filteredData]);



    return (

        <Container >
            <Container>
                <Paper sx={{ p: 2 }}>
                    <Grid sx={{ p: 2 }} container spacing={2}>
                        {filters.map((filter, index) => {
                            return (
                                <Grid item sx={{ my: 1 }} key={index} xs={12} md={6}>
                                    <FilterComponent filter={filter} />
                                </Grid>
                            )
                        })}
                    </Grid>


                    <Box>



                        {isPowerExiste ?
                            powers.map((power, index) => {
                                return (
                                    <Typography key={index}>
                                        {power.name} Power: {power.value}
                                    </Typography>
                                )

                            }) : (<Typography>there is no data to calculate min and max power</Typography>)}
                    </Box>

                </Paper>
            </Container>

            <Container sx={{ my: 5 }}>
                <TableContainer>
                    <Table size='small'>
                        <PokemonTableHeader tableHeadTitles={TableHeadTitles} />
                        <TableBody>
                            {!loading &&
                                filteredData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((pokemon) => (
                                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                                    ))
                            }
                            {!loading && emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={ROWS_PER_PAGE} />
                                </TableRow>
                            )}
                            {!loading && connectionErr && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={ROWS_PER_PAGE} >
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                                            <img width={90} alt="NETWORK PROBLEM" src="/no-Wifi-service.png" />

                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Typography variant="h6" color="#383737"> Check your internet connection and try again.
                                            </Typography>
                                        </Box>

                                    </TableCell>
                                </TableRow>
                            )}
                            {loading && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={ROWS_PER_PAGE} >
                                        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3, pb: 1, px: 1 }}>
                                            <CircularProgress />
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 3, px: 1 }}>
                                            <Typography variant="h6" color="#383737">Loading Data ..</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                {!loading && !connectionErr && data.length > 0 && (
                    <PokemonTablePagination
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                )}
            </Container>
        </Container >
    );
}