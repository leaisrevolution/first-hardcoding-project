import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';


export default function Test3(props){
    const { history } = props;
    const [answer, setAnswer] = useState({});
    const [check,setCheck] = useState({
        ans_1 : "",
        ans_2: "",
        ans_3: "",
        ans_4: "",
        ans_5: ""
    });
    const handleChange = e => {
        setCheck({
            ...check,
            [e.target.name] : e.target.value
        })
    }
    const questionList = async() =>{
            const res = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=73587f95ef371322626bf3a537e9eb3b&q=6')
            setAnswer({
                question: res.data.RESULT[0].question,
                answer101: res.data.RESULT[10].answer01,
                answer102: res.data.RESULT[10].answer02,
                answer103: res.data.RESULT[10].answer03,
                answer104: res.data.RESULT[10].answer04,
                answer111: res.data.RESULT[11].answer01,
                answer112: res.data.RESULT[11].answer02,
                answer113: res.data.RESULT[10].answer03,
                answer114: res.data.RESULT[10].answer04,
                answer121: res.data.RESULT[12].answer01,
                answer122: res.data.RESULT[12].answer02,
                answer123: res.data.RESULT[10].answer03,
                answer124: res.data.RESULT[10].answer04,
                answer131: res.data.RESULT[13].answer01,
                answer132: res.data.RESULT[13].answer02,
                answer133: res.data.RESULT[10].answer03,
                answer134: res.data.RESULT[10].answer04,
                answer141: res.data.RESULT[14].answer01,
                answer142: res.data.RESULT[14].answer02,
                answer143: res.data.RESULT[10].answer03,
                answer144: res.data.RESULT[10].answer04
            })
    }
    useEffect(()=>{
        questionList()
    }, [] )
        //렌더링 시에 한 번만 questionList를 실행한다.

    function handleSubmit(e){
        e.preventDefault();
        if(check.ans_1 ==='' || check.ans_2 ==='' || check.ans_3 ==='' || check.ans_4 ==='' || check.ans_5 ===''){
            alert('모든 항목을 체크해주세요.')
        }
        else{
            window.location.href ='/test4'
        }
    }
    return(
        <div>

        <MainNav />
            <div className="container">

                <div1>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q11.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_1"
                                        value={answer.answer101}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    >{answer.answer101}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_1"
                                    value={answer.answer102}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer102} </button>

                                </div>
                        </div>

                        <div1>
                            <p className="explanation">
                            > {answer.answer101} : {answer.answer103}
                            <br />
                            > {answer.answer102} : {answer.answer104}  </p>
                        </div1>

                    </div>


                </div1>

                <hr className="foo3" />

                <div2>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q12.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_2"
                                        value={answer.answer111}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer111}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_2"
                                    value={answer.answer112}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer112} </button>

                                </div>

                        </div>

                        <div2>
                                <p className="explanation">
                                > {answer.answer111} : {answer.answer113}
                                <br />
                                > {answer.answer112} : {answer.answer114}  </p>
                        </div2>

                    </div>

                </div2>

                <hr className="foo3" />

                <div3>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q13.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_3"
                                        value={answer.answer121}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer121}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_3"
                                    value={answer.answer122}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer122} </button>

                                </div>

                            <hr className="foo2" />
                        </div>

                        <div3>
                                <p className="explanation">
                                > {answer.answer121} : {answer.answer123}
                                <br />
                                > {answer.answer122} : {answer.answer124}  </p>
                        </div3>

                    </div>


                </div3>

                <hr className="foo3" />

                <div4>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q14.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_4"
                                        value={answer.answer131}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer131}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_4"
                                    value={answer.answer132}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer132} </button>

                                </div>

                            <hr className="foo2" />
                        </div>

                        <div3>
                                <p className="explanation">
                                > {answer.answer131} : {answer.answer133}
                                <br />
                                > {answer.answer132} : {answer.answer134}  </p>
                        </div3>

                    </div>


                </div4>

                <hr className="foo3" />

                <div5>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q15.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_5"
                                        value={answer.answer141}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer141}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_5"
                                    value={answer.answer142}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer142} </button>

                                </div>
                            <hr className="foo2" />

                        </div>

                        <div3>
                                <p className="explanation">
                                > {answer.answer141} : {answer.answer143}
                                <br />
                                > {answer.answer142} : {answer.answer144}  </p>
                        </div3>

                    </div>
                </div5>

                <hr className="foo3" />

                {/* <Link to='/guide'><button type="submit">이전</button></Link>
                <button type="submit" onClick={handleSubmit}>다음</button> */}


            <div Id="btn">

                <button
                    type="submit"
                    className="back"
                    onClick={() => {history.push("/guide");}}> 뒤로가기</button>

                <button

                    type="submit"
                    className="start"
                    onClick={() => {
                        history.push("/test2")
                        // if (valid)
                        // history.push("/test1");
                        // else
                        // setError("예시 항목을 선택해주세요.")
                    }}
                    > 다음으로

                </button>

                {/* { (answer01 === '1') || (answer02 === '2') ?
                    <Link to="/test1">
                        <button
                            type="submit"
                            className="start"
                            onClick={() =>
                            {history.push("/test1");}}> 검사시작
                        </button>
                    </Link>
                    :
                        <button
                            type="submit"
                            className="start"
                            disabled ="false">
                            검사시작
                        </button>
                } */}

            </div>

            </div>




    </div>

    )
}
