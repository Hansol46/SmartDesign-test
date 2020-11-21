import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://smart-disign-test.herokuapp.com'
})

export default instance