
import React from 'react';
import ProgressBar from "./ProgressBar.js";



const Guide = props => {

    const testData = [
        { bgcolor: "#5b6ac7", completed: 10 }];
    const { history } = props;

    
const handleClick = (e) => {
    if (e.target.id == "A"){
    history.push("/guide");
    } else {
    history.push("/other")
    }
}



    return (
        <div>

        <div className="nav">
            <div className="nav2 container"> /* elice */ front-end project</div>
        </div>

        <div className="wrap">

            <div className="container">
                <div className="main">
                    <h1 className = "title"> 검사는 이렇게 진행됩니다. </h1>
                    <p className = "content"> 직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. <br/> 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                </div>

                <div>
                    <h3 className = "title2">아래의 질문에 응답해주세요.</h3>
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


                    </div>

                    <hr class="foo2" />

                </div>




            <div Id="btn">

                <div>
                    <button className="back" onClick={() => {history.push("/");}}> 뒤로가기</button>
                </div>

                <div>
                    <button className="start" onClick={() => {history.push("/test");}}> 검사시작</button>
                </div>

            </div>


            </div>



        </div>

    </div>

    );
}

export default Guide;
