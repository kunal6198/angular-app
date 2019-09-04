export interface Result {
    popularity: number;
    id: number;
    title: string;
    original_title: string;
    release_date:string;
    poster_path:string;
    overview:string;
    vote_count: number;
    vote_average:number;
}

export interface IMovie {
    title : string,
    vote_average : number,
    overview : string
    results : Result[]
};



export interface DMovie {
    title : string,
    vote_average : number,
    overview : string
};
export interface FMovie {
    title : string,
    vote_average : number,
    overview : string,
    results : Result[]
};