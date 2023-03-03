import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const Input = styled.input`
position: relative;
border: none;
outline: none;
border-bottom: 1px solid #333;
`

const Button = styled.button`
font-size: 23px;
border: none;
outline: none;
background: transparent;
`

const DIV = styled.div`
line-height: 1;
margin: -35px 0 0 0;
`



const Search = () => {
    const [txt, setTxt] = useState('')
    const inputHandler = e => {
        const { value } = e.target;
        if (value.legnth < 5) return;
        setTxt(value)
    }
    // const [value, name] = e.target;
    // {...BsList, [name]:value}
    return (
        <>
            <Input type="text" onChange={inputHandler} />
            <Button><BsSearch /> </Button>
            <DIV>{txt}</DIV>
        </>
    )
}

export default Search;