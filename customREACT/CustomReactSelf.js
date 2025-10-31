

const RootElement=document.querySelector('#root');
const reactElement={
    attribute : 'p',
    props: {
        style: "color:red",
        draggable: "true"
},
children: "trying to create my own react by myself",

}
function renderElement(reactElement,RootElement){
    const HtmlElement=document.createElement(reactElement.attribute);
    for(let attr in reactElement.props){
    HtmlElement.setAttribute(attr,reactElement.props[attr]);
    }
    HtmlElement.innerHTML=reactElement.children;
    RootElement.appendChild(HtmlElement);
}
renderElement(reactElement,RootElement);
