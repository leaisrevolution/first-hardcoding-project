import React, { createContext } from "react";

export const UserContext = createContext();

const UserStore = (props) => {
    const users = {
        apikey : "43c8e52955dbc4c8d2b69e98c6d641f2",
        qestrnSeq : "25",
        trgetSe : "100207",
        name : "",
        gender : "",
        school : "",
        grade : "",
        email : "",
        startDtm : 1550466291034,
        answers: ""
      }

    return (<UserContext.Provider value={users}>{props.children}</UserContext.Provider>
    );
};

export default UserStore;
