

import { Container } from './style'

import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

export function Stars() {
    return(
        <Container>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
        </Container>
    )
}