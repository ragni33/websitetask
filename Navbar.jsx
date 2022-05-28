
import React from 'react'
import styled from 'styled-components'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Badge } from '@mui/material';


const Container = styled.div`
height: 60px;
 `
const Wrapper = styled.div`

   padding: 10px 20px;
   display: flex;
   justify-content:  space-between;
`
const Left = styled.div`
flex: 1;
display: flex ;
justify-content: space-around;
`
const Language = styled.span`
   font-size: 14px;
   
`;
const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: -40%;
  padding-left: 10px;
  width: 100px;
  height:30px; cursor: pointer;
  
`;

const Logo = styled.h2`
 font-weight: bold;
;`
const Center = styled.div`
flex: 1; 
text-align: center;
`;
const Right = styled.div`
flex : 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin: 20px;
`
const Navbar = () => {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Language> EN</Language>
               <SearchContainer>
                  <FaSearch />
      </SearchContainer>
         </Left>
            <Center><Logo>CLothUp</Logo></Center>
            <Right>
               <MenuItem> REGISTER  </MenuItem>
               <MenuItem> SIGN IN  </MenuItem>
               <Badge badgeContent={ 4 } color="primary">
                  <FaShoppingCart />
               </Badge>
               
            </Right>
         </Wrapper>
      </Container>
   )
}


export default Navbar