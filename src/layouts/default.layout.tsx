import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container default-theme">
      <header className="container__header header">
        <div className="header__left-bar"></div>
        <h1 className="header__title txt-xxl txt-bold txt-uppercase">{'Financial Portfolio'}</h1>
      </header>
      <main className="container__main main">
        <Outlet />
      </main>
    </div>
  );
};
