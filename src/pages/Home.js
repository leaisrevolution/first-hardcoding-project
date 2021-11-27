import React, { useState  } from 'react';
import { useLocation } from "react-router";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';



//기능구현 실패하는 것:
//시간남으면 해야 할 것 : div를 모조리 정리해버리기



const options = [
    { id: "male", value: "male", label: "Male" },
    { id: "female", value: "female", label: "Female" },
];

const QuestionData = [
    '당신에 대해서 알려주세요.',
    '당신에 이름을 알려주세요.',
    '당신의 나이를 입력해주세요.',
    '당신의 성별을 선택해주세요.'
];

const contentList = [
    '직업 가치관 검사',
    '당신의 직업 검사 진행을 통해',
    '나와 맞는 직업과 직업 가치관, 적합도가 높은 직업을 탐색해봅시다.',
]

const Home = (props) => {
    const { history } = props;
    // const [selectedOption, setSelectedOption] = useState(null);
    const [userid, setUserid] = useState({
        userName: "",
        userAge: "",
    });

    console.log(userid);
    const [userGender,setUserGender] = useState({})
    const location = useLocation();

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [gender, setGender] = useState('');


    const handleChange = e => {
        setUserid({
            ...userid,
            [e.target.name]: e.target.value
        });
    };


    function handleSubmit(e) {
        e.preventDefault();
        console.log(userid);
        console.log(userGender.value);

        if (userid.userName === '' ||
            userid.userAge === '' ||
            !userGender.value)
        {alert("제대로 다 입력한거 맞음요...?")}
        else {
            history.push({
                pathname: '/guide',
                state: userid
            })
            window.location.href = '/guide'
        }
    }


    return (
        <div>
            <div className="wrap">
                <MainNav />

                <div className="container">


                    <div>
                        <h1 className="title"> {contentList[0]} </h1>
                        <p className="content">
                            {" "}
                            {contentList[1]} <br />
                            {contentList[2]}
                        </p>
                    </div>

                <div>
                    <h3 className = "title2">{QuestionData[0]}</h3>
                    <Foo />
                </div>

            <form onSubmit={ handleSubmit }>
                <div className = "Q">
                    <h4 className="qustionNumber"> Q1 </h4>
                    <h5 className="qustionText">{QuestionData[1]}</h5>
                    <input
                        id="userName"
                        name="userName"
                        className = "inputName"
                        type="text"
                        value={userid.userName}
                        onChange={handleChange}

                        />

                </div>


                <div className = "Q">
                    <h4 className="qustionNumber"> Q2 </h4>
                    <h5 className="qustionText">{QuestionData[2]}</h5>
                    <input
                        name ="userAge"
                        className = "inputName"
                        type="text"
                        value={userid.userAge}
                        onChange={handleChange}
                    />
                </div>

                <div className = "Q">
                    <h4 className="qustionNumber"> Q3 </h4>
                    <h5 className="qustionText">{QuestionData[3]}</h5>
                    <Select
                        className="select"
                        name="userGender"
                        onChange={(e)=>setUserGender(e)}
                        options={options}
                    />

                </div>


                <div className="startbtn">


                        <button
                            type = "submit"
                            className="start"
                            onClick={handleSubmit}
                            >
                            다음으로
                        </button>

                </div>

            </form>


                </div>
            </div>
        </div>
    );
};


export default Home;
