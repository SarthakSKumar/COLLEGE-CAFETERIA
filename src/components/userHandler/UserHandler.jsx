import {useState} from "react"
import "./userHandler.css"
import Login from "../login/login"
import Register from "../register/register"

export default function UserHandler({}){
const [showLogin, setShowLogin] = useState(true)
const [showRegister, setShowRegister] = useState(false)
    return(
        <div className="absolute top-[10rem] left-[10rem] rounded-lg w-3/4 text-center text-xl bg-white z-20">
            <h1><span id="one">PESU</span><span id="two"> Cafe</span></h1>
        <h3>🍴📱 Order your snacks and beverages <br/>from the PESU Cafeteria with
            ease! 🍔🍟</h3>
            <Login/>
            <Register/> 
        </div>
    )
}
