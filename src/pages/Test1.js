import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';

export default function Test1(props){
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
                answer01: res.data.RESULT[0].answer01,
                answer02: res.data.RESULT[0].answer02,
                answer03: res.data.RESULT[0].answer03,
                answer04: res.data.RESULT[0].answer04,
                answer11: res.data.RESULT[1].answer01,
                answer12: res.data.RESULT[1].answer02,
                answer13: res.data.RESULT[1].answer03,
                answer14: res.data.RESULT[1].answer04,
                answer21: res.data.RESULT[2].answer01,
                answer22: res.data.RESULT[2].answer02,
                answer23: res.data.RESULT[2].answer03,
                answer24: res.data.RESULT[2].answer04,
                answer31: res.data.RESULT[3].answer01,
                answer32: res.data.RESULT[3].answer02,
                answer33: res.data.RESULT[3].answer03,
                answer34: res.data.RESULT[3].answer04,
                answer41: res.data.RESULT[4].answer01,
                answer42: res.data.RESULT[4].answer02,
                answer43: res.data.RESULT[4].answer03,
                answer44: res.data.RESULT[4].answer04,
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
            window.location.href ='/test2'
        }
    }
    return(

        <div>

            <MainNav />
                <div className="container">

                    <div1>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q1.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_1"
                                            value={answer.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                        >{answer.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_1"
                                        value={answer.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer02} </button>

                                    </div>
                            </div>

                            <div1>
                                <p className="explanation">
                                > {answer.answer01} : {answer.answer03}
                                <br />
                                > {answer.answer02} : {answer.answer04}  </p>
                            </div1>

                        </div>


                    </div1>

                    <hr className="foo3" />

                    <div2>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q2.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_2"
                                            value={answer.answer11}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer11}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_2"
                                        value={answer.answer12}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer12} </button>

                                    </div>

                            </div>

                            <div2>
                                    <p className="explanation">
                                    > {answer.answer11} : {answer.answer13}
                                    <br />
                                    > {answer.answer12} : {answer.answer14}  </p>
                            </div2>

                        </div>

                    </div2>

                    <hr className="foo3" />

                    <div3>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q3.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_3"
                                            value={answer.answer21}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer21}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_3"
                                        value={answer.answer22}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer22} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer.answer21} : {answer.answer23}
                                    <br />
                                    > {answer.answer22} : {answer.answer24}  </p>
                            </div3>

                        </div>


                    </div3>

                    <hr className="foo3" />

                    <div4>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q4.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_4"
                                            value={answer.answer31}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer31}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_4"
                                        value={answer.answer32}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer32} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer.answer31} : {answer.answer33}
                                    <br />
                                    > {answer.answer32} : {answer.answer34}  </p>
                            </div3>

                        </div>


                    </div4>

                    <hr className="foo3" />

                    <div5>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q5.
                            </h4>

                            <h5 className="qustionText">{answer.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_5"
                                            value={answer.answer41}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer.answer41}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_5"
                                        value={answer.answer42}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer.answer42} </button>

                                    </div>
                                <hr className="foo2" />

                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer.answer41} : {answer.answer43}
                                    <br />
                                    > {answer.answer42} : {answer.answer44}  </p>
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
