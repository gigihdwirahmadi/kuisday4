import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form.jsx';
import axios from 'axios';
function App() {


  const postData = async (e) => {
   
    const body = {};

    try {
      const res = await axios.post(
        'http://localhost:3004/post',
        {
          name: e.target[0].value,
          age: e.target[1].value,
          email: e.target[2].value
        }
      )
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }

  const patchData = async (e) => {

    const body = {};

    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value) {
        body[e.target[i].placeholder] = e.target[i].value;
      }
    }

    console.log(body);

    try {
      const res = await axios.patch(
        'http://localhost:3004/post/' + e.target[0].value,
        {
          ...body
        }
      )
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }
  const putData = async (e) => {

    const body = {};

    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value) {
        body[e.target[i].placeholder] = e.target[i].value;
      }
    }

    console.log(body);

    try {
      const res = await axios.put(
        'http://localhost:3004/post/' + e.target[0].value,
        {
          ...body
        }
      )
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }
  const [Data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3004/post'
      );

      console.log(response)
      if (response.status === 200) {
        setData(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
const deleteData = async(e)=>{
  try {const response = await axios.delete(
    'http://localhost:3004/post'+ e.target.value[0]
  )
}catch (error) {
  console.log(error);
}
}

  useEffect(() => { getData(); }, []);
  return (
    <div className="App">

      
      <div className='wall1'>
      <h1>Request Data With AXIOS</h1>
        {Data?.map((item) => (
          <div key={item.id} className="item">
            name :{item.name} <br></br>
            age: {item.age} <br></br>
            email : {item.email} <br></br>

          </div>
        ))}
      </div>
      <div>
      <h1>PUT REQUEST DATA</h1>
      <Form type='POST' action={(e) => { postData(e) }} />
      <h1>PATCH REQUEST DATA</h1>
      <Form type='UPDATE' action={(e) => { patchData(e) }} />
      <Form type='UPDATE' action={(e) => { putData(e) }} />
      <Form type='DELETE' action={(e) => { deleteData(e)}}/>
      </div>
    </div>

  )

}

export default App