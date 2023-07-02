export interface IMovies {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieDetailed {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: IBelongstocollection;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: string;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductioncompany[];
    production_countries: IProductioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenlanguage[];
    status: string;
    tagline: string;
    title: string | undefined;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ISpokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface IProductioncountry {
    iso_3166_1: string;
    name: string;
}

export interface IProductioncompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IBelongstocollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface ICast {
    id: number;
    cast: IActor[];
    crew: ICrew[];
}

export interface ICrew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    credit_id: string;
    department: string;
    job: string;
}

export interface IActor {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface IGenres {
    genres: IGenre[];
}

export interface IGenreMovies {
    genre: string;
    movies: IMovieDetailed[];
}