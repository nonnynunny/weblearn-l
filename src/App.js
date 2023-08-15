import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const [ data, setData ] = useState();
  return (
    <Container>
      <h4>React Hook Form</h4>
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Form.Group className='mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control {...register('email')} type='email' placeholder='Enter email'/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control {...register('password')} type='password' placeholder='Enter password'/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>User Type</Form.Label>
          <Form.Select {...register('userType')}>
            <option value='0' selected>--- Select ---</option>
            <option value='1'>Guest</option>
            <option value='2'>VIP</option>
            <option value='3'>Developer</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group>
          <Form.Check {...register('remember')} type='checkbox' label='Remember Me'></Form.Check>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Text>{data}</Form.Text>
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
