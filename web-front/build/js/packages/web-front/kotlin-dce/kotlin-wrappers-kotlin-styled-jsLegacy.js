(function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$inline_style_prefixer, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$styled_components, $module$react, $module$react_dom, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var invoke_0 = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_9p99ed$;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement;
  var throwCCE = Kotlin.throwCCE;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var CSSBuilder = $module$kotlin_css.kotlinx.css.CSSBuilder;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RElementBuilder;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var ensureNotNull = Kotlin.ensureNotNull;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledDOMBuilder.prototype = Object.create(RDOMBuilder.prototype);
  StyledDOMBuilder.prototype.constructor = StyledDOMBuilder;
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledBuilder', interfaces: []};
  function StyledDOMBuilder(factory) {
    RDOMBuilder.call(this, factory);
    this.type_redftz$_0 = this.attrs.tagName;
    this.css_en1qsi$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {configurable: true, get: function () {
    return this.type_redftz$_0;
  }});
  Object.defineProperty(StyledDOMBuilder.prototype, 'css', {configurable: true, get: function () {
    return this.css_en1qsi$_0;
  }});
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.props, this.childList);
  };
  StyledDOMBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledDOMBuilder', interfaces: [StyledBuilder, RDOMBuilder]};
  var globalStylesCounter;
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda(it) {
    return it._css;
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = invoke_0(rawStyled(type), [Styled$wrap$lambda$lambda]);
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.createElement_lnfw8r$ = function (type, css, props, children) {
    var tmp$ = !css.rules.isEmpty();
    if (!tmp$) {
      tmp$ = !css.multiRules.isEmpty();
    }var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }if (tmp$_0) {
      var wrappedType = this.wrap_0(type);
      var styledProps = props;
      styledProps._css = css.toString();
      if (!css.classes.isEmpty()) {
        styledProps.className = joinToString(css.classes, ' ');
      }if (!css.styleName.isEmpty()) {
        styledProps['data-style'] = joinToString(css.styleName, ' ');
      }return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
    } else {
      if (!css.classes.isEmpty()) {
        props.className = joinToString(css.classes, ' ');
      }return createElement.apply(null, [type, props].concat(copyToArray(children)));
    }
  };
  Styled.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styled', interfaces: []};
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  function rawStyled(target) {
    return $module$styled_components.default(target);
  }
  var package$styled = _.styled || (_.styled = {});
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  Object.defineProperty(package$styled, 'Styled', {get: Styled_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.rawStyled_za3rmp$ = rawStyled;
  globalStylesCounter = 0;
  return _;
}(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('inline-style-prefixer'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('styled-components'), require('react'), require('react-dom'), require('kotlinx-html-js')));

//# sourceMappingURL=kotlin-wrappers-kotlin-styled-jsLegacy.js.map
