import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form.jsx';
import axios from 'axios';
function App() {

  const [Page,SetPage]= useState(1)
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

  const PrevPage=()=>{
    if (Page >1){
    SetPage(Page-1) }
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
  const NextPage=()=>{
    if(Page<Data.length*Page)
    SetPage(Page+1);
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
       ` http://localhost:3004/post?_page=${Page}&_limit=4`
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
  const deleteData = async (e) => {
  
   
    try {
      const response = await axios.delete("http://localhost:3004/post/" + e.target[0].value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => { getData(); }, [Page]);
  return (
    <div className="App">


      <div className='wall1'>
        <h1>Request Data With AXIOS</h1>
        {Data?.map((item) => (
          <div key={item.id} className="item">
            <table>
              <tr>
                <td>name</td>
                <td>:</td>
                <td>{item.name}</td>
              </tr>
              <tr>
                <td>id</td>
                <td>:</td>
                <td>{item.id}</td>
              </tr>
              <tr>
                <td>email</td>
                <td>:</td>
                <td>{item.email}</td>
              </tr>
              <tr>
                <td>age</td>
                <td>:</td>
                <td>{item.age}</td>
              </tr>
            </table>

          </div>
        ))}
      </div>
     <div class="button px-4">  
     <button class="btn btn-light mx-2"  onClick={PrevPage}>Pref</button>
     <button class="btn btn-light mx-2" onClick={NextPage}>Next</button>
      </div>
      <div class="wallform">
    
        <span class="child">
          <h3>POST REQUEST DATA</h3>
          <Form type='POST' name='POST'action={(e) => { postData(e) }} />
        </span>
        <span class="child">
          <h3>PATCH REQUEST DATA</h3>
          <Form type='UPDATE' name='PATCH' action={(e) => { patchData(e) }} />
        </span>
        <span class="child">
        <h3>PUT REQUEST DATA</h3>
          <Form type='UPDATE' name='PUT' action={(e) => { putData(e) }} />
        </span>
        <span class="child">
        <h3>DELETE</h3>
        <div class="form">
          <form onSubmit={(e) => {
            deleteData(e);
          }}>
            <input className="input" type="number" placeholder="id" />
            <button className="btn btn-dark" type="submit">
              delete
            </button>
          </form>
          </div>
        </span>
      </div>
</div>
      )

}

      export default App