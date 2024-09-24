

import { Container, Profile } from './style'
import { Input } from '../Input'

import { Link } from 'react-router-dom'

export function Header() {
    return(
        <Container >
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <strong>Lucas Fernandes</strong>
                    <a href="#">sair</a>
                </div>

                <Link to="/profile"> <img src="https://github.com/lucasfernandesm.png" alt="Foto do usuário" /> </Link>
            </Profile>
        </Container>
    )
}