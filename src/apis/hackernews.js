import axios from "axios";

const KEY = "2e1c2204bb1f4ad7a68a534a54890192";

export default axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        Authorization: KEY
    }
})