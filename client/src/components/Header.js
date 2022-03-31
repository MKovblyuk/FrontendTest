import React from "react";
import {NavLink} from "react-router-dom"
import { Button } from '@mui/material';
import "../css/header.css"

export const Header = () => {
    return(
        <header>
            <NavLink to="task1">
                <Button color="success" variant="contained" sx={{margin: "0 10px"}}>Task 1</Button>
            </NavLink>

            <NavLink to="task2">
                <Button color="success" variant="contained" sx={{margin: "0 10px"}}>Task 2</Button>
            </NavLink>

            <NavLink to="task3">
                <Button color="success" variant="contained" sx={{margin: "0 10px"}}>Task 3</Button>
            </NavLink>

            <NavLink to="task4">
                <Button color="success" variant="contained" sx={{margin: "0 10px"}}>Task 4</Button>
            </NavLink> 
        </header>
    )
}