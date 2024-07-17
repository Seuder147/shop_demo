import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [] ,
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Карамельний пончик',
          img: 'caramel_donut.jpg',
          desc: 'Ніжний пончик, залитий ароматною карамеллю.',
          category: 'sweet',
          price: '30.00'
        },
        {
          id: 2,
          title: 'Шоколадний пончик',
          img: 'chocolate_donut.jfif',
          desc: 'Солодкий пончик з густою шоколадною начинкою.',
          category: 'sweet',
          price: '25.00'
        },
        {
          id: 3,
          title: 'Ванільний пончик',
          img: 'vanilla_donut.png',
          desc: 'Пухкий пончик з ванільною начинкою і глазурю.',
          category: 'vanilla',
          price: '28.00'
        },
        {
          id: 4,
          title: 'Фруктовий пончик',
          img: 'fruit_donut.jpg',
          desc: 'Свіжі фрукти на вершковому пончику з фруктовими начинками.',
          category: 'fruits',
          price: '32.00'
        },
        {
          id: 5,
          title: 'Мигдальний пончик',
          img: 'almond_donut.jpg',
          desc: 'Ароматний пончик зі смаком мигдалю, прикритий крихтою мигдалю.',
          category: 'nut',
          price: '29.00'
        },
        {
          id: 6,
          title: 'Фісташковий пончик',
          img: 'pistachio_donut.jpg',
          desc: 'Вишуканий пончик зі смаком фісташки та ніжною фісташковою глазурю.',
          category: 'nut',
          price: '35.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder} />}
        <Footer />
      </div>
    );
  }

onShowItem (item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
if(category === 'all'){
  this.setState({currentItems: this.state.items})
  return
}

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !==id)})
}

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id ===item.id)
        isInArray = true
  })

  if(!isInArray)
    this.setState({orders: [...this.state.orders, item]}, )
  }
}

export default App;

