import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';

const Completed = () => {
    const { seq: reportSeq } = useParams();

    return (

        <div>
            <MainNav />
            <div className="wrap">
                <div className="container">
                    <div className="main">
                    <h1 className="title"> 검사가 완료 되었습니다. </h1>
                    <p className="content">
                        {" "}
                        검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 주요하게 생각하는지를 알려주고,
                        <br />
                        중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
                    </p>
                    <hr className="foo" />
                    </div>

                    <div Id="btn">

                        <Link to="/result">
                            <button
                                type="submit"
                                className="start"
                                onClick={() => {history.push("/result");}}> 결과보기
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default Completed;
