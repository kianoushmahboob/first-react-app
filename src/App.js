import React from "react";
import Product from "./components/Product/Product";



class App extends React.Component {
  state = {
    products: [
      { title: "Bitcoin", price: 38000 },
      { title: "Etherium", price: 2500 },
      { title: "Litecoin", price: 250 },
    ],
  };
  addProduct = (newTitle = "Mana") => {
    console.log(this.state);
    this.setState({
        products: [
          { title: "Bitcoin", price: 39000 },
          { title: "Etherium", price: 3000 },
          { title: newTitle, price: 1 },
        ],
    });
    console.log("2", this.state);
  };
  render() {
    return (
      <div id="main" className="main">
        <Product name={this.state.products[0].title} price={this.state.products[0].price} />
        <Product name={this.state.products[1].title} price={this.state.products[1].price} />
        <Product click={() => this.addProduct("Tron")} name={this.state.products[2].title} price={this.state.products[2].price} />
        <button onClick={() => this.addProduct("Mana")}> change price</button>
      </div>
    );
  }
}

export default App;
