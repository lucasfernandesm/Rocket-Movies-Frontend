

import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    main {
        max-width: 112rem;
        margin: 4rem auto 1rem;
    
        form {
            width: 100%;
            padding-right: 1rem;

            h1 {
                font-family: "Roboto Slab", serif;
                font-size: 3.6rem;
                font-weight: 500;

                margin-top: 2.4rem;
                margin-bottom: 4rem;
            }
                
            h2 {
                font-family: "Roboto Slab", serif;
                font-size: 2rem;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                margin-bottom: 2.4rem;
            }

            overflow: hidden;
            overflow-y: auto;
            max-height: 47.5rem;

            &::-webkit-scrollbar {
                width: 0.8rem; 
                background-color: transparent;
            }
        
            &::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) => theme.COLORS.PINK};
                border-radius: .3rem;
            }
        }    
    }
`;

export const NoteAndTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
`;

export const Markers = styled.div`
    width: 100%;
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem;

    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};

    overflow: hidden;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 0.2rem; 
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 1rem;
    }
`;

export const DeleteAndSave = styled.div`
    display: flex;
    gap: 4rem;
    margin: 4rem 0 7rem;

    a {
        width: 100%;
    }
`;