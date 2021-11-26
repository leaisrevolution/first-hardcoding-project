import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';


export default function Test1(props){
    const { history } = props;
    let Numbers = [...Array(50)].map((v, i) => i);
    const [answer, setAnswer] = useState([]);
    // console.log(answer);
    const [answerlist, setAnswerList] = useState([]);
    const location = useLocation();
    const [check,setCheck] = useState({
        ans_21: "",
        ans_22: "",
        ans_23: "",
        ans_24: "",
        ans_25: ""
    });
    console.log(answerlist);

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
            setAnswer(res.splice(20, 25))

            return res;
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        window.localStorage.setItem("check", JSON.stringify(check));
    }, asyncCall(), [check])


    function handleSubmit(e){
        if(check.ans_1 ==='' || check.ans_2 ==='' || check.ans_3 ==='' || check.ans_4 ==='' || check.ans_5 ===''){
            alert('조금만 더 힘내서 선택해보셈.. 빠트린거 있음')
        }
        else{
            history.push({
            pathname: '/test4',
            state: {...location.state, ...check}
            })
            window.location.href ='/test4' // 이동할 다음 페이지
        }
    }
    return(

        <div>

            <MainNav />
                <div className="container">

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[1]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                            <div>
                                <button className=
                                                {answerlist == 41
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                    name="ans_1"
                                    value="41"
                                    onClick={(event) => {
                                        setAnswerList(event.target.value);
                                        console.log(event.target.className)
                                    }}
                                    onChange={handleChange}

                                >{answer[0]?.answer01}</button>
                            </div>

                            <div>
                                <button className=
                                                {answerlist == 42
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                    name="ans_1"
                                    value="42"
                                    onClick={(event) => {
                                        setAnswerList(event.target.value);
                                    }}
                                    onChange={handleChange}
                                >{answer[0]?.answer02}</button>
                            </div>


                            </div>

                                <div>
                                <p className="explanation">
                                > {answer[0]?.answer01} : {answer[0]?.answer03}
                                <br />
                                > {answer[0]?.answer02} : {answer[0]?.answer04}  </p>
                                </div>

                            </div>


                    </div>

                    <Foo />

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[2]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist == 43
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_2"
                                            value="43"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}

                                            onChange={handleChange}

                                        >{answer[1]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 44
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_2"
                                        value="44"
                                        onClick={(event) => {
                                            setAnswerList(event.target.value);

                                        }}
                                        onChange={handleChange}
                                    > {answer[1]?.answer02} </button>

                                    </div>

                            </div>

                            <div>
                                    <p className="explanation">
                                    > {answer[1]?.answer01} : {answer[1]?.answer03}
                                    <br />
                                    > {answer[1]?.answer02} : {answer[1]?.answer04}  </p>
                            </div>

                        </div>

                    </div>

                    <Foo />

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[3]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist == 45
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_3"
                                            value="45"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}
                                            onChange={handleChange}
                                        >{answer[2]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 46
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_3"
                                        value="46"
                                        onClick={(event) => {
                                            setAnswerList(event.target.value);

                                        }}
                                        onChange={handleChange}

                                    > {answer[2]?.answer02} </button>

                                    </div>

                                    <Foo />

                            </div>

                            <div>
                                    <p className="explanation">
                                    > {answer[2]?.answer01} : {answer[2]?.answer03}
                                    <br />
                                    > {answer[2]?.answer02} : {answer[2]?.answer04}  </p>
                            </div>

                        </div>


                    </div>

                    <Foo />

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[4]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist == 47
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_4"
                                            value="47"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}
                                            onChange={handleChange}

                                        >{answer[3]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 48
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_4"
                                        value="48"
                                        onClick={(event) => {
                                            setAnswerList(event.target.value);

                                        }}
                                        onChange={handleChange}
                                    > {answer[3]?.answer02} </button>

                                    </div>

                                    <Foo />
                            </div>

                            <div>
                                    <p className="explanation">
                                    > {answer[3]?.answer01} : {answer[3]?.answer03}
                                    <br />
                                    > {answer[3]?.answer02} : {answer[3]?.answer04}  </p>
                            </div>

                        </div>


                    </div>

                    <Foo />


                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[5]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist == 49
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_5"
                                            value="49"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}
                                            onChange={handleChange}
                                        >{answer[4]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 50
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_5"
                                        value="50"
                                        onClick={(event) => {
                                            setAnswerList(event.target.value);

                                        }}
                                        onChange={handleChange}
                                    > {answer[4]?.answer02} </button>

                                    </div>

                                    <Foo />

                            </div>

                            <div>
                                    <p className="explanation">
                                    > {answer[4]?.answer01} : {answer[4]?.answer03}
                                    <br />
                                    > {answer[4]?.answer02} : {answer[4]?.answer04}  </p>
                            </div>


                        </div>
                    </div>


                    <Foo />


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