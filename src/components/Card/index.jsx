

import { Container } from './style'

import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

import { Link } from 'react-router-dom'

export function Card({ data, ...rest }) {
    return(
            <Container { ...rest }>
                <h2>{ data.title }</h2>

                <Stars rating={ data.rating }/>

                <p>{data.description}</p>

                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map( tag => <Tag key={tag.id} title={tag.name} />)
                        }
                    </footer>
                }
            </Container>
    )
}