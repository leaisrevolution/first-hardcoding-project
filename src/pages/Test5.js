import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';


export default function Test5(){
    const history = useHistory();
    let Numbers = [...Array(50)].map((v, i) => i);
    const [answer, setAnswer] = useState([]);
    // console.log(answer);
    const [answerlist, setAnswerList] = useState(()=> JSON.parse(window.localStorage.getItem("answerlist")));
    if (answerlist == null) {
        answerlist = {
            [0]: undefined,
            [1]: undefined,
            [2]: undefined,
            [3]: undefined,
            [4]: undefined
        };
    }


    const location = useLocation();
    console.log(answerlist);
    console.log(location.state)

    const handleChange = e => {
        setAnswerList({
            ...answerlist,
            [e.target.name] : e.target.value
        })
    }

    const buttonOnClick = (event) => {
        let questionKey = Math.floor((event.target.value - 1) /2 );
        let newObj = {...answerlist, [questionKey]: event.target.value}
        setAnswerList(newObj);
        console.log(event.target.className)
        console.log(event.target.value)
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
        window.localStorage.setItem("answerlist", JSON.stringify(answerlist));
        asyncCall()
    }, [answerlist])


    function handleSubmit(e){
        e.preventDefault();
        if( answerlist.ans_21 ==='' ||
            answerlist.ans_22 ==='' ||
            answerlist.ans_23 ==='' ||
            answerlist.ans_24 ==='' ||
            answerlist.ans_25 ===''){
            alert('힘드시나요? 전 이 코드 짜느랴 더 힘들었답니다. 홧팅..')
        }
        else {
            history.push({
            pathname: '/test6',
            state: {...location.state, ...answerlist}
            })
            window.location.href ='/test6'  // 이동할 다음 페이지
        }
    }


    return(

        <div>

            <MainNav />
                <div className="container">

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[21]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                            <div>
                                <button className=
                                                {answerlist[0] == 1
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                    name="ans_21"
                                    value="1"
                                    onClick={buttonOnClick}
                                    onChange={handleChange}

                                >{answer[0]?.answer01}</button>
                            </div>

                            <div>
                                <button className=
                                                {answerlist[0] == 2
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                    name="ans_21"
                                    value="2"
                                    onClick={buttonOnClick}
                                    onChange={handleChange}
                                >{answer[0]?.answer02}</button>
                            </div>


                            </div>

                                <div>
                                <p className="explanation">
                                &gt; {answer[0]?.answer01} : {answer[0]?.answer03}
                                <br />
                                &gt; {answer[0]?.answer02} : {answer[0]?.answer04}  </p>
                                </div>

                            </div>


                    </div>

                    <Foo />

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[22]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist[1] == 3
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                            name="ans_22"
                                            value="3"
                                            onClick={buttonOnClick}
                                            onChange={handleChange}

                                        >{answer[1]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[1] == 4
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                        name="ans_22"
                                        value="4"
                                        onClick={buttonOnClick}
                                        onChange={handleChange}
                                    > {answer[1]?.answer02} </button>

                                    </div>

                            </div>

                            <div>
                                    <p className="explanation">
                                    &gt; {answer[1]?.answer01} : {answer[1]?.answer03}
                                    <br />
                                    &gt; {answer[1]?.answer02} : {answer[1]?.answer04}  </p>
                            </div>

                        </div>

                    </div>

                    <Foo />

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[23]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist[2] == 5
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                            name="ans_23"
                                            value="5"
                                            onClick={buttonOnClick}
                                            onChange={handleChange}
                                        >{answer[2]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[2] == 6
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                        name="ans_23"
                                        value="6"
                                        onClick={buttonOnClick}
                                        onChange={handleChange}

                                    > {answer[2]?.answer02} </button>

                                    </div>

                                    <Foo />

                            </div>

                            <div>
                                    <p className="explanation">
                                    &gt; {answer[2]?.answer01} : {answer[2]?.answer03}
                                    <br />
                                    &gt; {answer[2]?.answer02} : {answer[2]?.answer04}  </p>
                            </div>

                        </div>


                    </div>

                    <Foo />

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[24]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist[3] == 7
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                            name="ans_24"
                                            value="7"
                                            onClick={buttonOnClick}
                                            onChange={handleChange}

                                        >{answer[3]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[3] == 8
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                        name="ans_24"
                                        value="8"
                                        onClick={buttonOnClick}
                                        onChange={handleChange}
                                    > {answer[3]?.answer02} </button>

                                    </div>

                                    <Foo />
                            </div>

                            <div>
                                    <p className="explanation">
                                    &gt; {answer[3]?.answer01} : {answer[3]?.answer03}
                                    <br />
                                    &gt; {answer[3]?.answer02} : {answer[3]?.answer04}  </p>
                            </div>

                        </div>


                    </div>

                    <Foo />


                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                            Q{Numbers[25]}.
                            </h4>

                            <h5 className="qustionText">{answer[0]?.question}</h5>

                        </div>

                        <div className="questionBody">
                            <div className="btnContainer">

                                    <div>
                                        <button className=
                                                {answerlist[4] == 9
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                            name="ans_25"
                                            value="9"
                                            onClick={buttonOnClick}
                                            onChange={handleChange}
                                        >{answer[4]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[4] == 10
                                                    ?
                                                    "clickedBtn" : "answerBtn"}
                                        name="ans_25"
                                        value="10"
                                        onClick={buttonOnClick}
                                        onChange={handleChange}
                                    > {answer[4]?.answer02} </button>

                                    </div>

                                    <Foo />

                            </div>

                            <div>
                                    <p className="explanation">
                                    &gt; {answer[4]?.answer01} : {answer[4]?.answer03}
                                    <br />
                                    &gt; {answer[4]?.answer02} : {answer[4]?.answer04}  </p>
                            </div>


                        </div>
                    </div>


                    <Foo />


                <div Id="btn">
                    <Link to='/test4'>
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