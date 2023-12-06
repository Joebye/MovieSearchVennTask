import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MovieItem } from "../model/MovieItem";


type Props = {
    movies: MovieItem[];
}

const Grid: React.FC<Props> = (props) => {
    const showImdbIDColumn = false;
    const columns: GridColDef[] = [
        showImdbIDColumn &&
        {
            field: "imdbID", headerName: 'ID', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "Title", headerName: 'Movie Name', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        },
        {
            field: "Year", headerName: 'Year', flex: 0.5, headerClassName: 'data-grid-header',
            align: 'center', headerAlign: 'center'
        }
        ].filter(Boolean) as GridColDef[]
        
        
        return <Box sx={{ height: '50vh', width: '95vw', mt: '1px', ml: '2vw' }}>
        <DataGrid getRowId={(row) => row.imdbID} columns={columns} rows={props.movies}/>
    </Box>
        
        }

    
export default Grid;