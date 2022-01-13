
import {Form} from 'react-bootstrap'

function SEarch({search,setSearch}) {
    return(
        <div className='search'>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Search..."  onChange={(e)=> setSearch(e.target.value)} value={search}  />
  </Form.Group>
</Form>
        </div>
    )
    
}
export default SEarch 