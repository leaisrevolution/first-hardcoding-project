import React, { useState, useEffect, useContext } from 'react';
import React, { useState } from "react";
import ProgressBar from "./ProgressBar.js";
import { Link } from 'react-router-dom';
import { UserContext } from "../store/user";


export function testStart = props => {

    const { history } = props;
    const context = useContext(UseContext);
    const [saveData, setSaveData] = useState([]); //질문저장
    const [answer, setAnswer] = useState(''); //선택지저장
}

    useEffect(() => {
        async function loadQuestion() {
        try {
            var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
            };
            const res = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=b7776804e4c61de3cfb023471c48aa0a&q=6`, config);
            setSaveData(res.data['RESULT']);
            console.log("saveData =",saveData);
        } catch (e) {
            console.log('에러 발생 했습니다');
        }
        }
        loadQuestion();
    }, []);

    if(loading)
        return <Title>Loading...</Title>;
    if (error) return <Title>Error!</Title>;

        return (

        )



