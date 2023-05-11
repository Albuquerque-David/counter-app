import React, { Component } from "react";
import Counter from "./counter"

class CountersContainer extends Component {
    render() {
        const { counters, onReset, onDelete, onIncrement, onDecrement, onCreate } = this.props;
        return (
            <div>
                <div class="row w-25 p-3">
                    <div class="col">
                        <button
                            onClick={() => onReset()}
                            
                            type="button" class="btn btn-danger">
                            Resetar botões
                        </button>
                    </div>
                    <div class="col">
                        <button
                            onClick={() => onCreate()}
                            type="button" class="btn btn-success">
                            Criar botão
                        </button>
                    </div>
                </div>
                <div class="row">
                    {counters.map(counter => (
                        <div className="row">
                            <Counter
                                key={counter.id}
                                onDelete={onDelete}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                onCreate={onCreate}
                                counter={counter}
                            />
                        </div>

                    ))}
                </div>
            </div>
           
        );
    }
}

export default CountersContainer;
