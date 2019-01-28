import React from 'react';

import SearchInput from '../components/SearchInput';
import Gifs from '../components/Gifs';
import SeeMore from '../components/SeeMore';


class Home extends React.Component {
    constructor(props){
        super(props);

        var giphyUrlStart = 'http://api.giphy.com/v1/gifs/search?api_key=';
        var giphyKey = 'ql7VvIHUsxHV858NWtK5NpbUAFwvYzl6';
        var giphySearch = 'q=';
        var giphyLimit = 'limit=';
        var giphyLimitNum = 4;

        this.state = {
            apiGifs,
            giphyUrl: '',
            gifArray: [],
            giphyLimitNum,
            giphyMainUrl: `${giphyUrlStart}${giphyKey}&${giphyLimit}`,
            giphySearchTerm: '',
            buttonVisible: false
        };
    }

    updateSecondState = gifArray => {
        setState({ gifArray: gifArray })
    }

    getValueFromInputFunction = valueFromInput => {
        this.setState({ giphyUrl: '', giphyUrl: this.state.giphyMainUrl+this.state.giphyLimitNum+'&q='+valueFromInput, giphySearchTerm: valueFromInput }, () => {
            console.log(this.state.giphyUrl);
            getJSON(this.state.giphyUrl,
                function (err, data) {
                    if (err !== null) {
                        console.log('err');
                    } else {
                        apiGifs = data.data;
                    }
                    this.setState({ gifArray: apiGifs });
                    this.buttonVisibleFunction();
                }.bind(this));
        });
    }

    seeMoreFunction = () => {
        console.log('aaa');
        var currLimit = this.state.giphyLimitNum + 4;
        this.setState({ giphyLimitNum: currLimit }, () => {
            this.getValueFromInputFunction(this.state.giphySearchTerm);
        });
    }

    buttonVisibleFunction = () => {
        console.log('inside button function');
        if (this.state.giphySearchTerm == ''){
            this.setState({ buttonVisible: false })
        } else {
            this.setState({ buttonVisible: true })
        }
    }

    gifSourceCopyFunction = gifURL => {
        var aux = document.createElement("input");
        aux.setAttribute("value", gifURL.replace('media0', 'media').replace('media1', 'media').replace('media2', 'media').replace('media3', 'media').replace('media4', 'media'));
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);

    }

    render(){
        return (
            <div>
                <h2>Search some gifs, dog!</h2>
                <SearchInput getValueFromInput={ this.getValueFromInputFunction }/>
                <ul className="gif-list">
                    {this.state.gifArray.map(gif => <Gifs key={gif.id} gifSource={gif.images.fixed_height.url} gifSourceCopy={e => this.gifSourceCopyFunction(gif.images.downsized_large.url) }/>) }
                </ul>
                <SeeMore seeMoreFunction={ e => this.seeMoreFunction() } buttonVisible={ this.state.buttonVisible } />
                
            </div>
        )
    }
    
};

export default Home;