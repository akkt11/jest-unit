const axios = require('axios')
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings')

const getData = async () => {
    try {
        const response = axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = response.data.map(item => item.id)
        return userIds
    } catch (e) {
        throw new Error(e)
    }

}

module.exports = getData