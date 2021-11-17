// import React from "react";

// const Home = props => {
//     const { history } = props;
//     return (
//         <div>
//             <button onClick={() => {history.push("/test");}}>검사시작</button>
//         </div>
//     );
// };

// export default Home;


import React from 'react';

const Home = props => {
    const { history } = props;
    return (

        <div>

        <div className="nav">
            <div className="nav2 container"> /* elice */ front-end project</div>
        </div>

        <div className="wrap">
            <div className="container">
                <div className="main">
                <h2 className = "title"> 직업 가치관 검사 </h2>
                <p className = "content"> 당신의 직업 검사 진행을 통해 <br/> 나와 맞는 직업과 직업 가치관, 적합도가 높은 직업을 탐색해봅시다.</p>
            </div>

            <div>
                <h2 className = "title2">당신에 대해서 알려주세요</h2>
                <hr class="foo" />


            {/* <div className = "Q">
                <h3> 당신의 이름을 입력해주세요. </h3>
                <input onChange={(e) => { 입력값변경(e.target.value) }}
                    className = "inputName"
                    type="text" />
            </div> */}


            <div className = "Q">
                <h3> 당신의 이름을 입력해주세요. </h3>
                <input className = "inputName" type="text" />
            </div>

            <div className = "Q">
                <h3> 당신의 나이를 입력해주세요. </h3>
                <input className = "inputName" type="text" />
            </div>

            <div className = "Q">
                <h3> 당신의 성별을 선택해주세요. </h3>
            </div>

            <div className="cntr">
                <label for="opt1" class="radio">
                <input type="radio" name="rdo" id="opt1" class="hidden"/>
                <span className="label">남자</span>
                </label>
            </div>

            <div className="cntr">
                <label for="opt1" class="radio">
                <input type="radio" name="rdo" id="opt1" class="hidden"/>
                <span className="label">여자</span>
                </label>
            </div>

            <div className="startbtn">
                <button className="start" onClick={() => {history.push("/guide");}}> 시작하기</button>
            </div>

            </div>
        </div>
        </div>

        </div>
    );
};


export default Home;