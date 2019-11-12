import React from 'react';
import "./app.css";
import Header from '../header/header';
import List from '../list/list';
import Footer from '../footer/footer';
import Filter from "../filter/filter";
import LiveSearch from "../live-search/live-search";
import CurrentDay from "../current-day/current-day";

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

  changeStatus = (id, name) => {
    const { list=[] } = this.state;
    list.some((el) => {
      if(el.id === id) el[name] = !el[name];
    });
    this.setState({list})
  };

  remove = (i) => {
    const {list} = this.state;
    
    let removedItem;
    list.some((e, ind) => {if (e.id === i) removedItem = ind});
    
    this.setState({list:[
      ...list.slice(0,removedItem),
      ...list.slice(removedItem+1,list.length)
    ]})
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

  sortList = (list) => {
    let newList = [...list];
    return newList
        .sort((a, b) => (a.important === b.important)? 0 : a.important? -1 : 1)
        .sort((a, b) => (a.done === b.done)? 0 : a.done? 1 : -1);
  }

  render(){

    const { list, filter, keyWords } = this.state;
    const newCount = list.length;

    let newList = this.sortList(list);
    newList = this.useFilter(newList, filter);
    newList = this.useSearch(newList, keyWords);
    
    return(
      <div className={`wrap`}>
        <div className={"main-container"}>
          <Header count = {newCount}/>
          <CurrentDay />
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