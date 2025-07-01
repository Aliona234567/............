import React from 'react';
import Categoris from './Categories';
import Items from './Items';
import Navbar from '../Navbar';
import Footer from './Footer';
import ShowFullItem from './ShowFullItem';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
            id:1,
            title: 'Шоколадное безумие',
            img:'первое.jpg',
            desc:'с орешками',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'assorted',
            price:'Цена:200$'
          },
          {
            id:2,
            title: 'Шоколадная любовь',
            img:'второе.jpg',
            desc:'с любовь',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'milky',
            price:'Цена:200$'
          },
          {
            id:3,
            title: 'Печенье счастья',
            img:'третье.jpg',
            desc:'с печенье',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'milky',
            price:'Цена:200$'
          },
          {
            id:4,
            title: 'Шоколадное любви',
            img:'четвертое.jpg',
            desc:'с ягодами',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'assorted',
            price:'Цена:300$'
          },{
            id:5,
            title: 'Ягодное счастье',
            img:'пятое.png',
            desc:'с ягодами ',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'candies',
            price:'Цена:200$'
          },
          {
            id:6,
            title: 'Белое счастье',
            img:'шестое.png',
            desc:'с орешками',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'milky',
            price:'Цена:200$'
          },
          {
            id:7,
            title: 'Красивая эстетика',
            img:'седьмое.png',
            desc:'с орешками',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'milky',
            price:'Цена:200$'
          },
          {
            id:8,
            title: 'Новогоднее счастье',
            img:'восьмое.png',
            desc:'с фрукты',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'milky',
            price:'Цена:200$'
          },
          {
            id:9,
            title: 'Вкусные кружочки',
            img:'девятое.png',
            desc:'с орешками',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'assorted',
            price:'Цена:200$'
          },{
            id:10,
            title: 'Шоколадное безумие',
            img:'десятое.png',
            desc:'с орешками',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'dragees',
            price:'Цена:200$'
          }
          ,{
            id:11,
            title: 'Ягодное безумие',
            img:'одинатцатое.png',
            desc:'с орешками',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'candies',
            price:'Цена:200$'
          }
          ,{
            id:12,
            title: 'Дерево любви',
            img:'двинадцотое.png',
            desc:'с орешками',
            opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
            opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
            category:'dragees',
            price:'Цена:200$'
          }
      ],
      showFullItem: false,
      fullItem: {},
      showSuccessModal: false
    };
    
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
  }

  componentDidMount() {
    this.setState({ currentItems: this.state.items });
  }

  addToOrder(item) {
    if (!this.state.orders.find(el => el.id === item.id)) {
      this.setState(prevState => ({ 
        orders: [...prevState.orders, item] 
      }));
    }
  }

  deleteOrder(id) {
    this.setState({ 
      orders: this.state.orders.filter(el => el.id !== id) 
    });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    });
  }

  onShowItem(item) {
    this.setState({ 
      fullItem: item,
      showFullItem: !this.state.showFullItem 
    });
  }

  handleCheckout() {
    if (this.state.orders.length === 0) return;
    
    
    this.setState({ 
      orders: [],
      showSuccessModal: true 
    });
  }

  closeSuccessModal() {
    this.setState({ showSuccessModal: false });
  }

  render() {
    return (
      <div className='home-wrapper'>
        <Navbar 
          orders={this.state.orders} 
          onDelete={this.deleteOrder}
          onCheckout={this.handleCheckout}
        />
        
        <div className='uuio'>
          <h1 className='rty'>Продукты</h1>
          <Categoris chooseCategory={this.chooseCategory} />
          <Items 
            onShowItem={this.onShowItem} 
            items={this.state.currentItems} 
            onAdd={this.addToOrder} 
          />
          
          {this.state.showFullItem && (
            <ShowFullItem 
              onAdd={this.addToOrder} 
              onShowItem={this.onShowItem} 
              item={this.state.fullItem} 
            />
          )}
        </div>
        
        {/* Модальное окно успешного заказа */}
        {this.state.showSuccessModal && (
          <div className="success-modal-overlay">
            <div className="success-modal">
              <h2>Заказ успешно оформлен!</h2>
              <p>Спасибо за покупку. Мы вас любим.</p>
              <button 
                className="modal-close-btn"
                onClick={this.closeSuccessModal}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    );
  }
}

export default Products;