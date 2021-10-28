import styled from 'styled-components';


export const SectionContainer = styled("div")`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: space-between;
gap: 50px;
row-gap: 100px;
padding-top: 50px;
padding-bottom: 50px;
`


export const Section = styled("div")`
background-color: #fff;
box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.20);
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
border-radius: 10px;
width: 80%;
height: 100%;
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