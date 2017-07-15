/// <reference path='./ActionMap.d.ts'/>

import ActionTypes from './ActionTypes'

const {
  Attribute,
  Behavior,
  Event,
  Node,
  Style
} = ActionTypes

// @NOTE: those actions whose type determined by argument or property
// (1) Element.attributes methods (e.g. setAttribute, removeAttribute)
// (2) Attr value setter
const AttrActionTagMap: ActionTagMap = {
  'class': Style,
  'style': Style,
  'default': Attribute
}

// @NOTE: those actions whose type determined by caller object
// (1) classList -> Style
// (2) others -> Attribute
const DOMTokenListActionTagMap: ActionTagMap = {
  'classList': Style,
  'default': Attribute
}

const ActionMap: {
  [target in Target]: object
} = {
    'HTMLElement': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement

      /* properties */

      'accessKey': Attribute,
      'contentEditable': Attribute,
      'dir': Attribute,
      'draggable': Attribute,
      'hidden': Attribute,
      // @NOTE: innerText on MDN is in Node.prototype,
      // but chrome put it in HTMLElement.prototype 
      'innerText': Node,
      'lang': Attribute,
      'outerText': Node,
      'spellcheck': Attribute,
      'tabIndex': Attribute,
      'title': Attribute,
      'translate': Attribute,

      'onabort': Event,
      'onanimationcancel': Event,
      'onanimationend': Event,
      'onanimationiteration': Event,
      'onauxclick': Event,
      'onblur': Event,
      'oncancel': Event,
      'oncanplay': Event,
      'oncanplaythrough': Event,
      'onchange': Event,
      'onclick': Event,
      'onclose': Event,
      'oncontextmenu': Event,
      'oncopy': Event,
      'oncuechange': Event,
      'oncut': Event,
      'ondblclick': Event,
      'ondrag': Event,
      'ondragend': Event,
      'ondragenter': Event,
      'ondragleave': Event,
      'ondragover': Event,
      'ondragstart': Event,
      'ondrop': Event,
      'ondurationchange': Event,
      'onemptied': Event,
      'onended': Event,
      'onerror': Event,
      'onfocus': Event,
      'ongotpointercapture': Event,
      'oninput': Event,
      'oninvalid': Event,
      'onkeydown': Event,
      'onkeypress': Event,
      'onkeyup': Event,
      'onload': Event,
      'onloadeddata': Event,
      'onloadedmetadata': Event,
      'onloadend': Event,
      'onloadstart': Event,
      'onlostpointercapture': Event,
      'onmousedown': Event,
      'onmouseenter': Event,
      'onmouseleave': Event,
      'onmousemove': Event,
      'onmouseout': Event,
      'onmouseover': Event,
      'onmouseup': Event,
      'onmousewheel': Event,
      'onpause': Event,
      'onplay': Event,
      'onplaying': Event,
      'onprogress': Event,
      'onpaste': Event,
      'onpointercancel': Event,
      'onpointerdown': Event,
      'onpointerenter': Event,
      'onpointerleave': Event,
      'onpointermove': Event,
      'onpointerout': Event,
      'onpointerover': Event,
      'onpointerup': Event,
      'onratechange': Event,
      'onreset': Event,
      'onresize': Event,
      'onscroll': Event,
      'onseeked': Event,
      'onseeking': Event,
      'onselect': Event,
      'onselectionchange': Event,
      'onselectstart': Event,
      'onshow': Event,
      'onstalled': Event,
      'onsubmit': Event,
      'onsuspend': Event,
      'ontimeupdate': Event,
      'ontoggle': Event,
      'ontouchcancel': Event,
      'ontouchmove': Event,
      'ontouchstart': Event,
      'ontransitioncancel': Event,
      'ontransitionend': Event,
      'onvolumechange': Event,
      'onwaiting': Event,

      /* methods */

      'blur': Behavior,
      'click': Behavior,
      'focus': Behavior,
      'forceSpellCheck': Behavior,
    },
    'Element': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/Element

      /* properties */

      'id': Attribute,
      'name': Attribute,
      'slot': Attribute,

      'scrollTop': Behavior,
      'scrollLeft': Behavior,

      'onbeforecopy': Event,
      'onbeforecut': Event,
      'onbeforepaste': Event,
      'oncopy': Event,
      'oncut': Event,
      'onpaste': Event,
      'onsearch': Event,
      'onselectstart': Event,
      'onwheel': Event,
      'onwebkitfullscreenchange': Event,
      'onwebkitfullscreenerror': Event,

      'innerHTML': Node,
      'outerHTML': Node,

      'className': Style,

      /* methods */

      'removeAttribute': AttrActionTagMap,
      'removeAttributeNode': AttrActionTagMap,
      'removeAttributeNS': AttrActionTagMap,
      'setAttribute': AttrActionTagMap,
      'setAttributeNode': AttrActionTagMap, // #anomaly
      'setAttributeNodeNS': AttrActionTagMap, // #anomaly
      'setAttributeNS': AttrActionTagMap,

      'scrollIntoView': Behavior,

      'setPointerCapture': Event,

      'append': Node,
      'attachShadow': Node,
      'insertAdjacentElement': Node,
      'insertAdjacentHTML': Node,
      'insertAdjacentText': Node,
      'prepend': Node,

      // ChildNode https://developer.mozilla.org/zh-TW/docs/Web/API/ChildNode
      // Chrome keeps these methods in Element
      'remove': Node,
      'before': Node,
      'after': Node,
      'replaceWith': Node,

      // 'animate': Style,
    },
    'Node': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/Node

      /* properties */

      'nodeValue': Attribute,

      'textContent': Node,

      /* methods */

      'appendChild': Node,
      'insertBefore': Node,
      'normalize': Node, // [https://developer.mozilla.org/zh-TW/docs/Web/API/Node/normalize] The Node.normalize() method puts the specified node and all of its sub-tree into a 'normalized' form. In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.
      'removeChild': Node,
      'replaceChild': Node,
    },
    'EventTarget': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget

      /* methods */

      'addEventListener': Event,
      'dispatchEvent': Event,
      'removeEventListener': Event,
    },
    'Attr': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/Attr

      /* properties */

      'value': AttrActionTagMap // #anomaly
    },
    'CSSStyleDeclaration': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/CSSStyleDeclaration
      // refer to HTMLElement.style

      /* methods */

      'removeProperty': Style,
      'setProperty': Style
    },
    'DOMStringMap': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/DOMStringMap
      // refer to HTMLElement.dataset
    },
    'DOMTokenList': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/DOMTokenList
      // refer to Element.classList

      /* properties */

      'value': DOMTokenListActionTagMap,

      /* methods */

      'add': DOMTokenListActionTagMap,
      'remove': DOMTokenListActionTagMap,
      'replace': DOMTokenListActionTagMap,
      'toggle': DOMTokenListActionTagMap
    },
    'NamedNodeMap': {
      // https://developer.mozilla.org/zh-TW/docs/Web/API/NamedNodeMap
      // refer to Element.attributes

      /* methods */

      'removeNamedItem': AttrActionTagMap,
      'removeNamedItemNS': AttrActionTagMap,
      'setNamedItem': AttrActionTagMap, // #anomaly
      'setNamedItemNS': AttrActionTagMap, // #anomaly
    },
  }
const _: IActionMap = {
  filterActionType(target, action, actionTag) {
    switch (target) {
      case 'DOMStringMap':
        return ActionTypes.Attribute
      case 'CSSStyleDeclaration':
        return ActionTypes.Style
      default:
        if (this.has(target, action)) {
          return function (type: ActionTypes | ActionTagMap): ActionTypes {
            return actionTag ? (type[actionTag] || type['default']) : type
          }(ActionMap[target][action])
        }
        return ActionTypes.None
    }
  },
  has(target, action) {
    return !!(ActionMap[target] && ActionMap[target][action])
  },
  visit(callback) {
    Object.keys(ActionMap).map(
      (target: Target) => {
        callback(target, ActionMap[target])
      }
    )
  }
}
export default _