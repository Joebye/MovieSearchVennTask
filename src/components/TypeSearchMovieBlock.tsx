import { Box, Button, TextField } from "@mui/material";
import React from "react";

type Props = {
     onClickFn: (str: string) => void;
}

const TypeSearchMovieBlock: React.FC<Props> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const movie: string = data.get('movie') as string;
    props.onClickFn(movie);
    
  }
  return (
    
        <Box component='form' onSubmit={handleSubmit} 
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
          name="movie"
            size="small"
            type="text"
            
            fullWidth
            label="Type movie name..."
            
            
          />
          
          <Button
          type="submit"
          size="medium"
            variant="contained"
            color="primary"
          
          >
            Search
          </Button>
          </Box>

    );
}

export default TypeSearchMovieBlock;