import React, { useState, Component,useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';


const options = [
    { id: "male", value: "male", label: "Male" },
    { id: "female", value: "female", label: "Female" },
];


// 이부분 영광님이 수정 도와주심.. 역시 영광님은 천재 갓영광
// 그의 노고가 물거품이 되지 않도록 다시 코드 이해하고 넘어갑시다..
// 또 물어보면 염치도 없지

const Home = (props) => {
    const { history } = props;
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name + gender);
    }


    return (
        <div>
            <div className="nav">
                <div className="nav container"> /* elice */ front-end project</div>
            </div>

            <div className="wrap">
                <div className="container">
                    <div className="main">
                    <h1 className="title"> 직업 가치관 검사 </h1>
                    <p className="content">
                        {" "}
                        당신의 직업 검사 진행을 통해 <br /> 나와 맞는 직업과 직업 가치관, 적합도가 높은 직업을 탐색해봅시다.
                    </p>
                </div>

                <div>

                    <h3 className = "title2">당신에 대해서 알려주세요.</h3>
                    <hr className="foo" />

                </div>

            <form onSubmit={ handleSubmit }>
                <div className = "Q">
                    <h4 className="qustionHeader"> Q1 </h4>
                    <h5>당신의 이름을 입력해주세요. </h5>
                    <input
                        id="name"
                        className = "inputName"
                        type="text"
                        value={name}
                        onChange={
                            (event) => {
                                setName(event.target.value);
                            }
                        }
                    />
                </div>

                <div className = "Q">
                    <h4 className="qustionHeader"> Q2 </h4>
                    <h5 className="qustionText">당신의 나이를 입력해주세요. </h5>
                    <input
                        name ="age"
                        className = "inputName"
                        type="text"
                        value={age}
                        onChange={
                            (event) => {
                                setAge(event.target.value);
                            }// 이거 처럼 setGender도 해주셔야해요.
                        }
                    />
                </div>

                <div className = "Q">
                    <h4 className="qustionHeader"> Q3 </h4>
                    <h5>당신의 성별을 선택해주세요. </h5>
                </div>


                <Select
                    value={selectedOption}
                    onChange={(option)=>{
                        setSelectedOption(option)
                        setGender(option.value)
                        console.log(gender)
                    }}
                    options={options}
                />


                <div className="startbtn"> {
                    (name.length && gender.length && age.length) ?
                    <Link to="/guide">
                        <button
                            type="submit"
                            className="start"
                            onClick={ (event) => {
                                    history.push("/guide");
                                }}>
                        다음으로
                        </button>
                    </Link>
                    ://안녕하세요
                    <button
                        type = "submit"
                        className="start"
                        disabled>
                        다음으로
                    </button>
                    }
                </div>

            </form>


                </div>
            </div>
        </div>
    );
};


export default Home;