
import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux' ;
import ProgressBar from "./ProgressBar.js";
import { Link } from 'react-router-dom';
import axios from "axios";
// import { Provider } from 'react-redux';
// import { ProgressBar } from 'react-bootstrap';


function GuideSample() {

    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector(selector.questions);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [select, setSelect] = useState(0);
    const [state, setState] = useState('');
    const [questionFirst, setQuestionFirst] = useState([]);


    async function fetchEvents() {
        try {
            setLoading(ture);
            const responce = await axios.get("https://www.career.go.kr/inspct/openapi/test/questions?apikey=b7776804e4c61de3cfb023471c48aa0a&q=6");
            console.log(response.data['RESULT']);
            dispatch(actions.setQustion(response.data['RESULT']));
            dispatch(actions.setTotalNumber(response.data['RESULT'].length));
            setLoading(false);
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [])

    useEffect(() => {
        if(questions){
            setQuestionFirst(questions.slice(0,1));
        }
    }, [ questions ]);

    const handleClickBtn = useCallback((btnName) => {setSelect(btnName)}, [select])

    // const selectButton = ({ id, isToggle }) => {

    //     const [toggle, setToggle] = useState(isToggle);
    //     const color = toggle ? "#2884f7" : "#d2d2d2";

    //     const onChangeColor = () => {
    //         setToggle(!toggle);
    //     };
    //     return (
    //         <button id={id}
    //                 onClick={onChangeColor}
    //                 style={{ backgroundColor: color }}>
    //         </button>
    //     );
    // };
}


const Guide = props => {

    // const [data, setData] = useState(dataList);

    const testData = [
        { bgcolor: "#2884f7", completed: 10 }];
    const { history } = props;

    const ChangeHandler = (e) => {
        e.preventDefalut();
    }


    return (
        <>

            <div className="nav"> /* elice */ front-end project </div>

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
                            {/* <ProgressBar now={60} /> */}
                        </div>

                                <form className="questionSection" onChange={ChangeHandler}>

                                    <div className="questionHead">

                                        <h4 className="qustionNumber">
                                            Q1
                                        </h4>

                                        <div>
                                            <h5 className="qustionText">두개의 가치 중에 자신에게 더 중요한 가치를 선택해주세요. </h5>
                                        </div>

                                    </div>


                                    <div className="questionBody">

                                        {questionFirst?.map( item => {
                                            return (
                                                <>
                                                    <div className="btnContainer">
                                                        <button className= "answerBtn"
                                                                type ="radio"
                                                                id = "1"
                                                                checked = {select === 1}
                                                                onChange={
                                                                    () => {
                                                                        // setState(item.answer03);
                                                                        handleClickBtn(1); }}
                                                        />
                                                        <button className= "answerBtn"
                                                                type ="radio"
                                                                id = "2"
                                                                is
                                                                checked = {select === 2}
                                                                onChange={
                                                                    () => {
                                                                        // setState(item.answer04);
                                                                        handleClickBtn(2); }}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })}

                                    </div>





                                    {/* <button className= "answerBtn"
                                            type="radio"
                                            name="answer1"
                                            value="1"
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                        > 능력발휘 </button> */}

                                        {/* <button className= "answerBtn"
                                            type="radio"
                                            name="answer1"
                                            value="1"
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                        > 능력발휘 </button> */}

                                        {/* <button className="answerBtn2"
                                            type="radio"
                                            name="answer2"
                                            value="2"
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                        > 자율성 </button> */}

                                    {/* </div> */}

                                </form>

                            <hr className="foo2" />

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

            </>



    );
}


export default Guide;
