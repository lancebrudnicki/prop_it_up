import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
    const {firstname,lastname,age,haircolor} = this.props;
        return (
<div>
        <h1>{lastname}, {firstname}</h1>
        <p>age: {age}</p>
        <p>haircolor: {haircolor}</p>
</div>
);
    }
}
    
export default SomeClassComponent;
