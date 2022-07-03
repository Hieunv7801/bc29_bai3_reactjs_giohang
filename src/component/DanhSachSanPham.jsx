import React, { Component } from 'react'
import dataShoes from '../Data/shoseData.json'
import Shoes from './Shoes'
export default class DanhSachSanPham extends Component {
  renderListShoes = () => {
    return dataShoes.map((ele) => {
      return (
        <Shoes addToCart={this.props.addToCart}
        selecedShoes ={this.props.selecedShoes} selecShoes={this.props.selecShoes} key={ele.id} shoes={ele}/>
      )
    })
  }
  render() {
    return (
      <div>
         <h4 className='text-center mt-5'>SHOES SHOP</h4>
          <div className="row">
            {this.renderListShoes()}
          </div>
      </div>
    )
  }
}
