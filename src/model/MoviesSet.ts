import { MovieItem } from "./MovieItem";


export type MoviesSet = {
page: number,
per_page: number,
total: number,
total_pages: number,
data: MovieItem[]; 
}
