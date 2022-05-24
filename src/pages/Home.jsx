import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components';

import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';
import {addPizzaToCart} from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];// массив с категориями
const sortIems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'},
];// объект сортировки

function Home() {

    const dispatch = useDispatch();// пока что не смотрим
    const items = useSelector(({pizzas}) => pizzas.items);// пока что не смотрим
    const cartItems = useSelector(({cart}) => cart.items);// пока что не смотрим
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);// пока что не смотрим
    const {category, sortBy} = useSelector(({filters}) => filters);// пока что не смотрим
    const [card, setToCard] = React.useState([]);
    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
        //  console.log('Fetch Data')
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        console.log(`выбираем категорию номер ${index}`)
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    };
    console.log(card)
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={category}
                    onSelectCategory={onSelectCategory}
                    categoryNames={categoryNames}
                />

                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortIems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {/*               {isLoaded === true
                    ? items.map((pizza) => (
                        <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCart}
                            key={pizza.id}
                            addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}// не смотрите пока
                            {...pizza}
                        />
                    ))
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoadingBlock key={index}/>)}*/}
                {items.map((pizza, index) => {
                    const onAddToCard = () => {
                        const newCard = [...card, pizza];
                        setToCard(newCard)
                    }
                    return <div>
                        {pizza.name}
                        <button onClick={onAddToCard}>on add</button>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Home;
