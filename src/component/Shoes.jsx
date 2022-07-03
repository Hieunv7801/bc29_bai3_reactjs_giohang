import React, { Component } from 'react'
import GioHang from './GioHang';
import WrapperModel from './WrapperModel';
import XemChiTiet from './XemChiTiet';

export default class Shoes extends Component {
  state = {
    isLogin: true
  }
  render() {
    const {name, image} = this.props.shoes;
    return (
         <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image} alt />
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <div>
                   <button data-toggle="modal" data-target="#modelId" onClick={() => this.setState({isLogin: true})}   className='btn btn-warning mr-2'>XEM CHI TIẾT</button>
                   <button onClick={() => this.props.addToCart(this.props.shoes)} className='btn btn-dark'><i class="fas fa-cart-arrow-down"></i></button>
                </div>
              </div>
            </div>
            <WrapperModel>
              {this.state.isLogin ? <XemChiTiet selecedShoes={this.props.selecedShoes}/> :  "Sản phẩm này tạm hết"}
            </WrapperModel>  
            </div>
           
    )
  }
}
