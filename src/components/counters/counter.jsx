import React, { Component } from "react";

class Counter extends Component {
    render() {
        const { counter, onIncrement, onDecrement, onDelete } = this.props;
        return (
            <div className="row p-3 border bg-light w-25">
                <div className="col">
                    <span class="text-dark">{counter.value}</span>
                </div>
                <div class="col">
                    <button
                        onClick={() => onIncrement(counter)}
                        type="button" class="btn btn-light">
                        +
                    </button>
                </div>
                <div class="col">
                    <button
                        onClick={() => onDecrement(counter)}
                        disabled={counter.value === 0 ? true : false}
                        type="button" class="btn btn-dark">
                        -
                    </button>
                </div>
                <div class="col">
                    <button
                        onClick={() => onDelete(counter.id)}
                        type="button" class="btn btn-danger">
                        Deletar
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
