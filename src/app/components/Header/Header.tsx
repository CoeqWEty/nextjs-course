"use client"
import Logo from "./logo"
import Menu from "./menu"


export default function Header(props:any) {

    return(<header >
        {props.name}
        {props.age}
        {props.sex}
        <Logo/>
        <Menu {...props}/> 
        
        </header>)
}