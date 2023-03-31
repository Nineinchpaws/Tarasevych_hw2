import React from 'react';

class StringDivs extends React.Component {
    render() {
        return (
        <div>
            {this.props.strings.map((string, index) => (
            <div key={index}>{string}</div>
            ))}
        </div>
        );
    }
}

export default StringDivs;
