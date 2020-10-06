import styled from 'styled-components'

export default styled.ul`
width:100%;
flex-direction: column;
padding-right:20px;
li{
  margin-top:5px;
}
li.mine{
  width:100%;
  min-height:35px;

  p{
    float:right;
  width: fit-content;
  border-radius:5px;
  background-color: greenyellow;
  padding: 5px;
  }

}
  li.notMine{
  width:100%;
   p{
    width: fit-content;
    background-color: grey;
    border-radius:5px;
    padding: 5px;
   }
      
  }
`