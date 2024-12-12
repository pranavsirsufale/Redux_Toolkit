import { useDispatch,useSelector} from 'react-redux'
import styled from "styled-components"
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/Userslice";


const DisplayUsrs = () => {

    const dispatch = useDispatch()
    const data = useSelector((state)=> ( state.user) )
    const handleRemoveUser = (index) => {
    dispatch(removeUser(index))
    }


  return (
    
    <Wrapper>
    {
        data.map((username,index) => (
            <li key={index} > {username} 
             <button className="btn-delete" > 
                <MdDeleteForever onClick={()=>handleRemoveUser(index)}  className='delete-icon' />
                 </button>   
            </li>
        ))
    }
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  ul {
   display: flex;
justify-content: space-between;
   
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsrs