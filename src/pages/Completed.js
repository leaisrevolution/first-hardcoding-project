
import { useLocation } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';

const Completed = () => {
    const history = useHistory();
    const location = useLocation();

    function handleClick() {
        history.push({
            pathname : '/result',
            state: {...location.state},
        })
        window.location.href ='/result'
    }
    console.log(location.state)


    return (

        <div>
            <MainNav />
                <div className="wrap">
                    <div className="container">
                        <div className="main">
                            <h3 className="title"> 검사가 완료 되었습니다.</h3>
                            <p className="content">
                                {" "}
                                모든 응답이 완료되었습니다. 고생하셨습니다.
                                <br />
                                결과 보기 버튼을 누르시면 검사 결과에 대해 상세히 볼 수 있습니다.
                                <br />
                                감사합니다.
                            </p>
                            <Foo />
                        </div>

                        <div Id="">
                            <Link to="/result">
                                <button
                                    type="submit"
                                    className="end"
                                    onClick={{handleClick}}> 결과보기
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>

    )

}

export default Completed;
