import React from 'react';
import "./app.css";
import Header from '../header/header';
import List from '../list/list';
import Footer from '../footer/footer';
import Filter from "../filter/filter";
import LiveSearch from "../live-search/live-search";

const data = [
  {title: "drink coffee", important: false, done: false, id: 1},
  {title: "go to bed", important: false, done: false, id: 2},
  {title: "eat pizza", important: false, done: false, id: 3},
  {title: "go for a walk", important: false, done: false, id: 4},
];

class App extends React.Component {

  state = {
    list: data,
    filter: false,
    keyWords: false,
  };

  add = (value) => {
    //Чтобы исправить баг выделения всех новых айтемов как импортант или сделаные - добавляю id.
    const {list} = this.state;
    let id = 0;
    if(list.length > 0) id = list[list.length-1].id + 1;
    
    this.setState({
      list: [
        ...this.state.list,
        {title:value, important: false, done: false, id: id}
      ]
    })
  };

  search = () => {}

  changeStatus = (id, name) => {
    const { list=[] } = this.state;
    list.some((el) => {
      if(el.id === id) el[name] = !el[name];
    });
    this.setState({list})
  };

  remove = (id) => {
    const {list} = this.state;
    const index = list.findIndex(el => el.id === id);
    const newArr = [
        ...list.slice(0, index),
        ...list.slice(index+1, list.length)
    ];
    this.setState({list: newArr})
  };

  filterFunc = (type) => {
    let filter = false;
    if(type !== "all") filter = type;
    this.setState({filter})
  };

  useFilter = (list, filter) => {
    if(!filter) return list;
    const newArr = list.filter(el => {
      return el[filter]
    });
    return newArr
  };

  setKeyWords = (keyWords) => {
    this.setState({keyWords});
  }

  useSearch = (list, keyWords) => {
    if(!keyWords) return list;
    
    const newArr = list.filter(el => {
      return el.title.indexOf(keyWords) > -1
    });
    return newArr
  }

  render(){

    const { list, filter, keyWords } = this.state;
    const newCount = list.length;
    let newList = this.useFilter(list, filter);
    //нужно ли создавать новый массив для list отфильтрованого по поиску?
    newList = this.useSearch(newList, keyWords);

    return(
      <div className={`wrap`}>
        <div className={"main-container"}>
          <Header count = {newCount}/>
          <LiveSearch setKeyWords={this.setKeyWords}/>
          <Filter 
            filterFunc = {this.filterFunc} 
            filter={filter}/>
          <List
            data={newList}
            changeStatus={this.changeStatus}
            remove = {this.remove}/>
          <Footer add={this.add}/>
        </div>
      </div>
    );
  }
}

export default App


