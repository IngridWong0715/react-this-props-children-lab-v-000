import React from 'react';

 class ThemedDecorations extends React.Component {

  render(){
    const themedChildren = React.Children.map(this.props.children, child =>{
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    return (<div className="themedDecor">{themedChildren}</div>);
  }
}

export default ThemedDecorations;
