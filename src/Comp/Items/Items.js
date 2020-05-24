import React, { Component } from 'react';
import './Items.css';

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Products",
            act: 0,
            index: '',
            datas: []
        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let rate = this.refs.rate.value;
        let quality = this.refs.quality.value;

        if (this.state.act === 0) {   //new
            let data = {
                name, rate, quality
            }
            datas.push(data);
        } else {                      //update
            let index = this.state.index;
            datas[index].name = name;
            datas[index].rate = rate;
            datas[index].quality = quality;
        }

        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.rate.value = data.rate;
        this.refs.quality.value = data.quality;

        this.setState({
            act: 1,
            index: i
        });

        this.refs.name.focus();
    }

    render() {
        let datas = this.state.datas;
        return (
            <div className="App">
                <h2>{this.state.title}</h2>
                <form ref="myForm" className="myForm">
                    <input type="text" ref="name" placeholder="product name" className="formField" />
                    <input type="text" ref="rate" placeholder="product rate" className="formField" />
                    <input type="text" ref="quality" placeholder="product quality" className="formField" />
                    <button onClick={(e) => this.fSubmit(e)} className="myButton">submit </button>
                </form>
                <pre>
                    {datas.map((data, i) =>
                        <li key={i} className="myList">
                            {i + 1}. {data.name}, {data.rate}, {data.quality}
                            <button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
                            <button onClick={() => this.fEdit(i)} className="myListButton">edit </button>
                        </li>
                    )}
                </pre>
            </div>
        );
    }
}

export default Items;
