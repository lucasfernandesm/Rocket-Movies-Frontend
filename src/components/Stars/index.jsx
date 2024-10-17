

import { Container } from './style'

import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

export function Stars({rating}) {
    const renderStars = () => {
        const fullStars = Math.floor(rating); 
        const emptyStars = 5 - fullStars;     
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<MdOutlineStar key={`full-${i}`} />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<MdOutlineStarBorder key={`empty-${i}`} />);
        }

        return stars;
    }

    return(
        <Container>
            { renderStars() }
        </Container>
    )
}