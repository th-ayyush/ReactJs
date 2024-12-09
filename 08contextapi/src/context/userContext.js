import React from "react";

const UserContext =React.createContext()

export default UserContext;

// example


//Here ,Usercontext act as a provider which means it wraps your components or it has the control of your components
//ALL components can take access with the help of usercontext


// <UserContext>
//     <Login/>
//     <Card></Card>
// <UserContext/>