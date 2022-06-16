export interface PopularMakes {
    makeList:   Make[];
    pagination: Pagination;
}

export interface Make {
    id:       number;
    name:     string;
    imageUrl: string;
}

export interface Pagination {
    total:       number;
    currentPage: number;
    pageSize:    number;
}
