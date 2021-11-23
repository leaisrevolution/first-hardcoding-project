import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar.js";
import { Link, useHistory } from 'react-router-dom';
import MainNav from '../components/mainNav';
import fetchQuestions from '../api/fetch'





const Guide = (props) => {

    // const testData = [
    //     { bgcolor: "#2884f7", completed: 10 }];
    const history = useHistory();
    const [question, setQuestion] = useState([])
    const [answer01, setAnswer01] = useState([]);
    const [answer02, setAnswer02] = useState([]);
    const [error, setError] = useState([]);

    let valid = false

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         const res = await axios.get("https://www.career.go.kr/inspct/openapi/test/questions?apikey=b7776804e4c61de3cfb023471c48aa0a&q=6")
    //         .then(res => res.data.RESULT)
    //         .then(setQuestion)
    //     }
    //     fetchEvents()
    // }, [])
    //     console.log(question)


    useEffect(() => {
        const ffetchEvents = async () => {
            try {
                const question = (await fetchQuestions())[0]
                setQuestion(question.title);
                setAnswer01(question.answer01);
                setAnswer02(question.answer02);
            } catch (e) {
                setError(e);
            }
        };
        fetchEvents();
    }, []);



    const ChangeHandler = (e) => {
        e.preventDefalut();
    }

    const HandleClick = () => {
        alert('버튼 클릭');
    };


    return (

        <div>

            <MainNav />

            <div className="wrap">

                <div className="container">

                    <div className="main">
                        <h1 className = "title"> 검사는 이렇게 진행됩니다. </h1>
                        <p className = "content"> 직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. <br/> 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                    </div>

                    <div>
                        <h3 className = "title2">아래의 예시 질문에 응답해주세요.
                        </h3>
                        <p className = "content">예시 질문에 응답해주셔야 검사가 시작됩니다.</p>
                        <hr className="foo" />

                        {/* <div className="bar">
                            {testData.map((item, idx) => (
                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                            ))}
                        </div> */}

                        <div>

                            <form className="questionSection"
                                    onChange={ChangeHandler}>

                                <div className="questionHead">

                                    <h4 className="qustionNumber">
                                        Q1
                                    </h4>

                                    <div>
                                        <h5 className="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                                    </div>

                                </div>

                                    <div className="questionBody">

                                        <div className="btnContainer">

                                            <div>
                                            <button className= "answerBtn"
                                                type="radio"
                                                name="answer"
                                                value="1"
                                                onChange={
                                                    (event) => {
                                                        setAnswer(event.target.value);
                                                    }
                                                }
                                                // onClick={}
                                            > 능력발휘 </button>
                                            </div>

                                            <div>
                                            <button className="answerBtn2"
                                                type="radio"
                                                name="answer"
                                                value="2"
                                                onChange={
                                                    (event) => {
                                                        setAnswer(event.target.value);
                                                    }
                                                }
                                            > 자율성 </button>

                                            </div>

                                            </div>
                                        </div>
                            </form>

                            <hr className="foo2" />

                        </div>





                        <div Id="btn">

                            <button
                                className="back"
                                onClick={() => {history.push("/");}}> 뒤로가기</button>

                            { (answer === '1') || (answer === '2') ?
                                <Link to="/test">
                                    <button

                                        type="submit"
                                        className="start"
                                        onClick={() => {history.push("/test");}}> 검사시작
                                    </button>
                                </Link>
                                :
                                    <button
                                        type="submit"
                                        className="start"
                                        disabled>
                                        검사시작
                                    </button>
                            }
                        </div>

                    </div>


                    </div>

                </div>

            </div>


    );
}


export default Guide;
