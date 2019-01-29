import React from 'react';
import ReactDOM from 'react-dom';


const modalRoot = document.getElementById('react_js_modal');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.el = document.createElement('div');
    }

    componentDidMount() {
      modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }

    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    }

};

export default Modal;