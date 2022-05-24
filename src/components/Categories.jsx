import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({category, categoryNames, onSelectCategory}) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const arr = ['artem', 'andy']
    return (
        <div className="categories">
            {arr.map((item, index) => {// рендерим массив arr
                return <button
                    className={index === currentUser ? 'active' : ''}//сравниваем сейчас в currentUser находится наш index или нет
                    onClick={() => {
                        setCurrentUser(index)//устанавливаем юзера по клику
                    }}
                >{item} индекс равен={index}</button>
            })}
            <ul>
                <li
                    className={category === null ? 'active' : ''}
                    onClick={() => onSelectCategory(null)}>
                    Все
                </li>
                {categoryNames &&
                categoryNames.map((name, index) => (
                    <li
                        className={category === index ? 'active' : 'disable'}/*проверяем соответсвует ли выбранный элемент индексу*/
                        onClick={() => onSelectCategory(index)}/*ставим текущий индекс выбранного элемента*/
                        key={`${name}_${index}`}>{/*ключ пока не смотрите*/}
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

Categories.propTypes = {
    // category: PropTypes.oneOf([PropTypes.number, null]),
    categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {category: null, categoryNames: []};

export default Categories;
