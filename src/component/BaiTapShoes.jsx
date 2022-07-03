import React, { Component } from 'react'
import dataShoes from '../Data/shoseData.json'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapShoes extends Component {
    state = {
        selecedShoes: dataShoes[0],
        cartList: []
    }
    //* render giao diện 
    selecShoes = (shoes) => {
        this.setState({
            selecedShoes: shoes,
        })
    }
    //* Thêm vào giỏ hàng
    addToCart = (shoes) => {
        const data = [...this.state.cartList];

        const idx = data.findIndex((ele) => ele.id === shoes.id);

        if(idx !== -1){
            data[idx].soLuong += 1;
        }else{
            data.push({...shoes, soLuong: 1});
        }
        this.setState({
            cartList: data
        })
    }
    //* tăng giảm số lượng
    handleQuantity =(shoes, isIncrease) => {
        const data = [...this.state.cartList]

        const idx = data.findIndex((ele) => ele.id === shoes.id)

        if(idx === -1){
            alert("Không tìm thấy sản phẩm");
            throw new Error("Không thấy sản phẩm");
        }
        if(isIncrease){
            data[idx].soLuong += 1;
        }else if(data[idx].soLuong > 1){
            data[idx].soLuong += 1;
        }else if(window.confirm("Bạn có muốn xóa không ?")){
            data.splice(idx,1);
        }
        this.setState({
            cartList: data
        })
    }
    //* xóa giỏ hàng
    deleteCart = (id) => {
        const data= [...this.state.cartList]

        const idx = data.findIndex((ele) => ele.id === id);

        if(idx !== -1){
            data.splice(idx,1);
        }
        this.setState({
            cartList: data
        })
    }
    render() {
        return (
                <div className="container">
                    <GioHang deleteCart={this.deleteCart} handleQuantity= {this.handleQuantity} cartList={this.state.cartList}/>
                   <DanhSachSanPham addToCart={this.addToCart} selecedShoes={this.state.selecedShoes} selecShoes = {this.selecShoes}/>
                </div>
        )
    }
}
