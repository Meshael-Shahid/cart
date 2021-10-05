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
    
    h3 {
        color: #2AA6DF;
    }

    div {
        border: 2px solid #ccc;
        padding: 10px;
        text-align: center;
    }

    input {
        width: 70%;
        margin-bottom: 20px;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    select {
        width: 50%;
        height: 25px;
        background-color: #C0D6E0;
        font-size: 13px;
        font-weight: bold;
        color: #1E9ED8;
        border-radius: 5px;
        border: 3px solid lightblue;
    }

    button, #shop {
        padding: 10px;
        background-color: #2AA6DF;
        border: none;
        border-radius: 5px;
        font-size: 19px;
        color: white;
    }

    button: hover {
        background-color: #62C1EB;
    }

    #shop: hover {
        background-color: #62C1EB;
    }

    #shop {
        float: left;
        text-decoration: none;
    }

    p {
        color: #ccc;
        margin-bottom: 0px;
    }
`