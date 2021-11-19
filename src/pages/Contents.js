import React, { useState,   useEffect } from 'react';
import ProgressBar from "./ProgressBar.js";
import axios from "axios";

const Contents = props => {

    const { history } = props;
    // const [question, setQuestion] = useState([])
    // useEffect(() => {

    //     const fetchEvents = async () => {
    //         const res = await axios.get("https://www.career.go.kr/inspct/openapi/test/questions?apikey=b7776804e4c61de3cfb023471c48aa0a&q=6")
    //         .then(res => res.data.RESULT)
    //         .then(setQuestion)
    //     }

    //     fetchEvents()

    // }, [])

    // console.log(question)

    return (

        <div Id="btn">

        <div>
            <button
                className="back"
                onClick={() => {history.push("/guide");}}>
                뒤로가기
            </button>
        </div>

        <div>
            <button
                className="start"
                onClick={() => {history.push("/contents");}}>
                다음으로
            </button>
        </div>

    </div>
    )
}


export default Contents;