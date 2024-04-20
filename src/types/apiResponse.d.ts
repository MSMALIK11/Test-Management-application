export interface ApiResponse<T> {
    [x: string]: any,
    [x: string]: {
        content: T[]
        Pageable: T[]
    }
}
