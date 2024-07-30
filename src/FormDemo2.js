import React, { Component } from 'react'
import alertify from "alertifyjs";
import {Button,Form,FormGroup,Label,Input} from "reactstrap"
export default class FormDemo2 extends Component {
    state={email:"",password:"",city:"",description:""}
    handleChange=event=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})

    }
    handleSubmit=event=>{
        event.preventDefault();
        alertify.success(this.state.email + "Eklendi", 1);
    }
  render() {
    return (
      <div>
        <form  onSubmit={this.handleSubmit}>
            <FormGroup>
            <label for="email">Mailiniz</label>
            <Input type='email' name='email' id='email' placeholder='Mailinizi Girin' onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
            <label for="password">Şifreniz</label>
            <Input type='password' name='password' id='password' placeholder='Şifrenizi Girin' onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
            <label for="description">Mesajınız</label>
            <Input type='textarea' name='description' id='description' placeholder='Mesajınız' onChange={this.handleChange}></Input>
            </FormGroup>
            <FormGroup>
                <label for="city">Şehir</label>
                <Input type='select' name="city" id='city' onChange={this.handleChange}>
                    <option>Ankara</option>
                    <option>İstanbul</option>
                    <option>İzmir</option>
                    <option>Mardin</option>
                    <option>Çanakkale</option>
                    <option>Kayseri</option>
                </Input>
            </FormGroup>
            <Button type='submit'>GÖNDER</Button>
        </form>
      </div>
    )
  }
}
