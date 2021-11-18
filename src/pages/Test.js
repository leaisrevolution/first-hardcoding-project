import React, { useEffect } from 'react';
import ProgressBar from "./ProgressBar.js";
import axios from "axios";

const Test = props => {

    const testData = [
        { bgcolor: "#5b6ac7", completed: 10 }];


    const { history } = props;

        useEffect(() => {

            const fetchEvents = () => {
                const res = axios.get("https://www.career.go.kr/inspct/openapi/test/questions?apikey=b7776804e4c61de3cfb023471c48aa0a&q=심리검사변수")
                console.log(res)
            }
        })



    return (
        <div>

        <div className="nav">
            <div className="nav2 container"> /* elice */ front-end project</div>
        </div>

        <div className="wrap">

            <div className="container">
                <div className="main">
                    <h1 className = "title"> 질문에 응답해주세요. </h1>
                    <p className = "content"> 직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. <br/> 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                </div>

                <div>

                    <hr class="foo" />

                    <div className="bar">
                    {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                        ))}
                    </div>


                    <div className="questionSection">

                        <div>
                            <h4 className="qustionHeader">
                                <span>Q1</span>
                            </h4>

                            <div className="qustionText">
                                <h5 classNAme="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                            </div>

                            <div className="answerBtn">
                                <button>능력발휘</button>
                                <button>자율성</button>
                            </div>
                        </div>

                        <div>
                            <h4 className="qustionHeader">
                                <span>Q2</span>
                            </h4>

                            <div className="qustionText">
                                <h5 classNAme="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                            </div>

                            <div className="answerBtn">
                                <button>능력발휘</button>
                                <button>자율성</button>
                            </div>
                        </div>

                        <div>
                            <h4 className="qustionHeader">
                                <span>Q3</span>
                            </h4>

                            <div className="qustionText">
                                <h5 classNAme="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                            </div>

                            <div className="answerBtn">
                                <button>능력발휘</button>
                                <button>자율성</button>
                            </div>
                        </div>

                        <div>
                            <h4 className="qustionHeader">
                                <span>Q4</span>
                            </h4>

                            <div className="qustionText">
                                <h5 classNAme="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                            </div>

                            <div className="answerBtn">
                                <button>능력발휘</button>
                                <button>자율성</button>
                            </div>
                        </div>

                        <div>
                            <h4 className="qustionHeader">
                                <span>Q5</span>
                            </h4>

                            <div className="qustionText">
                                <h5 classNAme="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                            </div>

                            <div className="answerBtn">
                                <button>능력발휘</button>
                                <button>자율성</button>
                            </div>
                        </div>

                    </div>

                    <hr class="foo2" />

                </div>




            <div Id="btn">

                <div>
                    <button className="back" onClick={() => {history.push("/guide");}}> 뒤로가기</button>
                </div>

                <div>
                    <button className="start" onClick={() => {history.push("/");}}> 다음으로</button>
                </div>

            </div>


            </div>

        </div>

    </div>
    );
}

export default Test;
