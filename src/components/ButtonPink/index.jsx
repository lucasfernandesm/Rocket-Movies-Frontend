

import { Container } from './style'

export function ButtonPink({ title, icon: Icon, ...rest }) {
    return(
        <Container type="button" {...rest}>
            { Icon && <Icon/> }
            { title }
        </Container>
    )
}