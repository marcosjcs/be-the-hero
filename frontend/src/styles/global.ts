import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${props => props.theme.colors.background};
        font: 400 14px Roboto, sans-serif;
        color: ${props => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
    }

    .register-container .content {
        background: ${props => props.theme.colors.background};
    }

    .register-container .content section p {
        color: ${props => props.theme.colors.text};
    }

    .profile-container ul li {
        background: ${props => props.theme.colors.primary};
    }

    .profile-container ul li strong {
        color: ${props => props.theme.colors.text};
    }

    .profile-container ul li p {
        color: ${props => props.theme.colors.text};
    }

    .new-incident-container .content {
        background: ${props => props.theme.colors.primary};
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    }

    .new-incident-container .content section p {
        color: ${props => props.theme.colors.text};
    }

    .edit-incident-container .content {
        background: ${props => props.theme.colors.primary};
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    }

    .edit-incident-container .content section p {
        color: ${props => props.theme.colors.text};
    }

    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }
    
    button {
        cursor: pointer;
    }
    
    form input {
        width: 100%;
        height: 60px;
        background: ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.text};
        border: 1px solid ${props => props.theme.colors.secundary};
        border-radius: 8px;
        padding: 0 24px;
    }
    
    form textarea {
        width: 100%;
        resize: vertical;
        min-height: 140px;
        background: ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.text};
        border: 1px solid ${props => props.theme.colors.secundary};
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
    }
    
    .button {
        width: 100%;
        height: 60px;
        background: #e02041;
        border: 0;
        border-radius: 8px;
        color: #FFF;
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter 0.2s;
    }
    
    .button:hover {
        filter: brightness(90%);
    }
    
    .back-link {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: ${props => props.theme.colors.text};
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
    }
    
    .back-link svg {
        margin-right: 8px;
    }
    
    .back-link:hover {
        opacity: 0.8;
    }
`;