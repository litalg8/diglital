const initialState = {
    filteredProjects: [],
    filterBy: null
}

export function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                ...state,
                filteredProjects: action.filteredProjects
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
            default:
            return state;
    }
}

