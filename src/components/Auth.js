import React from 'react'
import Api from '../Api'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

export default class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleLogin = () => {
        const { email, password } = this.state
        const userdata = { email , password }
        Api.signin(userdata).then(resp => localStorage.setItem("token", resp.token))
    }

    handleChange = (e, {name, value}) => {
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state
        return(
            <div className='login-form' style={{backgroundColor: "#6F58C9"}}>
            <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
                height: 100%;
            }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: 450 }} >
                <Header as='h2' style={{color: "#fff"}} textAlign='center'>
                Brick by Brick
                </Header>
                <Form size='large' onSubmit={this.handleLogin}>
                <Segment stacked>
                    <Form.Input fluid icon='user' name="email" value={email} iconPosition='left' placeholder='E-mail address' onChange={this.handleChange} />
                    <Form.Input fluid icon='lock' name="password" value={password} iconPosition='left' placeholder='Password' type='password' onChange={this.handleChange} />
                    <Button style={{backgroundColor: "#6F58C9", color:"#fff"}} fluid size='large'>
                    Login
                    </Button>
                </Segment>
                </Form>
                <Message>
                New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
            </Grid>
        </div>
        )
    }
  
}