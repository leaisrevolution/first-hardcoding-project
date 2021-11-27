import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';


export default function Test1(){

    const history = useHistory();
    let Numbers = [...Array(50)].map((v, i) => i);
    const [answer, setAnswer] = useState([]);
    console.log(answer);
    const location = useLocation();

    let [answerlist, setAnswerList] = useState(()=> JSON.parse(window.localStorage.getItem("answerlist")));
    if (answerlist == null) {
        answerlist = {
            [0]: undefined,
            [1]: undefined,
            [2]: undefined,
            [3]: undefined,
            [4]: undefined
        };
    }

    console.log(location.state)
    console.log(answerlist);



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
        window.localStorage.setItem("answerlist", JSON.stringify(answerlist));
        asyncCall()
    }, [answerlist])


    const handleChange = e => {
        setAnswerList({
            ...answerlist,
            [e.target.name] : e.target.value
        })
    }

    const buttonOnClick = (event) => {

        let questionKey = Math.floor((event.target.value - 1) /2 );
        // let newQuestionKey = 'B' + (questionKey+1)
        let newObj = {...answerlist, [questionKey]: event.target.value}
        setAnswerList(newObj);
        console.log(event.target.className)
        console.log(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if (answerlist.ans_1 ==='' ||
            answerlist.ans_2 ==='' ||
            answerlist.ans_3 ==='' ||
            answerlist.ans_4 ==='' ||
            answerlist.ans_5 ===''){
            alert('전부 선택 안하면 못 넘어가요. 빠짐 없이 선택하셈.')
        }
        else{
            history.push({
            pathname: '/test2',
            state: {...location.state, ...answerlist}
            })
            window.location.href ='/test2' // 이동할 다음 페이지
        }
    }

    return (

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
                                                {answerlist[0] == 1
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                    name="B1"
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
                                    name="B1"
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
                                Q{Numbers[2]}.
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
                                        name="B2"
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
                                        name="B2"
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
                                Q{Numbers[3]}.
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
                                            name="B3"
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
                                            name="B3"
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
                            Q{Numbers[4]}.
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
                                                name="B4"
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
                                                name="B4"
                                                value="8"
                                                onClick={buttonOnClick}
                                                onChange={handleChange}

                                        >{answer[3]?.answer01}</button>
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
                            Q{Numbers[5]}.
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
                                                name="B5"
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
                                        name="B5"
                                        value="10"
                                        onClick={(event) => {
                                            let questionKey = Math.floor((event.target.value - 1) /2 );
                                            let newObj = {...answerlist, [questionKey]: event.target.value}
                                            setAnswerList(newObj);
                                            console.log(event.target.className)
                                        }}
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