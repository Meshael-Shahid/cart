import styled from 'styled-components'

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;

    h2 {
        display: block;
        text-align: center;
        border-bottom: 2px solid lightblue;
        padding: 20px;
        background-color: #DCD9D8;
    }

    .mainDIV {
        border: 2px solid #ccc;
        padding: 10px;
        text-align: center;
        padding-bottom: 20px;
    }

    input {
        width: 70%;
        margin-bottom: 20px;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .BTNS {
        padding: 10px;
        background-color: #2AA6DF;
        border: none;
        border-radius: 5px;
        font-size: 19px;
        color: white;
        text-decoration: none;
    }

    .BTNS: hover {
        background-color: #62C1EB;
    }

    .cancelBTN {
        background-color: #F14723;
    }

    .cancelBTN: hover {
        background-color: #F56546;
    }

    #betweenBTNS {
        margin-left: 20px;
        margin-right: 20px;
        display: inline;
    }
`