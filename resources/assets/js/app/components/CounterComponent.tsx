import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/counter.action';
import { State } from "../interfaces/State";

class CounterBaseComponent extends Component<{
    counter: State['counter'],
    increase: typeof increase,
    decrease: typeof decrease,
}, {}> {

    render(): JSX.Element | null {
        return (
            <div>
                <span>{this.props.counter.count}</span>
                <button onClick={this.props.increase}>Increase</button>
                <button onClick={this.props.decrease}>Decrease</button>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({ counter: state.counter })

export const CounterComponent = connect( mapStateToProps, { increase, decrease } )(CounterBaseComponent);