

import { Container } from './style'

export function ButtonPink({ title, icon: Icon }) {
    return(
        <Container>
            { Icon && <Icon/> }
            { title }
        </Container>
    )
}