import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.verh}>
        <div className={styles.qwerty}></div>
        <h1 className={`${styles['about-title']} ${styles.fs26} ${styles.ls1}`}>Никита Петров</h1>
        <h2 className={`${styles['about-title']} ${styles.fs26} ${styles.ls1}`}>Шеф шоколатье</h2>
        <h3 className={styles.fs17}>Шеф шоколатье — это настоящий волшебник, который превращает обычные шоколадные плитки в произведения искусства. Он обладает уникальными знаниями и навыками, позволяющими создавать настоящие шедевры из шоколада.</h3>
        <h3 className={styles.fs17}>Кроме того, шеф шоколатье уделяет большое внимание качеству продукции. Он тщательно контролирует каждый этап производства, чтобы гарантировать соответствие шоколадных изделий самым высоким стандартам качества.</h3>
      </div>
      <div className={styles.niz}>
        <div className={styles['create-line']}></div>
        <h1 className={styles.abn}>О нас</h1>
        <div className={styles['create-line']}></div>
        <div className={styles.text}>
          <h3>Sugar-это компания, специализирующаяся на производстве уникальных шоколадных сладостей. Основанная группой энтузиастов, компания стремится создавать высококачественные продукты, сочетающие в себе традиции и инновации.</h3>
          <h3>Sugar был создан после того, как группа друзей и родственников решила объединить свои усилия для создания собственного бизнеса. Они были вдохновлены любовью к шоколаду и желанием предложить потребителям нечто особенное.</h3>
          <h3>Основные принципы работы компании:</h3>
          <ul className={styles.aboutList}>
            <li><h4>использование только высококачественных ингредиентов;</h4></li>
            <li><h4>внимание к деталям и ручной труд;</h4></li>
            <li><h4>постоянное развитие и инновации;</h4></li>
            <li><h4>забота об окружающей среде и использование экологически чистых материалов.</h4></li>
          </ul>
          <h3>Sugar предлагает широкий ассортимент шоколадных изделий, включая шоколад, конфеты, пралине, трюфели, шоколадные пасты и многое другое. Все продукты изготавливаются с использованием натуральных ингредиентов и имеют неповторимый вкус.</h3>
        </div>
      </div>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [],
      currentItems: [],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })    
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    if (!this.state.orders.find(el => el.id === item.id)) {
      this.setState(prevState => ({ orders: [...prevState.orders, item] })); 
    }
  }

  render() {
    return (
      <div className='home-wrapper'>
        <Navbar orders={this.state.orders} onDelete={this.deleteOrder} />
        <About />
        <Footer />
      </div>
    );
  }
}
  
export default App;