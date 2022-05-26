const React = require('react');
const Layout = require('./Layout');

module.exports = function Configurator({ user }) {
  return (
    <Layout user={user}>
      <form
        method="POST"
        action="/creator"
        style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <label htmlFor="color">Цвет:</label>
        <select id="color" className="color" name="color">
          <option>red</option>
          <option>blue</option>
          <option>green</option>
          <option>orange</option>
          <option>yellow</option>
          <option>black</option>
          <option>violet</option>
          <option>aquamarine</option>
        </select>
        <label htmlFor="pattern">Узор:</label>
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
        <div className="js-sock sock" style={{ marginTop: 50, marginBottom: 350 }}>
          <div className="js-sock-picture sock-picture" />
          <div className="sock-pattern" />
        </div>
        <button type="submit" className="js-basket">Добавить в корзину</button>
        <button type="submit" className="js-favourite">Добавить в избранное</button>
        <button type="submit" className="js-clear-form">Сбросить форму</button>
      </form>
    </Layout>
  );
};
