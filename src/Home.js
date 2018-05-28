import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';

class Home extends Component {
    constructor(props) {
        super(props);
        this.searchGalaxy = '';
        this.state = {
            result : [],
            planets : [],
            query : ''
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/planets')
        .then(results=>{
            return results.json()
        })
        .then(data => {
            this.setState({result : data.results});
            // console.log(this.state.result);
            
            for(var i=0; i<this.state.result.length; i++) {
                if(this.state.result[i].population !== 'unknown') {
                this.state.planets.push({id:this.state.result[i].population, label: this.state.result[i].name});
                }
            }
        })
    }

    render() {
        return (
        <div className="Home">
            <h1>Welcome {this.props.userName}</h1>
            <div>
                <label htmlFor = "search"><h3>Search the galaxy for planets...</h3></label>
            </div>
            <div>
                <ReactAutocomplete
                    items={this.state.planets}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.label}
                    </div>
                    }
                    value={this.state.query}
                    onChange={e => this.setState({ query: e.target.value })}
                    onSelect={value => this.setState({ value })}
                />
            </div>
            <div>
                <button type = 'submit' onClick = {this.props.handleLogout}>Throw me out</button>
            </div>
        </div>
        );
    }
}

export default Home;
