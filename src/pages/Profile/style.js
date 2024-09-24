

import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    header {
        display: flex;
        align-items: center;
        padding: 0 14.4rem;

        width: 100%;
        height: 14.4rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 0 auto 10rem;
    max-width: 34rem;
    
    > div:nth-child(3) {
        margin-bottom: 1.6rem;
    }

    > div:nth-child(5) {
        margin-bottom: 1.6rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -8.6rem auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;
    

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;
        cursor: pointer;
        
        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;

            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`;