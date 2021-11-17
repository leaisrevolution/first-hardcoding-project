// import React from "react";

// const Home = props => {
//     const { history } = props;
//     return (
//         <div>
//             <button onClick={() => {history.push("/test");}}>검사시작</button>
//         </div>
//     );
// };

// export default Test;
import React from 'react';

const Guide = props => {

    const { history } = props;
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
                    <h2 className = "title2">아래의 질문에 응답해주세요.</h2>
                    <hr class="foo" />
                    <div className="Q2">

                        <div className="number">
                            <h3>Q1.</h3>
                        </div>

                        <div>
                            <h3>두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h3>
                        </div>
                    </div>

                </div>




            <div Id="btn">

                <div>
                    <button className="back" onClick={() => {history.push("/");}}> 뒤로가기</button>
                </div>

                <div>
                    <button className="start" onClick={() => {history.push("/test");}}> 시작하기</button>
                </div>

            </div>


            </div>



        </div>

    </div>

    );
}

export default Guide;