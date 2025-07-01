import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div className='qwe'>
          <img 
            src={'./img/' + this.props.item.img} 
            onClick={() => this.props.onShowItem(this.props.item)} 
            alt={this.props.item.title}
          />
        </div>  
        <div className='ewq'>
          <h2 className='textlr'>{this.props.item.title}</h2>
          <p className='textlr2'>{this.props.item.desc}</p>
          <h3>Состав</h3>
          <p className='cvb'>{this.props.item.opis}</p>
          <h3>Условия хранения</h3>
          <p className='cvb'>{this.props.item.opic}</p>
          <b>{this.props.item.price}</b>
          <p className='order-info'>Для заказа необходимо заполнить форму и отправить ее до 20.00</p>
          <button 
            className='add-to-cart' 
            onClick={() => this.props.onAdd(this.props.item)}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    )
  }
}

export default ShowFullItem