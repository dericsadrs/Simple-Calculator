import React, { Component } from 'react';


class Counter  extends Component {


    state = {
        count: this.props.value,
        
        tags: ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    /*constructor() {
        super();
        this.handleIncrement =  this.handleIncrement.bind(this);
    }*/

    handleIncrement = product =>
    {

        console.log(product);
        //console.log("Increment Clicked", this.state .count);
        this.setState({ value: this.state.value+1})
    }

    renderTAgs()
    {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return  (
        <ul>
            {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
        </ul>
        
        )
    }
    render() { 
        console.log('props', this.props);
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({id:"pass"})} className='btn btn-secondary btn-sm'>Increment</button>
                {this.renderTAgs()}

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const{count} = this.state;
        return count === 0? "Zero": count;
    }
}
 
export default Counter;


