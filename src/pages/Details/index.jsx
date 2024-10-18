

import { Container, Content, CreationDate, Tags } from './style';

import { MdOutlineWatchLater } from "react-icons/md";

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { ButtonBlack } from '../../components/ButtonBlack';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { format } from 'date-fns';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    function handleBack() {
        navigate(-1);
    }

    function formatDate(dateTimeString) {
        return format(new Date(dateTimeString), "dd/MM/yy 'às' HH:mm");
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover a nota?");
        
        if(confirm) {
          await api.delete(`/notes/${params.id}`);
          handleBack();
        }
    }

    useEffect(() => {
        async function fetchNote(){
        const response = await api.get(`/notes/${params.id}`);
        setData(response.data)
        }

        fetchNote();
        
    }, [])

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Header/>
            <main>
                <ButtonText title="Voltar" onClick={handleBack} />
                {
                    data &&
                        <Content>
                            <header>
                                <h1>{data.title}</h1>
                                <Stars rating={ data.rating }/>
                            </header>

                            <CreationDate>
                                <img src={avatarUrl} alt={user.name} />
                                <span>Por {user.name}</span>
                                <MdOutlineWatchLater />
                                <span>{formatDate(data.created_at)}</span>
                            </CreationDate>

                            <Tags>
                            {
                                data.tags.map(tag => (
                                <Tag 
                                    key={String(tag.id)} 
                                    title={tag.name} 
                                />
                                ))
                            }
                            </Tags>

                            <p>{data.description}</p>

                            <ButtonBlack title="Excluir filme" onClick={handleRemove}/>
                        </Content>
                }
            </main>
        </Container>
    )
}