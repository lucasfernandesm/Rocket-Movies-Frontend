

import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    align-items: center;
    gap: 6.4rem;

    padding: 2.4rem 12.3rem;
    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY};

    > h1 {
        font-family: "Roboto Slab", serif;
        font-size: 2.4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9rem;

    font-family: "Roboto Slab", serif;
    font-size: 1.4rem;

    > div {
        display: flex;
        flex-direction: column;
        text-align:right;
        width: 12.5rem;

        > button {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY};
            background: none;
            border: none;
            text-align: right;
        }
    }

    > a {
        > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }
    }
    
`;