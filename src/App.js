import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>Raiting is {rating}</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "hamburger",
    image:
      "http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=142&simg=%2Fcontent%2Fimage%2F2017%2F07%2F07%2F20170707000904_0.jpg",
  },
  {
    id: 2,
    name: "pizza",
    image: "https://www.journal-d.kr/news/photo/201704/14768_9689_3049.jpg",
    rating: 3,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
