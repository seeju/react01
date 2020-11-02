import { Component } from "react";
import "./App.css";
import { Article } from "./components/Article";
import { MainMenu } from "./components/MainMenu";
import { NavMenu } from "./components/NavMenu";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";

export class App extends Component {
  state = {
    Article: [
      {img:'https://cdn.pixabay.com/photo/2017/03/28/01/15/plane-2180720_960_720.jpg', text: 'Lorem ipsum dui tincidunt blandit pellentesque nec sit velit elit, morbi ac maecenas risus ante magna habitant litora, dapibus cursus non bibendum eleifend at facilisis eu. risus ante sem amet himenaeos consectetur nibh elementum commodo litora nunc est cursus, porta fermentum vestibulum quisque dapibus quisque pretium quis neque lobortis torquent. commodo aenean dapibus bibendum euismod molestie, augue fusce velit torquent. ' },
      {img:'https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg', text: 'Lorem ipsum dui tincidunt blandit pellentesque nec sit velit elit, morbi ac maecenas risus ante magna habitant litora, dapibus cursus non bibendum eleifend at facilisis eu. risus ante sem amet himenaeos consectetur nibh elementum commodo litora nunc est cursus, porta fermentum vestibulum quisque dapibus quisque pretium quis neque lobortis torquent. commodo aenean dapibus bibendum euismod molestie, augue fusce velit torquent. ' },
      {img:'https://s2.glbimg.com/h3Duok3KWVA8yaIOzZZIESkNLC4DKPsVVGWWhNMHhpNIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/02/imagem_para_sexta_51.jpg', text: 'Lorem ipsum dui tincidunt blandit pellentesque nec sit velit elit, morbi ac maecenas risus ante magna habitant litora, dapibus cursus non bibendum eleifend at facilisis eu. risus ante sem amet himenaeos consectetur nibh elementum commodo litora nunc est cursus, porta fermentum vestibulum quisque dapibus quisque pretium quis neque lobortis torquent. commodo aenean dapibus bibendum euismod molestie, augue fusce velit torquent. ' },
      {img:'https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG', text: 'Lorem ipsum dui tincidunt blandit pellentesque nec sit velit elit, morbi ac maecenas risus ante magna habitant litora, dapibus cursus non bibendum eleifend at facilisis eu. risus ante sem amet himenaeos consectetur nibh elementum commodo litora nunc est cursus, porta fermentum vestibulum quisque dapibus quisque pretium quis neque lobortis torquent. commodo aenean dapibus bibendum euismod molestie, augue fusce velit torquent. ' },
    
    ],
  }

  render() {
    return (
      <>
        <header className="main-header">
          <div className="main-logo">
            <h1>Logo</h1>
          </div>

          <div className="header-info">
            <MainMenu />
            <SearchBar />
          </div>
        </header>

        <main>
          <div className="nav-menu">
          <NavMenu  />
          </div>

          <div className="article">
          <Article items={this.state.Article}/>
          </div>

          <div className="side-bar">
          <SideBar />
          </div>
        </main>

      </>
    );
  }
}
