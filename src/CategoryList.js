import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  // constructor(props){
  //   super(props);
  //   state:{};
  // } //Eskiden bunu yapmak zorundayız yeni nesılk kodlamada gerek yok
  state = {
    categories: []
  };

    componentDidMount(){//compenent yerleşti sen gt ve categorileri doldur demektir aşağıda categori seçtiğimiz için!
      this.getCategories();
    }

    getCategories=()=>{
      fetch("http://localhost:3000/categories").then(response=>response.json()).then(data=>this.setState({categories:data}));
    }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {//map for gibi eleman sayısı kadar döngü yaptırır!
            this.state.categories.map(category =>(
                <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}//tıkladığın yere mavi arkaplan uyguadık
                  onClick={() => this.props.changeCategory(category)}
                  key={category.id}
                >
                  {category.categoryName}
                </ListGroupItem>
              )
            ) //burdaki key react.js algoritmasında yakalamak gferekir daha hızlı yakalaması için o id private key olmalıdır
            //buradaaki setState objedeki değişmesi gereken değeri ister!
          }
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
