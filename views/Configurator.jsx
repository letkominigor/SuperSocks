const React = require('react');
const Layout = require('./Layout');

module.exports = function Configurator({ user }) {
  return (
    <Layout user={user}>
      <form method="POST" action="/creator" style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="color">Цвет:</label>
        <select id="color" className="color" name="color">
          <option>красный</option>
          <option>синий</option>
          <option>зелёный</option>
          <option>оранжевый</option>
          <option>жёлтый</option>
          <option>чёрный</option>
          <option>голубой</option>
        </select>
        <label htmlFor="color">Узор:</label>
        <select id="pattern" className="pattern" name="pattern">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        <label htmlFor="picture">Картинка:</label>
        <select id="picture" className="picture" name="picture">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        <div className="js-sock">
          Hi
        </div>
        <button type="submit" className="js-basket">Добавить в корзину</button>
        <button type="submit" className="js-favourite">Добавить в избранное</button>
        <button type="submit" className="js-clear-form">Сбросить форму</button>
      </form>
    </Layout>
  );
};
