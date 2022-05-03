import styled, {css} from "styled-components";

const Boton = styled.button`
    background: #83d394;
    display: inline-block;
    padding: 20px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;
    width: ${props => props.largo ? '100%' : 'auto'};
    margin-right: ${props => props.mR ? '10px' : 'none'};
    margin-bottom: ${props => props.mB ? '20px' : 'none'};
    margin-top: ${props => props.mT ? '10px' : 'none'};

    &:hover {
        background: #44a559;
        color: #fff;
    };

    ${props => props.negro && css`
        background: #000;
        color: #fff;
    `}
`

export default Boton;