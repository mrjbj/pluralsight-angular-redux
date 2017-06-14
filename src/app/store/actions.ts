export const FILTER_COURSES = 'courses/FILTER';

export interface IFilterAction {
  type: string, 
  searchText: string
}

export function filterCourses(searchText: string) : IFilterAction {
    return {
        type: FILTER_COURSES,
        searchText
    };
}