import axios from "axios";


const fetchData = async (apiKey, questionNumber=6) => {
    const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${apiKey}&q=${questionNumber}`)
    console.log(response)
}

export default fetchData


import axios from 'axios';


const getQuestion = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=b7776804e4c61de3cfb023471c48aa0a&q=6`
const getResult = `www.career.go.kr/inspct/openapi/test/report?apikey=b7776804e4c61de3cfb023471c48aa0a&qestrnSeq=6`


let Question = []
axios.get(getQuestion)
    .then((res) => {
        Question.push(res.data.RESULT)
    })
    .catch(err => console.log(err))
