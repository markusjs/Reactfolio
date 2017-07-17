import React, { Component } from 'react';

class SrcElement extends Component {
    search(e) {
        let source = this.props.source;
        let url = "";
        let txt = e.target.value;
        let query = txt.replace(" ", "+");
        console.log(query);
        if(source === "wiki")
            url = "http://wikipedia.com/w/index.php?search=";
        if(source === "google")
            url = "http://google.com#q=";
        if(source === "imdb")
            url = "http://imdb.com/find?";
        window.open(url + query, '_blank');
    }
    checkKey(e) {
        console.log(e.key);
        if(e.key === 'Enter') {
            this.search(e);
        }
    }
    render() {
        return (
            <div className="SrcElement">
                <div className={`${this.props.source}search columns`} tabIndex={-1}>
                    <label htmlFor={this.props.source}>
                        <img src={this.props.img} alt={`${this.props.source}-icon`} className="icons" tabIndex={-1} />
                    </label>
                    <input type="text" onKeyPress={this.checkKey.bind(this)} id={this.props.source} tabIndex={1} className="inputtxt" />
                    <button onClick={this.search.bind(this)} className={`src-btn ${this.props.source}btn`} value=""><img src={this.props.srcbtn} alt="search button" tabIndex={-1} /></button>
                </div>
            </div>
        );
    }
}

export default SrcElement;