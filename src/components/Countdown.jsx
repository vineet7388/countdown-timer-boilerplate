import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  
    constructor(){
        super();
        this.state={
            count:0,
        }
    };

    onSetCountdownTime=(e)=>{
        //console.log("here", e);
        this.setState({
            count:e,
        });
        //console.log(this.state.count);
    }

    resetCount = () => {
		this.setState({ count: 0 });
	};

    render() {
        const { count } = this.state;
        return (
            <div>
                {count !== 0 && (
					<Clock timeInSeconds={count} resetCount={this.resetCount} />
				)}
                <CountdownForm onSetCountdownTime={this.onSetCountdownTime}/>
            </div>
        );
    }
}

export default Countdown;