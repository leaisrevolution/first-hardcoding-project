import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';


export default function Test4(props){
    const { history } = props;
    let Numbers = [...Array(50)].map((v, i) => i);
    const [answer, setAnswer] = useState([]);
    // console.log(answer);
    const [answerlist, setAnswerList] = useState({});
    const location = useLocation();
    const [check,setCheck] = useState(()=> JSON.parse(window.localStorage.getItem("check")) || {
        ans_16: "",
        ans_17: "",
        ans_18: "",
        ans_19: "",
        ans_20: ""
    });
    console.log(answerlist);
    console.log(check);

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
            setAnswer(res.splice(15, 20)) //0~4페이지

            return res;
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        window.localStorage.setItem("check", JSON.stringify(check));
        asyncCall()
    }, [check])


    function handleSubmit(e){
        e.preventDefault();
        if (check.ans_16 ==='' ||
            check.ans_17 ==='' ||
            check.ans_18 ==='' ||
            check.ans_19 ==='' ||
            check.ans_20 ===''){
            alert('전부 선택 안하면 못 넘어가요. 빠짐 없이 선택하셈.')
        }
        else{
            history.push({
            pathname: '/test5',
            state: {...location.state, ...check}
            })
            window.location.href ='/test5' // 이동할 다음 페이지
        }
    }
    return(

        <div>

            <MainNav />
                <div className="container">

                    <div>

                        <div className="questionHead">

                            <h4 className="qustionNumber">
                                Q{Numbers[16]}.
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
                                    name="ans_16"
                                    value="1"
                                    onClick={(event) => {
                                        let questionKey = Math.floor((event.target.value - 1) /2 );
                                        let newObj = {...answerlist, [questionKey]: event.target.value}
                                        setAnswerList(newObj);
                                        console.log(event.target.className)
                                    }}
                                    onChange={handleChange}

                                >{answer[0]?.answer01}</button>
                            </div>

                            <div>
                                <button className=
                                                {answerlist[0] == 2
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                    name="ans_16"
                                    value="2"
                                    onClick={(event) => {
                                        let questionKey = Math.floor((event.target.value - 1) /2 );
                                        let newObj = {...answerlist, [questionKey]: event.target.value}
                                        setAnswerList(newObj);
                                        console.log(event.target.className)
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
                                Q{Numbers[17]}.
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
                                            name="ans_17"
                                            value="3"
                                            onClick={(event) => {
                                                let questionKey = Math.floor((event.target.value - 1) /2 );
                                                let newObj = {...answerlist, [questionKey]: event.target.value}
                                                setAnswerList(newObj);
                                                console.log(event.target.className)
                                            }}

                                            onChange={handleChange}

                                        >{answer[1]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[1] == 4
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_17"
                                        value="4"
                                        onClick={(event) => {
                                            let questionKey = Math.floor((event.target.value - 1) /2 );
                                            let newObj = {...answerlist, [questionKey]: event.target.value}
                                            setAnswerList(newObj);
                                            console.log(event.target.className)
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
                                Q{Numbers[18]}.
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
                                            name="ans_18"
                                            value="5"
                                            onClick={(event) => {
                                                let questionKey = Math.floor((event.target.value - 1) /2 );
                                                let newObj = {...answerlist, [questionKey]: event.target.value}
                                                setAnswerList(newObj);
                                                console.log(event.target.className)
                                            }}
                                            onChange={handleChange}
                                        >{answer[2]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[2] == 6
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_18"
                                        value="6"
                                        onClick={(event) => {
                                            let questionKey = Math.floor((event.target.value - 1) /2 );
                                            let newObj = {...answerlist, [questionKey]: event.target.value}
                                            setAnswerList(newObj);
                                            console.log(event.target.className)
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
                            Q{Numbers[19]}.
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
                                            name="ans_19"
                                            value="7"
                                            onClick={(event) => {
                                                let questionKey = Math.floor((event.target.value - 1) /2 );
                                                let newObj = {...answerlist, [questionKey]: event.target.value}
                                                setAnswerList(newObj);
                                                console.log(event.target.className)
                                            }}
                                            onChange={handleChange}

                                        >{answer[3]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[3] == 8
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_19"
                                        value="8"
                                        onClick={(event) => {
                                            let questionKey = Math.floor((event.target.value - 1) /2 );
                                            let newObj = {...answerlist, [questionKey]: event.target.value}
                                            setAnswerList(newObj);
                                            console.log(event.target.className)
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
                            Q{Numbers[20]}.
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
                                            name="ans_20"
                                            value="9"
                                            onClick={(event) => {
                                                let questionKey = Math.floor((event.target.value - 1) /2 );
                                                let newObj = {...answerlist, [questionKey]: event.target.value}
                                                setAnswerList(newObj);
                                                console.log(event.target.className)
                                            }}
                                            onChange={handleChange}
                                        >{answer[4]?.answer01}</button>
                                    </div>

                                    <div>
                                    <button className=
                                                {answerlist[4] == 10
                                                ?
                                                "clickedBtn" : "answerBtn"}
                                        name="ans_20"
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
                                    > {answer[4]?.answer01} : {answer[4]?.answer03}
                                    <br />
                                    > {answer[4]?.answer02} : {answer[4]?.answer04}  </p>
                            </div>


                        </div>
                    </div>


                    <Foo />


                <div Id="btn">
                    <Link to='/test3'>
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