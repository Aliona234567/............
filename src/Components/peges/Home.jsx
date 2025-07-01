import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Items from './Items';
import Categoris from './Categories';
import ShowFullItem from './ShowFullItem';
import Navbar from '../Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Home extends React.Component {
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
      sliderSettings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      },
      topProductsSettings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      heroImages: [
        { id: 1, img: 'hero1.jpg', title: 'Эксклюзивные шоколадные коллекции', subtitle: 'Только натуральные ингредиенты' },
        { id: 2, img: 'hero2.jpg', title: 'Ручная работа', subtitle: 'Каждый продукт создается с любовью' },
        { id: 3, img: 'первое.jpg', title: 'Идеальные подарки', subtitle: 'Удивите своих близких' }
      ],
      topProducts: [1, 4, 7, 10] 
    };
    this.state.currentItems = this.state.items;
  }


  renderTopProducts() {
    const { items, topProducts } = this.state;
    const topItems = items.filter(item => topProducts.includes(item.id));
    
    return topItems.map(item => (
      <div key={item.id} className="top-product-slide">
        <Link to={`/products#${item.id}`}>
          <img src={`./img/${item.img}`} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </Link>
      </div>
    ));
  }

  renderHeroSlider() {
    return this.state.heroImages.map(slide => (
      <div key={slide.id} className="hero-slide">
        <img src={`./img/${slide.img}`} alt={slide.title} />
        <div className="hero-content">
          <h2>{slide.title}</h2>
          <p>{slide.subtitle}</p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="home-wrapper">
        {/* Навигационное меню */}
        <Navbar orders={this.state.orders} onDelete={this.deleteOrder} />
        
        {/* Слайдер с изображениями */}
        <section className="hero-slider">
          <Slider {...this.state.sliderSettings}>
            {this.renderHeroSlider()}
          </Slider>
        </section>

        {/* Слайдер топ-шоколада */}
        <section className="top-products">
          <h2>Наши бестселлеры</h2>
          <Slider {...this.state.topProductsSettings}>
            {this.renderTopProducts()}
          </Slider>
        </section>
        
        <Footer />
      </div>
    );
  }
}

// Обертка Redux (остается без изменений)
const HomeWithRedux = (props) => {
  const isAuth = useSelector(state => state.profile.isAuth);
  const dispatch = useDispatch();
  
  return (
    <Home 
      {...props} 
      isAuth={isAuth} 
      dispatch={dispatch} 
    />
  );
};

export default HomeWithRedux;