

import styled from "styled-components";

export const Container = styled.div`

    main {
        max-width: 113rem;
        margin: 4rem auto 10rem;

    }
`;

export const Content =styled.div`
    margin-top: 2.4rem;

    header {
        display: flex;
        align-items: center;
        gap: 1.9rem;
        margin-bottom: 2.4rem ;
    }

    overflow: hidden;
    overflow-y: auto;
    max-height: 47.5rem;

    p {
        margin-bottom: 2rem;
    }

    &::-webkit-scrollbar {
        width: 0.8rem; 
        background-color: transparent;
    }
   
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: .3rem;
    }
`;

export const CreationDate = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-family: "Roboto", serif;

    img {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};
    }

    svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Tags = styled.div`
    display: flex;
    gap: 0.8rem;

    margin: 4rem 0;
`;