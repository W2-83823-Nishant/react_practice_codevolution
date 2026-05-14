Props mental model 

1.Js Function 

function greet(name){
    return `Hello ${name}`;
}

2.React Component

function Greet(props) {
    return <h1>Hello , {props.name}!</h1>
}