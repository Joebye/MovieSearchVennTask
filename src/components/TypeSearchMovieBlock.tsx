import { Box, Button, TextField } from "@mui/material";
import React from "react";

type Props = {
    onClickFn: () => void;
    onChangeFn: (event: any) => void;
    
}

const TypeSearchMovieBlock: React.FC<Props> = (props) => {

  return (
    
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "60vw",
            gap: "5px",
            mt: '1vh'
          }}
        >
          <TextField
            size="small"
            type="text"
            required
            fullWidth
            label="Type movie name..."
            onChange={props.onChangeFn}
            
          />
          
          <Button
          size="medium"
            onClick={() => props.onClickFn()}
            variant="contained"
            color="primary"
          
          >
            Search
          </Button>
          </Box>

    );
}

export default TypeSearchMovieBlock;