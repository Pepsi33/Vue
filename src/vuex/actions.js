//test


export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}
export const setAuthor = ({commit},msg) => {
    commit('NEWAUTHOR',msg)
}


