// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/@ungap/weakmap/esm/index.js
var self = {};
try {
  self.WeakMap = WeakMap;
} catch (WeakMap2) {
  self.WeakMap = function(id, Object2) {
    "use strict";
    var dP = Object2.defineProperty;
    var hOP = Object2.hasOwnProperty;
    var proto = WeakMap3.prototype;
    proto.delete = function(key) {
      return this.has(key) && delete key[this._];
    };
    proto.get = function(key) {
      return this.has(key) ? key[this._] : void 0;
    };
    proto.has = function(key) {
      return hOP.call(key, this._);
    };
    proto.set = function(key, value) {
      dP(key, this._, { configurable: true, value });
      return this;
    };
    return WeakMap3;
    function WeakMap3(iterable) {
      dP(this, "_", { value: "_@ungap/weakmap" + id++ });
      if (iterable)
        iterable.forEach(add, this);
    }
    function add(pair) {
      this.set(pair[0], pair[1]);
    }
  }(Math.random(), Object);
}
var esm_default = self.WeakMap;

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/domconstants/esm/index.js
var UID = "-" + Math.random().toFixed(6) + "%";
var UID_IE = false;
try {
  if (!function(template, content, tabindex) {
    return content in template && (template.innerHTML = "<p " + tabindex + '="' + UID + '"></p>', template[content].childNodes[0].getAttribute(tabindex) == UID);
  }(document.createElement("template"), "content", "tabindex")) {
    UID = "_dt: " + UID.slice(1, -1) + ";";
    UID_IE = true;
  }
} catch (meh) {
}
var UIDC = "<!--" + UID + "-->";
var COMMENT_NODE = 8;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var SHOULD_USE_TEXT_CONTENT = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/domsanitizer/esm/index.js
function esm_default2(template) {
  return template.join(UIDC).replace(selfClosing, fullClosing).replace(attrSeeker, attrReplacer);
}
var spaces = " \\f\\n\\r\\t";
var almostEverything = "[^" + spaces + `\\/>"'=]+`;
var attrName = "[" + spaces + "]+" + almostEverything;
var tagName = "<([A-Za-z]+[A-Za-z0-9:._-]*)((?:";
var attrPartials = `(?:\\s*=\\s*(?:'[^']*?'|"[^"]*?"|<[^>]*?>|` + almostEverything.replace("\\/", "") + "))?)";
var attrSeeker = new RegExp(tagName + attrName + attrPartials + "+)([" + spaces + "]*/?>)", "g");
var selfClosing = new RegExp(tagName + attrName + attrPartials + "*)([" + spaces + "]*/>)", "g");
var findAttributes = new RegExp("(" + attrName + `\\s*=\\s*)(['"]?)` + UIDC + "\\2", "gi");
function attrReplacer($0, $1, $2, $3) {
  return "<" + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
}
function replaceAttributes($0, $1, $2) {
  return $1 + ($2 || '"') + UID + ($2 || '"');
}
function fullClosing($0, $1, $2) {
  return VOID_ELEMENTS.test($1) ? $0 : "<" + $1 + $2 + "></" + $1 + ">";
}

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/uarray/esm/index.js
var { isArray } = Array;
var { indexOf, slice } = [];

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/umap/esm/index.js
var esm_default3 = (_) => ({
  // About: get: _.get.bind(_)
  // It looks like WebKit/Safari didn't optimize bind at all,
  // so that using bind slows it down by 60%.
  // Firefox and Chrome are just fine in both cases,
  // so let's use the approach that works fast everywhere 👍
  get: (key) => _.get(key),
  set: (key, value) => (_.set(key, value), value)
});

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/uwire/esm/index.js
var ELEMENT_NODE2 = 1;
var nodeType = 111;
var remove = ({ firstChild, lastChild }) => {
  const range = document.createRange();
  range.setStartAfter(firstChild);
  range.setEndAfter(lastChild);
  range.deleteContents();
  return firstChild;
};
var diffable = (node, operation) => node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
var persistent = (fragment) => {
  const { childNodes } = fragment;
  const { length } = childNodes;
  if (length < 2)
    return length ? childNodes[0] : fragment;
  const nodes = slice.call(childNodes, 0);
  const firstChild = nodes[0];
  const lastChild = nodes[length - 1];
  return {
    ELEMENT_NODE: ELEMENT_NODE2,
    nodeType,
    firstChild,
    lastChild,
    valueOf() {
      if (childNodes.length !== length) {
        let i = 0;
        while (i < length)
          fragment.appendChild(nodes[i++]);
      }
      return fragment;
    }
  };
};

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/@ungap/create-content/esm/index.js
var createContent = function(document2) {
  "use strict";
  var FRAGMENT = "fragment";
  var TEMPLATE = "template";
  var HAS_CONTENT = "content" in create2(TEMPLATE);
  var createHTML = HAS_CONTENT ? function(html2) {
    var template = create2(TEMPLATE);
    template.innerHTML = html2;
    return template.content;
  } : function(html2) {
    var content = create2(FRAGMENT);
    var template = create2(TEMPLATE);
    var childNodes = null;
    if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html2)) {
      var selector = RegExp.$1;
      template.innerHTML = "<table>" + html2 + "</table>";
      childNodes = template.querySelectorAll(selector);
    } else {
      template.innerHTML = html2;
      childNodes = template.childNodes;
    }
    append(content, childNodes);
    return content;
  };
  return function createContent2(markup, type) {
    return (type === "svg" ? createSVG : createHTML)(markup);
  };
  function append(root, childNodes) {
    var length = childNodes.length;
    while (length--)
      root.appendChild(childNodes[0]);
  }
  function create2(element) {
    return element === FRAGMENT ? document2.createDocumentFragment() : document2.createElementNS("http://www.w3.org/1999/xhtml", element);
  }
  function createSVG(svg2) {
    var content = create2(FRAGMENT);
    var template = create2("div");
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg2 + "</svg>";
    append(content, template.firstChild.childNodes);
    return content;
  }
}(document);
var esm_default4 = createContent;

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/udomdiff/esm/index.js
var esm_default5 = (parentNode, a, b, get, before) => {
  const bLength = b.length;
  let aEnd = a.length;
  let bEnd = bLength;
  let aStart = 0;
  let bStart = 0;
  let map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
      while (bStart < bEnd)
        parentNode.insertBefore(get(b[bStart++], 1), node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart]))
          parentNode.removeChild(get(a[aStart], -1));
        aStart++;
      }
    } else if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
    } else if (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = get(a[--aEnd], -1).nextSibling;
      parentNode.insertBefore(
        get(b[bStart++], 1),
        get(a[aStart++], -1).nextSibling
      );
      parentNode.insertBefore(get(b[--bEnd], 1), node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        let i = bStart;
        while (i < bEnd)
          map.set(b[i], i++);
      }
      if (map.has(a[aStart])) {
        const index = map.get(a[aStart]);
        if (bStart < index && index < bEnd) {
          let i = aStart;
          let sequence = 1;
          while (++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)
            sequence++;
          if (sequence > index - bStart) {
            const node = get(a[aStart], 0);
            while (bStart < index)
              parentNode.insertBefore(get(b[bStart++], 1), node);
          } else {
            parentNode.replaceChild(
              get(b[bStart++], 1),
              get(a[aStart++], -1)
            );
          }
        } else
          aStart++;
      } else
        parentNode.removeChild(get(a[aStart++], -1));
    }
  }
  return b;
};

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/@ungap/import-node/esm/index.js
var importNode = function(document2, appendChild, cloneNode, createTextNode, importNode2) {
  var native = importNode2 in document2;
  var fragment = document2.createDocumentFragment();
  fragment[appendChild](document2[createTextNode]("g"));
  fragment[appendChild](document2[createTextNode](""));
  var content = native ? document2[importNode2](fragment, true) : fragment[cloneNode](true);
  return content.childNodes.length < 2 ? function importNode3(node, deep) {
    var clone = node[cloneNode]();
    for (var childNodes = node.childNodes || [], length = childNodes.length, i = 0; deep && i < length; i++) {
      clone[appendChild](importNode3(childNodes[i], deep));
    }
    return clone;
  } : (
    /* istanbul ignore next */
    native ? document2[importNode2] : function(node, deep) {
      return node[cloneNode](!!deep);
    }
  );
}(
  document,
  "appendChild",
  "cloneNode",
  "createTextNode",
  "importNode"
);
var esm_default6 = importNode;

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/@ungap/trim/esm/index.js
var trim = "".trim || /* istanbul ignore next */
function() {
  return String(this).replace(/^\s+|\s+/g, "");
};
var esm_default7 = trim;

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/domtagger/esm/walker.js
var normalizeAttributes = UID_IE ? function(attributes, parts) {
  var html2 = parts.join(" ");
  return parts.slice.call(attributes, 0).sort(function(left, right) {
    return html2.indexOf(left.name) <= html2.indexOf(right.name) ? -1 : 1;
  });
} : function(attributes, parts) {
  return parts.slice.call(attributes, 0);
};
function find(node, path) {
  var length = path.length;
  var i = 0;
  while (i < length)
    node = node.childNodes[path[i++]];
  return node;
}
function parse(node, holes, parts, path) {
  var childNodes = node.childNodes;
  var length = childNodes.length;
  var i = 0;
  while (i < length) {
    var child = childNodes[i];
    switch (child.nodeType) {
      case ELEMENT_NODE:
        var childPath = path.concat(i);
        parseAttributes(child, holes, parts, childPath);
        parse(child, holes, parts, childPath);
        break;
      case COMMENT_NODE:
        var textContent = child.textContent;
        if (textContent === UID) {
          parts.shift();
          holes.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ? Text(node, path) : Any(child, path.concat(i))
          );
        } else {
          switch (textContent.slice(0, 2)) {
            case "/*":
              if (textContent.slice(-2) !== "*/")
                break;
            case "👻":
              node.removeChild(child);
              i--;
              length--;
          }
        }
        break;
      case TEXT_NODE:
        if (SHOULD_USE_TEXT_CONTENT.test(node.nodeName) && esm_default7.call(child.textContent) === UIDC) {
          parts.shift();
          holes.push(Text(node, path));
        }
        break;
    }
    i++;
  }
}
function parseAttributes(node, holes, parts, path) {
  var attributes = node.attributes;
  var cache2 = [];
  var remove2 = [];
  var array = normalizeAttributes(attributes, parts);
  var length = array.length;
  var i = 0;
  while (i < length) {
    var attribute2 = array[i++];
    var direct = attribute2.value === UID;
    var sparse;
    if (direct || 1 < (sparse = attribute2.value.split(UIDC)).length) {
      var name = attribute2.name;
      if (cache2.indexOf(name) < 0) {
        cache2.push(name);
        var realName = parts.shift().replace(
          direct ? /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ : new RegExp(
            "^(?:|[\\S\\s]*?\\s)(" + name + `)\\s*=\\s*('|")[\\S\\s]*`,
            "i"
          ),
          "$1"
        );
        var value = attributes[realName] || // the following ignore is covered by browsers
        // while basicHTML is already case-sensitive
        /* istanbul ignore next */
        attributes[realName.toLowerCase()];
        if (direct)
          holes.push(Attr(value, path, realName, null));
        else {
          var skip = sparse.length - 2;
          while (skip--)
            parts.shift();
          holes.push(Attr(value, path, realName, sparse));
        }
      }
      remove2.push(attribute2);
    }
  }
  length = remove2.length;
  i = 0;
  var cleanValue = 0 < length && UID_IE && !("ownerSVGElement" in node);
  while (i < length) {
    var attr = remove2[i++];
    if (cleanValue)
      attr.value = "";
    node.removeAttribute(attr.name);
  }
  var nodeName = node.nodeName;
  if (/^script$/i.test(nodeName)) {
    var script = document.createElement(nodeName);
    length = attributes.length;
    i = 0;
    while (i < length)
      script.setAttributeNode(attributes[i++].cloneNode(true));
    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
}
function Any(node, path) {
  return {
    type: "any",
    node,
    path
  };
}
function Attr(node, path, name, sparse) {
  return {
    type: "attr",
    node,
    path,
    name,
    sparse
  };
}
function Text(node, path) {
  return {
    type: "text",
    node,
    path
  };
}

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/domtagger/esm/index.js
var esm_default8 = domtagger;
var parsed = esm_default3(new esm_default());
function createInfo(options, template) {
  var markup = (options.convert || esm_default2)(template);
  var transform = options.transform;
  if (transform)
    markup = transform(markup);
  var content = esm_default4(markup, options.type);
  cleanContent(content);
  var holes = [];
  parse(content, holes, template.slice(0), []);
  return {
    content,
    updates: function(content2) {
      var updates = [];
      var len = holes.length;
      var i = 0;
      var off = 0;
      while (i < len) {
        var info = holes[i++];
        var node = find(content2, info.path);
        switch (info.type) {
          case "any":
            updates.push({ fn: options.any(node, []), sparse: false });
            break;
          case "attr":
            var sparse = info.sparse;
            var fn = options.attribute(node, info.name, info.node);
            if (sparse === null)
              updates.push({ fn, sparse: false });
            else {
              off += sparse.length - 2;
              updates.push({ fn, sparse: true, values: sparse });
            }
            break;
          case "text":
            updates.push({ fn: options.text(node), sparse: false });
            node.textContent = "";
            break;
        }
      }
      len += off;
      return function() {
        var length = arguments.length;
        if (len !== length - 1) {
          throw new Error(
            length - 1 + " values instead of " + len + "\n" + template.join("${value}")
          );
        }
        var i2 = 1;
        var off2 = 1;
        while (i2 < length) {
          var update = updates[i2 - off2];
          if (update.sparse) {
            var values = update.values;
            var value = values[0];
            var j = 1;
            var l = values.length;
            off2 += l - 2;
            while (j < l)
              value += arguments[i2++] + values[j++];
            update.fn(value);
          } else
            update.fn(arguments[i2++]);
        }
        return content2;
      };
    }
  };
}
function createDetails(options, template) {
  var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
  return info.updates(esm_default6.call(document, info.content, true));
}
var empty = [];
function domtagger(options) {
  var previous = empty;
  var updates = cleanContent;
  return function(template) {
    if (previous !== template)
      updates = createDetails(options, previous = template);
    return updates.apply(null, arguments);
  };
}
function cleanContent(fragment) {
  var childNodes = fragment.childNodes;
  var i = childNodes.length;
  while (i--) {
    var child = childNodes[i];
    if (child.nodeType !== 1 && esm_default7.call(child.textContent).length === 0) {
      fragment.removeChild(child);
    }
  }
}

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/hyperhtml-style/esm/index.js
var hyperStyle = function() {
  "use strict";
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
  var hyphen = /([^A-Z])([A-Z]+)/g;
  return function hyperStyle2(node, original) {
    return "ownerSVGElement" in node ? svg2(node, original) : update(node.style, false);
  };
  function ized($0, $1, $2) {
    return $1 + "-" + $2.toLowerCase();
  }
  function svg2(node, original) {
    var style;
    if (original)
      style = original.cloneNode(true);
    else {
      node.setAttribute("style", "--hyper:style;");
      style = node.getAttributeNode("style");
    }
    style.value = "";
    node.setAttributeNode(style);
    return update(style, true);
  }
  function toStyle(object) {
    var key, css = [];
    for (key in object)
      css.push(key.replace(hyphen, ized), ":", object[key], ";");
    return css.join("");
  }
  function update(style, isSVG) {
    var oldType, oldValue;
    return function(newValue) {
      var info, key, styleValue, value;
      switch (typeof newValue) {
        case "object":
          if (newValue) {
            if (oldType === "object") {
              if (!isSVG) {
                if (oldValue !== newValue) {
                  for (key in oldValue) {
                    if (!(key in newValue)) {
                      style[key] = "";
                    }
                  }
                }
              }
            } else {
              if (isSVG)
                style.value = "";
              else
                style.cssText = "";
            }
            info = isSVG ? {} : style;
            for (key in newValue) {
              value = newValue[key];
              styleValue = typeof value === "number" && !IS_NON_DIMENSIONAL.test(key) ? value + "px" : value;
              if (!isSVG && /^--/.test(key))
                info.setProperty(key, styleValue);
              else
                info[key] = styleValue;
            }
            oldType = "object";
            if (isSVG)
              style.value = toStyle(oldValue = info);
            else
              oldValue = newValue;
            break;
          }
        default:
          if (oldValue != newValue) {
            oldType = "string";
            oldValue = newValue;
            if (isSVG)
              style.value = newValue || "";
            else
              style.cssText = newValue || "";
          }
          break;
      }
    };
  }
}();
var esm_default9 = hyperStyle;

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/node_modules/uhandlers/esm/index.js
var aria = (node) => (values) => {
  for (const key in values) {
    const name = key === "role" ? key : `aria-${key}`;
    const value = values[key];
    if (value == null)
      node.removeAttribute(name);
    else
      node.setAttribute(name, value);
  }
};
var attribute = (node, name) => {
  let oldValue, orphan = true;
  const attributeNode = document.createAttributeNS(null, name);
  return (newValue) => {
    if (oldValue !== newValue) {
      oldValue = newValue;
      if (oldValue == null) {
        if (!orphan) {
          node.removeAttributeNode(attributeNode);
          orphan = true;
        }
      } else {
        attributeNode.value = newValue;
        if (orphan) {
          node.setAttributeNodeNS(attributeNode);
          orphan = false;
        }
      }
    }
  };
};
var boolean = (node, key, oldValue) => (newValue) => {
  if (oldValue !== !!newValue) {
    if (oldValue = !!newValue)
      node.setAttribute(key, "");
    else
      node.removeAttribute(key);
  }
};
var data = ({ dataset }) => (values) => {
  for (const key in values) {
    const value = values[key];
    if (value == null)
      delete dataset[key];
    else
      dataset[key] = value;
  }
};
var event = (node, name) => {
  let oldValue, type = name.slice(2);
  if (!(name in node) && name.toLowerCase() in node)
    type = type.toLowerCase();
  return (newValue) => {
    const info = isArray(newValue) ? newValue : [newValue, false];
    if (oldValue !== info[0]) {
      if (oldValue)
        node.removeEventListener(type, oldValue, info[1]);
      if (oldValue = info[0])
        node.addEventListener(type, oldValue, info[1]);
    }
  };
};
var ref = (node) => (value) => {
  if (typeof value === "function")
    value(node);
  else
    value.current = node;
};
var setter = (node, key) => key === "dataset" ? data(node) : (value) => {
  node[key] = value;
};

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/esm/tagger.js
var hyperProperty = (node, name) => {
  let oldValue;
  return (newValue) => {
    if (oldValue !== newValue) {
      oldValue = newValue;
      if (node[name] !== newValue) {
        if (newValue == null) {
          node[name] = "";
          node.removeAttribute(name);
        } else
          node[name] = newValue;
      }
    }
  };
};
var readOnly = /^(?:form|list)$/i;
var text = (node, text2) => node.ownerDocument.createTextNode(text2);
function Tagger(type) {
  this.type = type;
  return esm_default8(this);
}
Tagger.prototype = {
  // there are four kind of attributes, and related behavior:
  //  * events, with a name starting with `on`, to add/remove event listeners
  //  * special, with a name present in their inherited prototype, accessed directly
  //  * regular, accessed through get/setAttribute standard DOM methods
  //  * style, the only regular attribute that also accepts an object as value
  //    so that you can style=${{width: 120}}. In this case, the behavior has been
  //    fully inspired by Preact library and its simplicity.
  attribute(node, name, original) {
    const isSVG = this.type === "svg";
    switch (name) {
      case "class":
        if (isSVG)
          return attribute(node, name, isSVG);
        name = "className";
      case "props":
        return setter(node, name);
      case "aria":
        return aria(node);
      case "style":
        return esm_default9(node, original, isSVG);
      case "ref":
        return ref(node);
      case ".dataset":
        return data(node);
      default:
        if (name.slice(0, 1) === ".")
          return setter(node, name.slice(1));
        if (name.slice(0, 1) === "?")
          return boolean(node, name.slice(1));
        if (name.slice(0, 2) === "on")
          return event(node, name);
        if (name in node && !(isSVG || readOnly.test(name)))
          return hyperProperty(node, name);
        return attribute(node, name, isSVG);
    }
  },
  // in a hyper(node)`<div>${content}</div>` case
  // everything could happen:
  //  * it's a JS primitive, stored as text
  //  * it's null or undefined, the node should be cleaned
  //  * it's a promise, update the content once resolved
  //  * it's an explicit intent, perform the desired operation
  //  * it's an Array, resolve all values if Promises and/or
  //    update the node with the resulting list of content
  any(node, childNodes) {
    const { type } = this;
    let fastPath = false;
    let oldValue;
    const anyContent = (value) => {
      switch (typeof value) {
        case "string":
        case "number":
        case "boolean":
          if (fastPath) {
            if (oldValue !== value) {
              oldValue = value;
              childNodes[0].textContent = value;
            }
          } else {
            fastPath = true;
            oldValue = value;
            childNodes = esm_default5(
              node.parentNode,
              childNodes,
              [text(node, value)],
              diffable,
              node
            );
          }
          break;
        case "function":
          anyContent(value(node));
          break;
        case "object":
        case "undefined":
          if (value == null) {
            fastPath = false;
            childNodes = esm_default5(
              node.parentNode,
              childNodes,
              [],
              diffable,
              node
            );
            break;
          }
        default:
          fastPath = false;
          oldValue = value;
          if (isArray(value)) {
            if (value.length === 0) {
              if (childNodes.length) {
                childNodes = esm_default5(
                  node.parentNode,
                  childNodes,
                  [],
                  diffable,
                  node
                );
              }
            } else {
              switch (typeof value[0]) {
                case "string":
                case "number":
                case "boolean":
                  anyContent(String(value));
                  break;
                case "function":
                  anyContent(value.map(invoke, node));
                  break;
                case "object":
                  if (isArray(value[0])) {
                    value = value.concat.apply([], value);
                  }
                default:
                  childNodes = esm_default5(
                    node.parentNode,
                    childNodes,
                    value,
                    diffable,
                    node
                  );
                  break;
              }
            }
          } else if ("ELEMENT_NODE" in value) {
            childNodes = esm_default5(
              node.parentNode,
              childNodes,
              value.nodeType === 11 ? slice.call(value.childNodes) : [value],
              diffable,
              node
            );
          } else if ("text" in value) {
            anyContent(String(value.text));
          } else if ("any" in value) {
            anyContent(value.any);
          } else if ("html" in value) {
            childNodes = esm_default5(
              node.parentNode,
              childNodes,
              slice.call(
                esm_default4(
                  [].concat(value.html).join(""),
                  type
                ).childNodes
              ),
              diffable,
              node
            );
          } else if ("length" in value) {
            anyContent(slice.call(value));
          }
          break;
      }
    };
    return anyContent;
  },
  // style or textareas don't accept HTML as content
  // it's pointless to transform or analyze anything
  // different from text there but it's worth checking
  // for possible defined intents.
  text(node) {
    let oldValue;
    const textContent = (value) => {
      if (oldValue !== value) {
        oldValue = value;
        const type = typeof value;
        if (type === "object" && value) {
          if ("text" in value) {
            textContent(String(value.text));
          } else if ("any" in value) {
            textContent(value.any);
          } else if ("html" in value) {
            textContent([].concat(value.html).join(""));
          } else if ("length" in value) {
            textContent(slice.call(value).join(""));
          }
        } else if (type === "function") {
          textContent(value(node));
        } else {
          node.textContent = value == null ? "" : value;
        }
      }
    };
    return textContent;
  }
};
function invoke(callback) {
  return callback(this);
}

// ../rbd/pnpm-volume/844643de-894b-49ce-8757-32fad8afa3c9/node_modules/lighterhtml/esm/index.js
var { create, freeze, keys } = Object;
var tProto = Tagger.prototype;
var cache = esm_default3(new esm_default());
var createRender = (Tagger2) => ({
  html: outer("html", Tagger2),
  svg: outer("svg", Tagger2),
  render(where, what) {
    const hole = typeof what === "function" ? what() : what;
    const info = cache.get(where) || cache.set(where, createCache());
    const wire = hole instanceof LighterHole ? unroll(Tagger2, info, hole) : hole;
    if (wire !== info.wire) {
      info.wire = wire;
      where.textContent = "";
      where.appendChild(wire.valueOf());
    }
    return where;
  }
});
var createCache = () => ({ stack: [], entry: null, wire: null });
var outer = (type, Tagger2) => {
  const cache2 = esm_default3(new esm_default());
  const fixed = (info) => function() {
    return unroll(Tagger2, info, hole.apply(null, arguments));
  };
  hole.for = (ref2, id) => {
    const memo = cache2.get(ref2) || cache2.set(ref2, create(null));
    return memo[id] || (memo[id] = fixed(createCache()));
  };
  hole.node = function() {
    return unroll(
      Tagger2,
      createCache(),
      hole.apply(null, arguments)
    ).valueOf();
  };
  return hole;
  function hole() {
    return new LighterHole(type, tta.apply(null, arguments));
  }
};
var unroll = (Tagger2, info, { type, template, values }) => {
  const { length } = values;
  unrollValues(Tagger2, info, values, length);
  let { entry } = info;
  if (!entry || (entry.template !== template || entry.type !== type)) {
    const tag = new Tagger2(type);
    info.entry = entry = {
      type,
      template,
      tag,
      wire: persistent(tag(template, ...values))
    };
  } else
    entry.tag(template, ...values);
  return entry.wire;
};
var unrollValues = (Tagger2, { stack }, values, length) => {
  for (let i = 0; i < length; i++) {
    const hole = values[i];
    if (hole instanceof Hole)
      values[i] = unroll(
        Tagger2,
        stack[i] || (stack[i] = createCache()),
        hole
      );
    else if (isArray(hole))
      unrollValues(
        Tagger2,
        stack[i] || (stack[i] = createCache()),
        hole,
        hole.length
      );
    else
      stack[i] = null;
  }
  if (length < stack.length)
    stack.splice(length);
};
freeze(LighterHole);
function LighterHole(type, args) {
  this.type = type;
  this.template = args.shift();
  this.values = args;
}
var Hole = LighterHole;
var custom = (overrides) => {
  const prototype = create(tProto);
  keys(overrides).forEach((key) => {
    prototype[key] = overrides[key](
      prototype[key] || (key === "convert" ? esm_default2 : String)
    );
  });
  CustomTagger.prototype = prototype;
  return createRender(CustomTagger);
  function CustomTagger() {
    return Tagger.apply(this, arguments);
  }
};
var { render, html, svg } = createRender(Tagger);
function tta() {
  let out = [], i = 0, { length } = arguments;
  while (i < length)
    out.push(arguments[i++]);
  return out;
}
export {
  Hole,
  custom,
  html,
  render,
  svg
};
/*! Bundled license information:

@ungap/weakmap/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)

domconstants/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)

domsanitizer/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)

@ungap/create-content/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)

@ungap/import-node/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)

hyperhtml-style/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)
*/
//# sourceMappingURL=lighterhtml.js.map
