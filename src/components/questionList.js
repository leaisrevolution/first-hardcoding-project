

// components 분리 작업중

import React from 'react';

export const main1 = () => {
    return (
        <div className="main">
            <h1 className = "title"> 검사는 이렇게 진행됩니다. </h1>
            <p className = "content"> 직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. <br/> 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
        </div>
    )
}


const QuestionData = [
    '당신에 대해서 알려주세요.',
    '당신에 이름을 알려주세요.',
    '당신의 나이를 입력해주세요.',
    '당신의 성별을 선택해주세요.'
];

export const main2 = () => {
    return (


        <div className="main">
        <h1 className="title"> {QuestionData[0]}  </h1>

        <p className="content">
            {" "}
            검사결과는 여러분이 직업을 선택할 때 <br /> 상대적으로
            어떠한 가치를 주요하게 생각하는지를 알려주고,
            <br />
            중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
        </p>

        <hr className="foo" />
        </div>

    )
}


// import 할 때 {}안에 넣어주기

