

import { Container } from './style'

export function ButtonBlack({ title, ...rest }) {
    return(
        <Container { ...rest }>
            { title }
        </Container>
    )
}