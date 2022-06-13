
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterrr, filterrrcateg, getproducts } from '../store/slices/products.slice';

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const navigate = useNavigate()

  const [search, setsearch] = useState("")
  const [categories, setcategories] = useState([])

  const filtrar = () => {dispatch(filterrr(search));}



  const filtercateg = (id)=>{
    dispatch(filterrrcateg(id));
  }

  useEffect(() => {
    dispatch(getproducts())

    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
      .then(res => setcategories(res.data.data.categories))

  }, [])
  



  return (
    <div> <h1>home</h1>
      <ListGroup horizontal className='list'>

        {
          categories?.map(categ => (
            <ListGroup.Item key={categ.id} onClick={()=>filtercateg(categ.id)}>{categ.name}</ListGroup.Item>
          ))

        }
      </ListGroup>





      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={e => setsearch(e.target.value)}
          value={search}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={filtrar}>
          Search
        </Button>
      </InputGroup>
<div className='contain'>
{products.data?.products?.map(productitem =>
        <Card className='CARD' key={productitem.id} onClick={() => navigate(`/product/${productitem.id}`)}>
          <b className='titlep'>{productitem.title}</b>
          <img className='home-img' src={productitem.productImgs[0]} alt="" />
          <div className='price'>{productitem.price} $</div>
        </Card>
      )}

</div>
      

    </div>
  );
};

export default Home;