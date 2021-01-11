import React from 'react'
// const About = () => {
//     const a = 'hello world!'
//     return (
//         <h1> Hello about page -message {a} </h1>
//     )
// }

// const About = () => {
//     const a = 'hello world!'
//     return React.createElement('h1',null,'I am generating this with createElement')
// }

class About extends React.Component {

    render() {
        return (
            <h1>hello i am class component</h1>
        );
    }
}

export default About