
import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        }

        console.log(this.props.name + " Child Constructor");
    }

   async componentDidMount(){
        const data=await fetch("https://api.github.com/users/TanujTanmaya");

        const json=await data.json();


        this.setState({
            userInfo:json,
        })

    }

    render(){

        const{name,location}=this.state.userInfo;

        return (
            <div className='user-card'>
              <h2>Name : {name}</h2>
              <h3>Location : {location}</h3>
              <h4>Contact :@tanuj.dev</h4>
              <div>
                LoggedIn User:
                <UserContext.Consumer>
                    {({loggedInUser})=> <h2 className="text-xl font-bold">{loggedInUser}</h2>}
                </UserContext.Consumer>
              </div>
            </div>
          )
    }
}

export default UserClass;