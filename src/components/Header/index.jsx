

import { Container, Profile } from './style'
import { Input } from '../Input'

import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';

export function Header() {
    const { signOut } = useAuth();

    return(
        <Container >
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título" />

            <Profile>
                <div>
                    <strong>Lucas Fernandes</strong>
                    <button onClick={signOut}>sair</button>
                </div>

                <Link to="/profile"> <img src="https://github.com/lucasfernandesm.png" alt="Foto do usuário" /> </Link>
            </Profile>
        </Container>
    )
}