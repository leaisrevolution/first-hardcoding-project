import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';

export default function Test2(props){
    const { history } = props;
    const [answer, setAnswer] = useState({});
    const [check,setCheck] = useState({
        ans_1: "",
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
                answer51: res.data.RESULT[5].answer01,
                answer52: res.data.RESULT[5].answer02,
                answer53: res.data.RESULT[5].answer03,
                answer54: res.data.RESULT[5].answer04,
                answer61: res.data.RESULT[6].answer01,
                answer62: res.data.RESULT[6].answer02,
                answer63: res.data.RESULT[6].answer03,
                answer64: res.data.RESULT[6].answer04,
                answer71: res.data.RESULT[7].answer01,
                answer72: res.data.RESULT[7].answer02,
                answer73: res.data.RESULT[7].answer03,
                answer74: res.data.RESULT[7].answer04,
                answer81: res.data.RESULT[8].answer01,
                answer82: res.data.RESULT[8].answer02,
                answer83: res.data.RESULT[8].answer03,
                answer84: res.data.RESULT[8].answer04,
                answer91: res.data.RESULT[9].answer01,
                answer92: res.data.RESULT[9].answer02,
                answer93: res.data.RESULT[9].answer03,
                answer94: res.data.RESULT[9].answer04,

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
            window.location.href ='/test3'
        }
    }
    return(
        <div>

            <MainNav />
                <div className="container">

                    <div1>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q6.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_1"
                                            value={answer.answer51}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                        >{answer.answer51}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_1"
                                        value={answer.answer52}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer52} </button>

                                    </div>
                            </div>

                            <div1>
                                <p className="explanation">
                                > {answer.answer51} : {answer.answer53}
                                <br />
                                > {answer.answer52} : {answer.answer54}  </p>
                            </div1>

                        </div>


                    </div1>

                    <hr className="foo3" />

                    <div2>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q7.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_2"
                                            value={answer.answer61}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer61}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_2"
                                        value={answer.answer62}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer62} </button>

                                    </div>

                            </div>

                            <div2>
                                    <p className="explanation">
                                    > {answer.answer61} : {answer.answer63}
                                    <br />
                                    > {answer.answer62} : {answer.answer64}  </p>
                            </div2>

                        </div>

                    </div2>

                    <hr className="foo3" />

                    <div3>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q8.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_3"
                                            value={answer.answer71}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer71}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_3"
                                        value={answer.answer72}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer72} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer.answer71} : {answer.answer73}
                                    <br />
                                    > {answer.answer72} : {answer.answer74}  </p>
                            </div3>

                        </div>


                    </div3>

                    <hr className="foo3" />

                    <div4>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q9.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_4"
                                            value={answer.answer81}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer81}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_4"
                                        value={answer.answer82}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer82} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer.answer81} : {answer.answer83}
                                    <br />
                                    > {answer.answer82} : {answer.answer84}  </p>
                            </div3>

                        </div>


                    </div4>

                    <hr className="foo3" />

                    <div5>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q10.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_5"
                                            value={answer.answer91}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer91}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_5"
                                        value={answer.answer92}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer92} </button>

                                    </div>
                                <hr className="foo2" />

                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer.answer91} : {answer.answer93}
                                    <br />
                                    > {answer.answer92} : {answer.answer94}  </p>
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
