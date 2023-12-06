
import MovieService from "./MovieService";
import { MoviesSet } from "../model/MoviesSet";

export default class MovieServiceApi implements MovieService {
    private baseUrl;

     constructor( baseUrl: string) {
        this.baseUrl = baseUrl;
       
}
    async getMovie(page: number, name: string): Promise<MoviesSet> {
        let url = this.baseUrl;
        url+=`${name != ''? 'search/' : ''}?page=${page}&${name != '' ? `&Title=${name}` : ''}`
        const response = await fetch (url, {method: 'GET'});
        const movies = await response.json();
        return movies;
    }

}