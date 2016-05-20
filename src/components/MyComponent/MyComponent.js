import React, { Component, PropTypes } from 'react';
import style from './MyComponent.scss';

class MyComponent extends Component {
    render() {
        const { message } = this.props;

        return (
            <div className={style.MyComponent}>
                <h2 className={style.Title}>MyComponent Title</h2>
                <p>{ message.text }</p>
            </div>
        );
    }
}

MyComponent.propTypes = {
    message: PropTypes.object.isRequired,
};

MyComponent.defaultProps = {
    message: 'foo',
};

export default MyComponent;
