import axios from 'axios';
import { useEffect, useState, useHistory } from 'react';
import { Link, } from 'react-router-dom';
import MainNav from '../components/mainNav';

export default function Test1(props){
    const { history } = props;
    const [result, setResult] = useState([]);
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
            setResult(res.splice(0, 5)) //0~4

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

                            <h5 className="qustionText">{result[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_1"
                                            value={result[0]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setResult(event.target.value);
                                                }
                                            }
                                        >{result[0]?.answer01}</button>
                                </div>

                                <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_1"
                                        value={result[0]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setResult(event.target.value);
                                            }
                                        }
                                    > {result[0]?.answer02} </button>

                                </div>

                            </div>

                                <div1>
                                <p className="explanation">
                                > {result[0]?.answer01} : {result[0]?.answer03}
                                <br />
                                > {result[0]?.answer02} : {result[0]?.answer04}  </p>
                                </div1>

                            </div>


                    </div1>

                    <hr className="foo3" />

                    <div2>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q2.
                            </h4>

                            <h5 className="qustionText">{result[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_2"
                                            value={result[1]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setResult(event.target.value);
                                                }
                                            }

                                        >{result[1]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_2"
                                        value={result[1]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setResult(event.target.value);
                                            }
                                        }
                                    > {result[1]?.answer02} </button>

                                    </div>

                            </div>

                            <div2>
                                    <p className="explanation">
                                    > {result[1]?.answer01} : {result[1]?.answer03}
                                    <br />
                                    > {result[1]?.answer02} : {result[1]?.answer04}  </p>
                            </div2>

                        </div>

                    </div2>

                    <hr className="foo3" />

                    <div3>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q3.
                            </h4>

                            <h5 className="qustionText">{result[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_3"
                                            value={result[2]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setResult(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{result[2]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_3"
                                        value={result[2]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setResult(event.target.value);
                                            }
                                        }
                                    > {result[2]?.answer02} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {result[2]?.answer01} : {result[2]?.answer03}
                                    <br />
                                    > {result[2]?.answer02} : {result[2]?.answer04}  </p>
                            </div3>

                        </div>


                    </div3>

                    <hr className="foo3" />

                    <div4>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q4.
                            </h4>

                            <h5 className="qustionText">{result[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_4"
                                            value={result[3]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setResult(event.target.value);
                                                }
                                            }
                                        >{result[3]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_4"
                                        value={result[3]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setResult(event.target.value);
                                            }
                                        }
                                    > {result[3]?.answer02} </button>

                                    </div>

                                <hr className="foo2" />
                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {result[3]?.answer01} : {result[3]?.answer03}
                                    <br />
                                    > {result[3]?.answer02} : {result[3]?.answer04}  </p>
                            </div3>

                        </div>


                    </div4>

                    <hr className="foo3" />

                    <div5>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q5.
                            </h4>

                            <h5 className="qustionText">{result[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className= "answerBtn"
                                            type="radio"
                                            name="ans_5"
                                            value={result[4]?.answer01}
                                            onClick={handleChange}
                                            onChange={
                                                (event) => {
                                                    setResult(event.target.value);
                                                }
                                            }
                                            // onClick={}
                                        >{result[4]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className="answerBtn2"
                                        type="radio"
                                        name="ans_5"
                                        value={result[4]?.answer02}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setResult(event.target.value);
                                            }
                                        }
                                    > {result[4]?.answer02} </button>

                                    </div>
                                <hr className="foo2" />

                            </div>

                            <div3>
                                    <p className="explanation">
                                    > {result[4]?.answer01} : {result[4]?.answer03}
                                    <br />
                                    > {result[4]?.answer02} : {result[4]?.answer04}  </p>
                            </div3>

                        </div>
                    </div5>

                    <hr className="foo3" />


                <div Id="btn">
                    <Link to='/guide'>
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