import axios from 'axios';
import { useEffect, useState, useHistory } from 'react';
import { Link, } from 'react-router-dom';
import MainNav from '../components/mainNav';

export default function Test1(props){
    const { history } = props;
    let Numbers = [...Array(50)].map((v, i) => i);
    const [answer, setAnswer] = useState([]);
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


    async function asyncCall() {
        try {
            const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=73587f95ef371322626bf3a537e9eb3b&q=6')
            const res = response.data.RESULT;
            setAnswer(res.splice(6, 11)) //6~10

            return res;
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => asyncCall(), [])




    function handleSubmit(e){
        e.preventDefault();
        if(check.ans_1 ==='' || check.ans_2 ==='' || check.ans_3 ==='' || check.ans_4 ==='' || check.ans_5 ===''){
            alert('모든 항목을 체크해주세요.')
        }
        else{
            window.location.href ='/test3' // 이동할 다음 페이지
        }
    }
    return(

        <div>

            <MainNav />
                <div className="container">

                    <div1>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[6]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_1"
                                            value={answer[0]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                        >{answer[0]?.answer01}</button>
                                </div>

                                <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_1"
                                        value={answer[0]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer[0]?.answer02} </button>

                                </div>

                            </div>

                                <div1>
                                <p className="explanation">
                                > {answer[0]?.answer01} : {answer[0]?.answer03}
                                <br />
                                > {answer[0]?.answer02} : {answer[0]?.answer04}  </p>
                                </div1>

                            </div>


                    </div1>

                    <hr className="foo3" />

                    <div2>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[7]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_2"
                                            value={answer[1]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }

                                        >{answer[1]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_2"
                                        value={answer[1]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer[1]?.answer02} </button>

                                    </div>

                            </div>

                            <div2>
                                    <p className="explanation">
                                    > {answer[1]?.answer01} : {answer[1]?.answer03}
                                    <br />
                                    > {answer[1]?.answer02} : {answer[1]?.answer04}  </p>
                            </div2>

                        </div>

                    </div2>

                    <hr className="foo3" />

                    <div3>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[8]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_3"
                                            value={answer[2]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer[2]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_3"
                                        value={answer[2]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer[2]?.answer02} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer[2]?.answer01} : {answer[2]?.answer03}
                                    <br />
                                    > {answer[2]?.answer02} : {answer[2]?.answer04}  </p>
                            </div3>

                        </div>


                    </div3>

                    <hr className="foo3" />

                    <div4>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[9]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_4"
                                            value={answer[3]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                        >{answer[3]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_4"
                                        value={answer[3]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer[3]?.answer02} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer[3]?.answer01} : {answer[3]?.answer03}
                                    <br />
                                    > {answer[3]?.answer02} : {answer[3]?.answer04}  </p>
                            </div3>

                        </div>


                    </div4>

                    <hr className="foo3" />

                    <div5>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[10]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_5"
                                            value={answer[4]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setAnswer(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{answer[4]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_5"
                                        value={answer[4]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    > {answer[4]?.answer02} </button>

                                    </div>
                                <hr className="foo2" />

                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {answer[4]?.answer01} : {answer[4]?.answer03}
                                    <br />
                                    > {answer[4]?.answer02} : {answer[4]?.answer04}  </p>
                            </div3>

                        </div>
                    </div5>

                    <hr className="foo3" />


                <div Id="btn">
                    <Link to='/test1'>
                        <button type="submit"
                                className="back"
                                >뒤로가기</button></Link>

                        <button type="submit"
                                className="start"
                                onClick={handleSubmit}>
                                    다음으로</button>
                </div>




                </div>




        </div>
    )
 }