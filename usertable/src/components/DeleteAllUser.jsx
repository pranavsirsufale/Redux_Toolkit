import styled from 'styled-components';
import { useDispatch , useSelector} from 'react-redux';
import { clearAdmin, clearUser } from '../store/actions';
export const DeleteAllUser = () => {

  const dispatch = useDispatch()

  const handleClearOperation = () => {
    dispatch(clearUser())
    dispatch(clearAdmin())
  }

  return (
    <Wrapper>
    <button className='btn clear-btn'  onClick={handleClearOperation} >
    Clear All User 
  </button>
  </Wrapper>
  )
}

const Wrapper = styled.section`
.clear-btn{
text-transform : capitalize;
background-color : #db338a;
margin-top: 2rem;
}
`

