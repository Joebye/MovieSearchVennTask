import { MoviesSet } from "../model/MoviesSet";


export default interface MovieService {
    getMovie(page: number, name: string): Promise<MoviesSet>
}
