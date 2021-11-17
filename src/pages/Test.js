import React from 'react';

const Test = props => {
    const { history } = props;

    return (

        <div Id="btn">

        <div>
            <button className="back" onClick={() => {history.push("/");}}> 뒤로가기</button>
        </div>

        <div>
            <button className="start" onClick={() => {history.push("/test");}}> 시작하기</button>
        </div>

        </div>



    );
}

export default Test;
