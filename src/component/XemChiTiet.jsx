import React, { Component } from 'react'

export default class XemChiTiet extends Component {
  render() {
    const {name,
        alias,
        price, 
        description, 
        shortDescription,
        quantity, 
        image} = this.props.selecedShoes;
    return (      
      <div>
        <div className="row mt-5">
                    <div className="col-5">
                        <h4>{name}</h4>
                        <img src={image} className="img-fluid" alt="phone" />
                    </div>
                    <div className="col-7">
                        <h4 className="mb-5">THÔNG TIN SẢN PHẨM</h4>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className='font-weight-bold'>Alias</td>
                                    <td>{alias}</td>
                                </tr>
                                <tr >
                                    <td className='font-weight-bold'>Price</td>
                                    <td>{price}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Description</td>
                                    <td>{description}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Short Description</td>
                                    <td>{shortDescription}</td>
                                </tr>
                                <tr>
                                    <td className='font-weight-bold'>Quatity</td>
                                    <td>{quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
      </div>
    )
  }
}
