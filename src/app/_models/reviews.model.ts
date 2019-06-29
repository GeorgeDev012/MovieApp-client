export interface Review {
    author: string;
    content: string;
    id: string;
    url: string;
}

export interface Reviews {
    id: number;
    page: number;
    results: Review[];
    total_pages: number;
    total_results: number;
}