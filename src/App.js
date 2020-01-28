import React,{Component} from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import {getAllCategories,getCommands} from './DataController';
class App extends Component {
 
  state = {
    sideDrawerOpen: false,
    currentCategory: 'NPM'
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  setCategory= (cat)=>{
    this.setState({currentCategory:cat,sideDrawerOpen: false});
    console.log(cat);
  }

  renderCardComponents=(category)=>{
    var comp = [];
    var commands = getCommands(category);
    Object.keys(commands).forEach(function(key){
      comp.push(<Card title={commands[key].title} content={commands[key].content}></Card>);
    });
    return comp;
    console.log(comp);
  }

  render(){
  
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div  className='base-component'>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} categories={getAllCategories()} setCategory={this.setCategory} />
        {backdrop}
        <main style={{marginTop: '100px'}}>
          {this.renderCardComponents(this.state.currentCategory)}
        </main>
       </div>
    );
  }
}
export default App;