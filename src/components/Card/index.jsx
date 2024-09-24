

import { Container } from './style'

import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

import { Link } from 'react-router-dom'

export function Card({ data, ...rest }) {
    return(
        <Link to="details/:id">
            <Container { ...rest }>
                <h2>{ data.title }</h2>

                <Stars />

                <p>{data.summary}</p>

                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map( tag => <Tag key={tag.id} title={tag.name} />)
                        }
                    </footer>
                }
            </Container>
        </Link>
    )
}