

import { Container } from './style'
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText ({ title }) {
    return(
        <Container type="button">
            <FiArrowLeft />
            { title }
        </Container>
    )
}