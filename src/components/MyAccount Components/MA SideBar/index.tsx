import { Container } from "./styled";
import { NavLink } from "react-router-dom";


import {IoDiamond} from "react-icons/io5"
import { RiLiveFill } from "react-icons/ri";
import { MdAccountTree } from "react-icons/md";

export function MASideBar() {

    return (
        <Container>
            <nav>
                <ul>
                    <li><NavLink to="/myaccount/platforms" ><MdAccountTree fontSize={18} /> My platforms</NavLink></li>
                    <li><NavLink to="/myaccount/live"><RiLiveFill fontSize={18} /> Live</NavLink></li>
                </ul>
            </nav>
        </Container>
    )
}