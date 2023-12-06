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
        const num = +event.target.innerText;
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
        
        

    async function onClickButtonFn(): Promise<void> {
        // const newMovie: Movie = {name: inputMovie};
        
        // const movies = await movieService.getMovie(undefined, undefined);
        //  console.log(movies);
                
    }

    function handlerMovieName(event: any): void {
        const name = event.target.value;
        setInputMovie(name);
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
        <TypeSearchMovieBlock onClickFn={onClickButtonFn} onChangeFn={handlerMovieName}/>
        
    </Box>
    <Grid movies={curMovies}/>
    <PaginationMovie onClickFn={getPage} totalPages={totalPage}/>
    </>
    )
}

export default StartPage;