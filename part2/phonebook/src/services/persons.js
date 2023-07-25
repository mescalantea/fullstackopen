import axios from 'axios'

const isVisible = (name, search) => name.toLowerCase().includes(search.toLowerCase())

const getAll = async () => {
    return axios
        .get(process.env.REACT_APP_API_URL )
        .then((response) => response.data)
}

const add = async newPerson => {
    return axios
        .post(process.env.REACT_APP_API_URL, newPerson)
        .then(response => response.data)
}

const update = async newPerson => {
    return axios
        .put(`${process.env.REACT_APP_API_URL}/${newPerson.id}`, newPerson)
        .then(response => response.data)
}

const remove = id => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/${id}`)
}


export { getAll, isVisible, add, remove, update }