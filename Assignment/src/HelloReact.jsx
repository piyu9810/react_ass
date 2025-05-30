import React from 'react'

function HelloReact() {
    const data = 'JSX stands for JavaScript XML';
    return (
        <>
        {/* Task 1 */}
        <div>Hello, React!</div>

        {/* Task 2 */}
        <h1>"Welcome to JSX"</h1>
        <p>{data}</p>
        <Greeting name='React'/>
        <WelcomeMessage/>
        <UserCard name='Priya' age={25} location='Navsari'/>
        <Counter/>
        </>
    );
}

const Greeting = ({ name }) => (
    <>
        {/* Functional & class components Task 1 */}
        <h2>"Hello {name}!"</h2>
    </>
);

// Task 2 - Functional & Class Components
class WelcomeMessage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to React!</h1>
            </div>
        );
    }
}

// Props and State Task 1
const UserCard = ({ name, age, location }) => (
    <>
        <div className='card'>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <p>Location: {location}</p>
        </div>
    </>
);

// Task 2 - Counter Component
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default HelloReact;
