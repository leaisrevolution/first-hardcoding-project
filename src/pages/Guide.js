import React, { useState, useEffect } from "react";
// import ProgressBar from "./ProgressBar.js";
import { Link, useHistory } from 'react-router-dom';
import MainNav from '../components/mainNav';
import axios from 'axios';
import Foo from '../components/foo';



const Guide = (props) => {

    const history = useHistory();

    let Numbers = [...Array(50)].map((v, i) => i);

    const [answer, setAnswer] = useState([]);
    console.log(answer);
    const [answerlist, setAnswerList] = useState([]);


    async function asyncCall() {
        try {
            const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=73587f95ef371322626bf3a537e9eb3b&q=6')
            const res = response.data.RESULT;
            setAnswer(res.splice(0)) //페이지

            return res;
        } catch(error) {
            console.error(error);
        }
    }
    useEffect(() => asyncCall(), [])


    const contentList = [
        '검사는 이렇게 진행됩니다.',
        '직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.',
        '가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.',
        '아래의 예시 질문에 응답해주세요.',
        '예시 질문에 응답해주셔야 검사가 시작됩니다.',
    ]




    return (

        // div 협곡에 오신걸 환영합니다.. 이건 div협곡 맛보기

        <div>

            <MainNav />

            <div className="wrap">

                <div className="container">


                    <div className="main">
                        <h1 className = "title"> {contentList[0]} </h1>
                        <p className = "content"> {contentList[1]} <br/>{contentList[2]}</p>
                    </div>

                    <div>
                        <h3 className = "title2">{contentList[3]}</h3>
                        <p className = "content">{contentList[4]}</p>

                        <Foo />

                            <div>

                                <form className="questionSection">

                                    <div>

                                        <div className="questionHead">

                                            <h4 className="qustionNumber">
                                            Q{Numbers[1]}.
                                            </h4>

                                            <h5 className="qustionText">{answer[0]?.question}</h5>

                                        </div>

                                        <div className="questionBody">

                                            <div className="btnContainer">

                                            <div>
                                                <button className=
                                                                {answerlist == answer[0]?.answer01
                                                                ?
                                                                "clickedBtn" : "answerBtn"}
                                                    name="ans_1"
                                                    value={answer[0]?.answer01}
                                                    onClick={(event) => {
                                                        setAnswerList(event.target.value);

                                                    }}
                                                >{answer[0]?.answer01}</button>
                                            </div>

                                            <div>
                                                <button className=
                                                                {answerlist == answer[0]?.answer02
                                                                ?
                                                                "clickedBtn" : "answerBtn"}
                                                    name="ans_1"
                                                    value={answer[0]?.answer02}
                                                    onClick={(event) => {
                                                        setAnswerList(event.target.value);
                                                        console.log(event.target.value);
                                                    }}
                                                >{answer[0]?.answer02}</button>
                                            </div>

                                                </div>

                                                <div1>
                                                    <p className="explanation">
                                                    > {answer[0]?.answer01} : {answer[0]?.answer03}
                                                    <br />
                                                    > {answer[0]?.answer02} : {answer[0]?.answer04}  </p>
                                                    </div1>
                                                </div>

                                        <Foo />

                                    </div>

                                </form>

                            </div>

                            {/* <div Id="btn"> 말 안듣는 코드... 아래에 새로 구현해봄

                                <button
                                    type="submit"
                                    className="back"
                                    onClick={() => {history.push("/");}}> 뒤로가기</button>

                                {
                                    (answerlist === answer[0]?.answer01) || (answerlist === answer[0]?.answer02) ?
                                    <Link to="/test1">
                                        <button
                                            type="submit"
                                            className="clickedstart"
                                            onClick={handleSubmit}
                                        > 검사시작
                                        </button>
                                    </Link>
                                    :
                                    <button
                                        type="submit"
                                        className="start"
                                        disabled
                                    > 검사시작
                                    </button>
                                }
                            </div> */}


                <div Id="btn">
                    <Link to='/'>
                        <button type="submit"
                                className="back"
                                >뒤로가기</button></Link>


                    <Link to='/test1'>
                        <button type="submit"
                                className="start">
                                    다음으로</button> </Link>
                </div>

                    </div>


                    </div>

                </div>

            </div>


    );
}


export default Guide;

