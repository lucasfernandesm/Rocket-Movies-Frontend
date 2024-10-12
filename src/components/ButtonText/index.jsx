

import { Container } from './style'
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText ({ title, ...rest }) {
    return(
        <Container type="button" {...rest}>
            <FiArrowLeft />
            { title }
        </Container>
    )
}