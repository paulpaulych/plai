(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlinx-html-js', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'react-player', 'react-share'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlinx-html-js'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('react-player'), require('react-share'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'web-front'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'web-front'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'web-front'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'web-front'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'web-front'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'web-front'.");
    }if (typeof this['react-player'] === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'react-player' was not found. Please, check whether 'react-player' is loaded prior to 'web-front'.");
    }if (typeof this['react-share'] === 'undefined') {
      throw new Error("Error loading module 'web-front'. Its dependency 'react-share' was not found. Please, check whether 'react-share' is loaded prior to 'web-front'.");
    }root['web-front'] = factory(typeof this['web-front'] === 'undefined' ? {} : this['web-front'], kotlin, this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlinx-html-js'], this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['react-player'], this['react-share']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlinx_html_js, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$react_player, $module$react_share) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var L1 = Kotlin.Long.ONE;
  var L2 = Kotlin.Long.fromInt(2);
  var L3 = Kotlin.Long.fromInt(3);
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var L4 = Kotlin.Long.fromInt(4);
  var Unit = Kotlin.kotlin.Unit;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var set_key = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.set_key_38rnt0$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var equals = Kotlin.equals;
  var getKClass = Kotlin.getKClass;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_marginBottom = $module$kotlin_css.kotlinx.css.set_marginBottom_n8chyh$;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  VideoPlayer.prototype = Object.create(RComponent.prototype);
  VideoPlayer.prototype.constructor = VideoPlayer;
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function App() {
    RComponent_init(this);
  }
  App.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.unwatchedVideos = mutableListOf([new Video(L1, 'Building and breaking things', 'John Doe', 'https://youtu.be/eboZd5aSioY'), new Video(L2, 'The development process', 'Jane Smith', 'https://youtu.be/PsaFVLr8t4E'), new Video(L3, 'The Web 7.0', 'Matt Miller', 'https://youtu.be/PsaFVLr8t4E')]);
    $receiver.watchedVideos = mutableListOf([new Video(L4, 'Mouseless development', 'Tom Jerry', 'https://youtu.be/PsaFVLr8t4E')]);
  };
  function App$render$lambda$lambda$lambda$lambda(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.state.unwatchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectVideo = App$render$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda_0(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.state.watchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectVideo = App$render$lambda$lambda$lambda_0(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.unwatchedVideos.remove_11rb$(this$.video);
      $receiver.watchedVideos.add_11rb$(this$.video);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      $receiver.watchedVideos.remove_11rb$(this$.video);
      $receiver.unwatchedVideos.add_11rb$(this$.video);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_1(this$App, this$) {
    return function (it) {
      if (this$App.state.unwatchedVideos.contains_11rb$(this$.video)) {
        setState(this$App, App$render$lambda$lambda$lambda$lambda$lambda(this$));
      } else {
        setState(this$App, App$render$lambda$lambda$lambda$lambda$lambda_0(this$));
      }
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_1(closure$currentVideo, this$App) {
    return function ($receiver) {
      set_key($receiver, closure$currentVideo.url);
      $receiver.video = closure$currentVideo;
      $receiver.isWatched = this$App.state.watchedVideos.contains_11rb$(closure$currentVideo);
      $receiver.onWatchedButtonPressed = App$render$lambda$lambda$lambda$lambda_1(this$App, $receiver);
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    var tmp$;
    var $receiver_0_0 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Videos to watch');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    videoList($receiver_0, App$render$lambda$lambda(this));
    var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Videos watched');
    $receiver_0.child_52psg1$($receiver_0_1.create());
    videoList($receiver_0, App$render$lambda$lambda_0(this));
    if ((tmp$ = this.state.currentVideo) != null) {
      videoPlayer($receiver_0, App$render$lambda$lambda$lambda_1(tmp$, this));
    }$receiver.child_52psg1$($receiver_0.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function Video(id, speaker, title, url) {
    this.id = id;
    this.speaker = speaker;
    this.title = title;
    this.url = url;
  }
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.id;
  };
  Video.prototype.component2 = function () {
    return this.speaker;
  };
  Video.prototype.component3 = function () {
    return this.title;
  };
  Video.prototype.component4 = function () {
    return this.url;
  };
  Video.prototype.copy_zeqzmn$ = function (id, speaker, title, url) {
    return new Video(id === void 0 ? this.id : id, speaker === void 0 ? this.speaker : speaker, title === void 0 ? this.title : title, url === void 0 ? this.url : url);
  };
  Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', speaker=' + Kotlin.toString(this.speaker)) + (', title=' + Kotlin.toString(this.title)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.url, other.url)))));
  };
  function VideoList() {
    RComponent_init(this);
  }
  function VideoList$render$lambda$lambda$lambda$lambda(this$VideoList, closure$video) {
    return function (it) {
      this$VideoList.props.onSelectVideo(closure$video);
      return Unit;
    };
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0.key = element.id.toString();
      set_onClickFunction($receiver_0.attrs, VideoList$render$lambda$lambda$lambda$lambda(this, element));
      if (equals(element, this.props.selectedVideo)) {
        $receiver_0.unaryPlus_pdl1vz$('\u25B6 ');
      }$receiver_0.unaryPlus_pdl1vz$(element.speaker + ': ' + element.title);
      $receiver.child_52psg1$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoList',
    interfaces: [RComponent]
  };
  function videoList$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoList($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoList), videoList$lambda(handler));
  }
  function h3$lambda_0(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function VideoPlayer() {
    RComponent_init(this);
  }
  function VideoPlayer$render$lambda$lambda$lambda(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.url = this$VideoPlayer.props.video.url;
      $receiver.controls = true;
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(VideoPlayer$render$lambda$lambda$lambda(this$VideoPlayer));
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda(this$VideoPlayer) {
    return function (it) {
      this$VideoPlayer.props.onWatchedButtonPressed(this$VideoPlayer.props.video);
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.attrs.size = 32;
    $receiver.attrs.round = true;
    return Unit;
  }
  function VideoPlayer$render$lambda$lambda$lambda_0(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.attrs.url = this$VideoPlayer.props.video.url;
      $receiver.invoke_eb8iu4$($module$react_share.EmailIcon, VideoPlayer$render$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attrs.size = 32;
    $receiver.attrs.round = true;
    return Unit;
  }
  function VideoPlayer$render$lambda$lambda$lambda_1(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.attrs.url = this$VideoPlayer.props.video.url;
      $receiver.invoke_eb8iu4$($module$react_share.TelegramIcon, VideoPlayer$render$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  VideoPlayer.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_position($receiver_1, Position.absolute);
    set_top($receiver_1, get_px(10));
    set_right($receiver_1, get_px(10));
    var $receiver_0_0 = new RDOMBuilder_init(h3$lambda_0(null));
    $receiver_0_0.unaryPlus_pdl1vz$(this.props.video.speaker + ': ' + this.props.video.title);
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver_0.invoke_eb8iu4$($module$react_player.default, VideoPlayer$render$lambda$lambda(this));
    var $receiver_0_1 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    var $receiver_2 = $receiver_0_1.css;
    set_display($receiver_2, Display.block);
    set_backgroundColor($receiver_2, this.props.isWatched ? Color.Companion.lightGreen : Color.Companion.red);
    set_onClickFunction($receiver_0_1.attrs, VideoPlayer$render$lambda$lambda$lambda$lambda(this));
    $receiver_0_1.unaryPlus_pdl1vz$(this.props.isWatched ? 'Mark as unwatched' : 'Mark as watched');
    $receiver_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_3 = $receiver_0_2.css;
    set_display($receiver_3, Display.flex);
    set_marginBottom($receiver_3, get_px(10));
    $receiver_0_2.invoke_eb8iu4$($module$react_share.EmailShareButton, VideoPlayer$render$lambda$lambda$lambda_0(this));
    $receiver_0_2.invoke_eb8iu4$($module$react_share.TelegramShareButton, VideoPlayer$render$lambda$lambda$lambda_1(this));
    $receiver_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  VideoPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoPlayer',
    interfaces: [RComponent]
  };
  function videoPlayer$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoPlayer($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoPlayer), videoPlayer$lambda(handler));
  }
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    require('bootstrap/dist/css/bootstrap.css');
    render(document.getElementById('root'), void 0, main$lambda);
  }
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.App = App;
  _.Video = Video;
  _.VideoList = VideoList;
  _.videoList_mwm0vr$ = videoList;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  _.VideoPlayer = VideoPlayer;
  _.videoPlayer_xm7p1w$ = videoPlayer;
  _.main = main;
  main();
  Kotlin.defineModule('web-front', _);
  return _;
}));

//# sourceMappingURL=web-front.js.map
