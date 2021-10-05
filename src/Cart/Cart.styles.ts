import styled from 'styled-components'

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;

    .centerDIV {
        text-align: center;
    }

    #noItems {
        margin-top: 50px;
        margin-bottom: 50px;
        color: #F56546;
        font-weight: bold;
    }

    #proceedBTN {
        padding: 10px;
        background-color: #2AA6DF;
        border: none;
        border-radius: 5px;
        font-size: 19px;
        color: white;
        text-decoration: none;
    }

    .topMargin {
        margin-top: 30px;
    }

    #proceedBTN: hover {
        background-color: #62C1EB;
    }
`