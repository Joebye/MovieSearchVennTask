import { Box} from "@mui/material";
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import SearchMovieTitle from "../components/SearcMovieTitle";
import { movieService } from "../config/services-config";
import Grid from "../components/Grid";
import PaginationMovie from "../components/PaginationMovie";
import { MovieItem } from "../model/MovieItem";
import { MoviesSet } from "../model/MoviesSet";
import TypeSearchMovieBlock from "../components/TypeSearchMovieBlock";


const StartPage: React.FC = () => {
    
    const [inputMovie, setInputMovie] = useState<string>('');
    const [curMovies, serCurMovies] = useState<MovieItem[]>([])
    const [curPage, setCurPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);

    

    function getPage(event: any) {
       
        let num = curPage;
        
        if (event.target.innerText) {
            num = +event.target.innerText;
        }
        if (event.currentTarget.ariaLabel == 'Go to next page') {
            num++;
           } 
        if (event.currentTarget.ariaLabel == 'Go to previous page') {
            num--;
                
          }
         
          setCurPage(num);
          
        
    }

    useEffect(() => {
        const fetchData = async () => {
        const movies: MoviesSet = await movieService.getMovie(curPage, inputMovie);
        serCurMovies(movies.data);
        setTotalPage(movies.total_pages);
    }
    fetchData();
    }, [curPage, inputMovie])
        
        
    function onClickButtonFn(str: string) {
        setInputMovie(str);
                
    }

   
    return (
    <>
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px' 
    }}>
       <PageTitle/> 
    </Box>
    <Box sx={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        height: '20vh', 
    }}>
        
        <SearchMovieTitle/>
        <TypeSearchMovieBlock onClickFn={onClickButtonFn}/>
        
    </Box>
    <Grid movies={curMovies}/>
    <PaginationMovie onClickFn={getPage} totalPages={totalPage}/>
    </>
    )
}

export default StartPage;