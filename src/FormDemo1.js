import React, { Component } from 'react'

export default class FormDemo1 extends Component {
  state={userName:'',city:''}
  onChangeHandler=(event)=>{
   // this.setState({userName:event.target.value})
   let name=event.target.name;
   let value=event.target.value;
   this.setState({[name]:value})
   //neden yukarıdaki kapalı kod değil: çünkü diğer inputlara değer girdiğimizde kapsayıcı userNameyi kullanıyor ve başka inputlarda yazılan değer onu değiştiriyor!

  }
  onSubmitHandler=(event)=>{
    event.preventDefault();//bu kod submit işlemi sayfayı yeniler yani başka sayfaya gitmek için kullanırız genelde bu event bu ayarı yapma demektir default ayarı yapma!
    alert(this.state.userName);

  }
  render() {
    return (
      <div>
          <form onSubmit={this.onSubmitHandler}>
            <h3>Kullanıcı Adı</h3>
            <input name="userName" onChange={this.onChangeHandler} type="text"></input>
            <h3>Kullanıcı Adı {this.state.userName}</h3>

            <h3>Şehir</h3>
            <input name="city" onChange={this.onChangeHandler} type="text"></input>
            <h3>Bulunduğu Şehir {this.state.city}</h3>
            <input type='submit' value="Kaydet"></input>
          </form>
      </div>
    )
  }
}
