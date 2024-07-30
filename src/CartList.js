import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategori Numarası</th>
            <th>Malzeme İsmi</th>
            <th>Birim Fiyatı</th>
            <th>Birim Başına Miktar</th>
            <th>Stok Durumu</th>
          </tr>
        </thead>
        <tbody>
            {
                this.props.cart.map(cartItem=>(
                    <tr key={cartItem.product.id}>
                            <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.quantityPerUnit}</td>
                            <td>{cartItem.product.unitsInStock}</td>
                            <td>
                                <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>Sepetten Kaldır</Button>
                            </td>
                            
                    </tr>
                ))
            }
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>
        
            {this.renderCart()}

    </div>;
  }
}
