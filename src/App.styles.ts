import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`

    .category {
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
    }

    .category select {
        width: 50%;
        height: 25px;
        background-color: #C0D6E0;
        font-size: 13px;
        font-weight: bold;
        color: #1E9ED8;
        border-radius: 5px;
        border: 3px solid lightblue;
    }

    button, #admin {
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

    #admin {
        text-decoration: none;
    }

    #admin: hover {
        background-color: #62C1EB;
    }

    margin: 40px
`;

export const StyledButton = styled(IconButton)`
    && {
        position: fixed;
        z-index: 100;
        right: 20px;
        top: 40px;
    }
`