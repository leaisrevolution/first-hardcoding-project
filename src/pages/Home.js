
import React, { useState, Component } from 'react';
import Select from 'react-select';
import { render } from '@testing-library/react';



const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
];

const Home = (props) => {
    const { history } = props;
    console.log(props)
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (option) => {
        setSelectedOption(option);
        console.log(`Option selected:`, option);
};

const customStyles = {
    input: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
    width: 200,
    }),
    singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
    }
}

    // const dispatch = useDispatch();
    // const [name, setName] =useState('');
    // const [gender, setGender] = useState('');

    // const handleClickRadioButton = useCallback((radioBtnName) => {
    //     setGender(radioBtnName)
    // }, [gender])

    //     const handleClickRadioButton = () => {
    //     const nonFullKorean = /[ㄱ-ㅎ]/g

    //     if (nonFullKorean.test(name)) {
    //         setName('')
    //         setGender('')
    //         error("이름을 다시 입력해주세요.", {
    //             position: "top-right"
    //         })
    //     } else {
    //         dispatchEvent(actions.registerUser({name, gender}));
    //         history.push('/Guide');
    //     }
    // }

    //     const handleInputName = (e) => {
    //     const regex = /[a-z0-9~!@#$%^&*()\-=+_';<>/.`:",[\]?|{}\s*\r\n]/gi
    //     const fullKorean = /^[ㄱ-ㅎ|가-힣]*$/
    //     console.log(e.target.value)
    //     if(regex.test(e.target.value)){
    //         toast.error("한글만 입력해주세요.",{
    //             position: "top-right"
    //         })
    //         e.target.value = e.target.value.replace(regex, '')
    //     }

    //     if(fullKorean.test(e.target.value)){
    //         setName(e.target.value);
    //     }
    // }

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
                    <hr class="foo" />

                <div className = "Q">
                    <h5> Q1.당신의 이름을 입력해주세요. </h5>
                    <input
                        name="name"
                        className = "inputName"
                        // onChange={handleInputName}
                        // value={name}
                        type="text" />
                </div>

                <div className = "Q">
                    <h5> Q2.당신의 나이를 입력해주세요. </h5>
                    <input
                        name ="age"
                        className = "inputName"
                        // onChange={handleInputAge}
                        // value={age}
                        type="text" />
                </div>

                <div className = "Q">
                    <h5> Q3.당신의 성별을 선택해주세요. </h5>
                </div>

                {/* <select className = "gender">
                    <option className ="genderSelet">선택</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select> */}

                        <Select id = "select1"
                            value={selectedOption}
                            onChange={handleChange}
                            options={options}
                    />

                <div className="startbtn">
                    <button
                        className="start"
                        // disabled={!(inputname && gender)}
                        onClick={() => {
                            history.push("/guide");
                            }}>
                            다음으로
                    </button>
                </div>

                </div>

                    </div>
                </div>
            </div>


    );
};



export default Home;