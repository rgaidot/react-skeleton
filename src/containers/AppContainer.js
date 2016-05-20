import React, { Component } from 'react';
import style from './AppContainer.scss';
import { connect } from 'react-redux';
import MyComponent from '../components/MyComponent/MyComponent';

class AppContainer extends Component {
    render() {
        return (
            <div className={style.AppContainer}>
                <MyComponent {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { message } = state;

    return { message };
}

export default connect(mapStateToProps)(AppContainer);
