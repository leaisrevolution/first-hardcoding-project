import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';



const answerData = [
    '당신의 검사 결과를 알려드릴게요.',
    '이름',
    '나이',
    '성별'
];

const Result = (props) => {
    const { history } = props;
    return (

        <div>
            <MainNav />
            <div className="wrap">
                <div className="container">
                    <div className="main">
                    <h1 className="title"> {answerData[0]}  </h1>

                    <p className="content">
                        {" "}
                        검사결과는 여러분이 직업을 선택할 때 <br /> 상대적으로
                        어떠한 가치를 주요하게 생각하는지를 알려주고,
                        <br />
                        중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
                    </p>

                    <hr className="foo" />
                    </div>

            <form>
                    <div>
                        <h3 className = "title2">{answerData[1]}</h3>

                    </div>
            </form>

                </div>
            </div>
        </div>

    )

}

export default Result;
