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

const Test = () => {
    return (
        <div>

        <div className="nav">
            <div className="nav2 container"> /* elice */ front-end project</div>
        </div>

        <div className="wrap">

            <div className="container">
                <div className="main">
                    <h2 className = "title"> 검사는 이렇게 진행됩니다. </h2>
                    <p className = "content"> 직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. <br/> 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                </div>
            </div>


        </div>

    </div>

    );
}

export default Test;
