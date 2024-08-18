import Cards from "./Cards";
import Header from "./Header";
import data from "./data.js";
import "./App.css"

function App() {

  const cards = data.map((item)=>{
    return <Cards
          key = {item.id}
          img = {item.img}
          title ={item.title}
          subtitle = {item.subtitle}
          old = {item.price.old}
          new = {item.price.new}
    />
  })


  return (
    <div className="App">
      <Header/>
      <section className="card-list">
          {cards}
      </section>
     
    </div>
  );
}

export default App;
