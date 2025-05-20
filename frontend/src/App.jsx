import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    password: '',
    phone: '',
    custom: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/' , formData)
   console.log('Response from backend:', res.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

useEffect(() => {
  console.log("Form Data : ", formData||"hggg");
}, [formData]);
  
const  getData = async ()=>
{

  const result = await axios.get('http://localhost:8000/')
  console.log(result);
}

useEffect(()=>
{
  getData()
},[])

  return (
    <div style={styles.container}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="custom"
          placeholder="Custom Message"
          value={formData.custom}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <button onClick={getData} style={styles.button}>GetData</button>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    maxWidth: 400,
    margin: 'auto',
    fontFamily: 'sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 12,
    padding: 10,
    fontSize: 16,
  },
  textarea: {
    marginBottom: 12,
    padding: 10,
    fontSize: 16,
    height: 80,
  },
  button: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }
};

export default App;
