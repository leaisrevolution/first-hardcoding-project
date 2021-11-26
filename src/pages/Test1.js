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
        ans_1: "",
        ans_2: "",
        ans_3: "",
        ans_4: "",
        ans_5: ""
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
            setAnswer(res.splice(0, 5)) //0~4페이지

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
            alert('전부 선택 안하면 못 넘어가요. 빠짐 없이 선택하셈.')
        }
        else{
            history.push({
            pathname: '/test2',
            state: {...location.state, ...check}
            })
            window.location.href ='/test2' // 이동할 다음 페이지
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
                                                {answerlist == 1
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                    name="ans_1"
                                    value="1"
                                    onClick={(event) => {
                                        setAnswerList(event.target.value);
                                        console.log(event.target.className)
                                    }}
                                    onChange={handleChange}

                                >{answer[0]?.answer01}</button>
                            </div>

                            <div>
                                <button className=
                                                {answerlist == 2
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                    name="ans_1"
                                    value="2"
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
                                                {answerlist == 3
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_2"
                                            value="3"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}

                                            onChange={handleChange}

                                        >{answer[1]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 4
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_2"
                                        value="4"
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
                                                {answerlist == 5
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_3"
                                            value="5"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}
                                            onChange={handleChange}
                                        >{answer[2]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 6
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_3"
                                        value="6"
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
                                                {answerlist == 7
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_4"
                                            value="7"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}
                                            onChange={handleChange}

                                        >{answer[3]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 8
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_4"
                                        value="8"
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
                                                {answerlist == 9
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                            name="ans_5"
                                            value="9"
                                            onClick={(event) => {
                                                setAnswerList(event.target.value);

                                            }}
                                            onChange={handleChange}
                                        >{answer[4]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist == 10
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_5"
                                        value="10"
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