import React, { Component } from 'react'
import './Categories.module.css' // Импорт стилей

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories:[
                {
                    key: 'all',
                    name:'Все',
                },
                {
                    key: 'milky',
                    name:'Шоколад молочный',
                },
                {
                    key: 'assorted',
                    name:'Шоколад ассорти',
                },
                {
                    key: 'dragees',
                    name:'Драже',
                },
                {
                    key: 'candies',
                    name:'Конфеты',
                }
            ],
            activeCategory: 'all' // Добавляем состояние для активной категории
        }
    }

    handleCategoryClick = (key) => {
        this.setState({ activeCategory: key });
        this.props.chooseCategory(key);
    }

    render() {
        return (
            <div className='categoris'>
                {this.state.categories.map(el =>(
                    <div 
                        key={el.key} 
                        onClick={() => this.handleCategoryClick(el.key)}
                        className={this.state.activeCategory === el.key ? 'active' : ''}
                    >
                        {el.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default Categories