import { Component } from 'react';
import check from './bags.png'
export class ShopList extends Component {
    state = {
        userInput: "",
        shopingList: []
    }
    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    addItem(input) {
        if (input === '') {
            alert("Please enter an item")
        }
        else {
        let listArray = this.state.shopingList;
        listArray.push(input);
        this.setState({shopingList: listArray, userInput: ''})
        }
    }
    deleteItem() {
        let listArray = this.state.shopingList;
        listArray = [];
        this.setState({shopingList: listArray})
    }
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed'); 
    }
    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text" 
                placeholder='What to buy'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className='container'>
                <button className='add' onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.shopingList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img className='picture' src={check} alt="basket" width="40px"/>
                    {item}
                </li>
                ))}
            </ul>
            <div className='container'>
            <button className='delete' onClick={() => this.deleteItem()}>Delete</button>
            </div>
            </form>
            </div>
        )
    }
}