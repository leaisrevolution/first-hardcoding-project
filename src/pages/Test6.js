import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';


export default function Test6(){
    const history = useHistory();
    let Numbers = [...Array(50)].map((v, i) => i);
    const [answer, setAnswer] = useState([]);

    const [answerlist, setAnswerList] = useState(()=> JSON.parse(window.localStorage.getItem("answerlist")));
    if (answerlist == null) {
        answerlist = {
            [0]: undefined,
            [1]: undefined,
            [2]: undefined,
        };
    }


    const location = useLocation();
    console.log(answerlist);


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
            setAnswer(res.splice(25,28))

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
        if( answerlist.ans_26 ==='' ||
            answerlist.ans_27 ==='' ||
            answerlist.ans_28 ==='' ) {
            alert('힘드시나요? 전 이 코드 짜느랴 더 힘들었답니다. 홧팅..')
        }
        else {
            history.push({
            pathname: '/result',
            state: {...location.state, ...answerlist}
            })
            window.location.href ='completed'  // 이동할 다음 페이지
        }
    }
    console.log(location.state)


    return(

        <div>

            <MainNav />
                <div className="container">

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[26]}.
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
                                    name="ans_26"
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
                                    name="ans_26"
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
                                Q{Numbers[27]}.
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
                                            name="ans_27"
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
                                        name="ans_27"
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
                                Q{Numbers[28]}.
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
                                            name="ans_28"
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
                                        name="ans_28"
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


                <div Id="btn">
                    <Link to='/test5'>
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