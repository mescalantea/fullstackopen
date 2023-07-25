import axios from 'axios'

const isVisible = (name, search) => name.toLowerCase().includes(search.toLowerCase())

const getAll = async () => {
    return axios
        .get(process.env.REACT_APP_API_URL)
        .then((response) => response.data)
}

const add = async newPerson => {
   return axios
        .post(process.env.REACT_APP_API_URL, newPerson)
        .then(response => response.data)
}


export { getAll, isVisible, add }