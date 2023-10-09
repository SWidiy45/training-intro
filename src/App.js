const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {key: 'name'}, props.name),
        React.createElement('h1', {key: 'animal'}, props.animal),
        React.createElement('h1', {key: 'color'}, props.color),
    ])
}
const App =()=>{
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {key: '1', name : 'Luna', animal: 'Cat', breed: 'British Shorthair', color: 'white'})
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))