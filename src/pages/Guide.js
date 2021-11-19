
import React, { useState } from "react";
import ProgressBar from "./ProgressBar.js";
import { Link } from 'react-router-dom';


const Guide = props => {

    const testData = [
        { bgcolor: "#2884f7", completed: 10 }];
    const { history } = props;

    const [answer, setAnswer] = useState('');
    const ChangeHandler = (e) => {
        e.preventDefalut();
    }


    return (
        <div>

            <div className="nav">
                <div className="nav container"> /* elice */ front-end project</div>
            </div>

            <div className="wrap">

                <div className="container">

                    <div className="main">
                        <h1 className = "title"> 검사는 이렇게 진행됩니다. </h1>
                        <p className = "content"> 직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. <br/> 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                    </div>

                    <div>
                        <h3 className = "title2">아래의 예시 질문에 응답해주세요.
                        </h3>
                        {/* <p className = "content">예시 질문에 응답해주셔야 검사가 시작됩니다.</p> */}
                        <hr className="foo" />

                        <div className="bar">
                            {testData.map((item, idx) => (
                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                            ))}
                        </div>

                        <div className="questionSection">

                            <div>

                                <h4 className="qustionHeader">
                                    Q1
                                </h4>

                                <div>
                                    <h5 className="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                                </div>

                                <div className="answerBtn">
                                    <button
                                        name="answer"
                                        value="1"
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }>
                                            능력발휘
                                    </button>

                                    <button
                                        name="answer"
                                        value="2"
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }>
                                            자율성
                                    </button>
                                </div>

                            </div>

                            <hr className="foo2" />

                        </div>

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

    );
}


export default Guide;
