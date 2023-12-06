import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Pagination from '@mui/material/Pagination';

type Props = {
  totalPages: number;
  onClickFn: (event: React.ChangeEvent<unknown> | null, page: number) => void 
}

const PaginationMovie: React.FC<Props> = (props) => {
    return <Box sx={{ mt: '5px', ml: '2vw', display: 'flex', justifyContent: 'center'}}>
         <Stack spacing={2}>
      <Pagination color="primary" count={props.totalPages} onChange={props.onClickFn}/>
      
    </Stack>

    </Box>


}

export default PaginationMovie;