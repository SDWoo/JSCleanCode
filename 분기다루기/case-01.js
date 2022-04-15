// JSX
ReactDom.render(
    <div id="msg">Hello World!</div>,
    mountNode
)

// JS
ReactDom.render(React.createElement('div',{id: 'msg'}, 'Hello World!'), mountNode);
