

import { Container, Profile } from './style'
import { Input } from '../Input'

import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Header({ search, setSearch }) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/")
        signOut();
    }

    function handleSearch(e) {
        navigate("/");
        setSearch(e.target.value);
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container >
            <h1>RocketMovies</h1>

            <Input 
                placeholder="Pesquisar pelo título" 
                value={search}
                onChange={handleSearch}
            />

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={handleSignOut}>sair</button>
                </div>

                <Link to="/profile"> <img src={avatarUrl} alt={user.name} /> </Link>
            </Profile>
        </Container>
    )
}