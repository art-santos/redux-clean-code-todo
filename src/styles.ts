import styled from 'styled-components';

export const Button = styled("button")<{side: string}>`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
    background-color: ${props => props.side === "right" ? '#218d1f' : '#c20b0b'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 60px;
    width: 50px;
    border-radius: 5px;
    border: 0px;
    font-size: 40px;
    padding: 5px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        transition: 0.5s;
    }
`;

export const Text = styled("div")`
    max-width: 60%;
`
export const Form = styled("form")`
    display: flex;
    flex-direction: row;
    align-items: center; 
    margin: 25px;
    padding: 15px 0px 25px 0px;
    height: 100%;
    min-width: 300px;
    margin: auto;
    width: 80%;
`;



export const Input = styled("input").attrs({
    type: "text",
    placeholder: "Add Task"
})`
    height: 40px;
    width: 250px;
    padding: 10px;
    font-size: 18px;
`;

export const Submit = styled("input").attrs({
    type: "submit",
    value: "+"
})`
    background-color: #0066ff;
    color: #fff;
    height: 60px;
    width: 100px;
    margin: 5px;
    padding: 5px;
    border: 0px;
    border-radius: 5px;
    padding: 5px;
    font-size: 40px;
    cursor: pointer;
`;

export const TodoContainer = styled("div")`
    width: 100%;
    word-wrap: break-word;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.18);
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 10px;
`

export const Section = styled("div")`
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.20);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    width: 70%;
    padding: 0px 40px 25px 40px;
    margin: auto;
`

export const SectionTitle = styled("div")`
    word-wrap: break-word;
    width: 100%;
    text-align: center;
    font-size: 36px;
    padding: 10px;
`