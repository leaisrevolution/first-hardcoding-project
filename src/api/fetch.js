import axios from "axios";


const fetchData = async (apiKey, questionNumber=6) => {
    const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${apiKey}&q=${questionNumber}`)
    console.log(response)
}

export default fetchData