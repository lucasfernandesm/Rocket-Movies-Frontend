

import styled from 'styled-components'

export const Container = styled.div`
    main {
        max-width: 113rem;
        margin: 4.5rem auto 6rem;

        header {
            display: flex;
            align-items: center;
            gap: 74rem;
            margin-bottom: 3.5rem;

            h1 {
                font-weight: 400;
                white-space: nowrap;
            }

            a {
                width: 100%;
            }
        }
    };
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

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
    
`;

