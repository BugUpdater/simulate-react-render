export function createElement(type, props, ...children) {
  let obj = {};
  obj.type = type;
  obj.props = props || {};
  if (children.length) {
    obj.props.children = children.length === 1 ? children[0] : children;
  }
  return obj;
}

export function render(jsxObj, container, callback) {
  let {
    type,
    props
  } = jsxObj;
  let element = document.createElement(type);
  for (let key in props) {
    if (!props.hasOwnProperty(key)) break;
    // className
    if (key === 'className') {
      element.className = props['className'];
      continue;
    }
    // style
    if (key === 'style') {
      let style = props['style'];
      for (let attr in style) {
        if (!style.hasOwnProperty(attr)) break;
        element['style'][attr] = style[attr];
      }
      continue;
    }
    // children
    if (key === 'children') {
      let children = props['children'];
      children = Array.isArray(children) ? children : [children];
      children.forEach(item => {
        if (typeof item === 'string') {
          element.appendChild(document.createTextNode(item));
          return;
        }
        // 递归
        render(item, element);
      });
      continue;
    }
    element.setAttribute(key, props[key]);
  }
  container.appendChild(element);
  callback && callback();
}