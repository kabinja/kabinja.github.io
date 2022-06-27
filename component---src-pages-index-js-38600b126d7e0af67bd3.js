/*! For license information please see component---src-pages-index-js-38600b126d7e0af67bd3.js.LICENSE.txt */
(self.webpackChunkrenaud_rwemalika_resume=self.webpackChunkrenaud_rwemalika_resume||[]).push([[678],{5900:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var l=a.apply(null,i);l&&e.push(l)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var o in i)n.call(i,o)&&i[o]&&e.push(o);else e.push(i.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},660:function(e,t,i){"use strict";i.r(t),i.d(t,{InView:function(){return h},default:function(){return h},defaultFallbackInView:function(){return u},observe:function(){return d},useInView:function(){return v}});var n=i(7294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a.apply(this,arguments)}function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}var l=new Map,o=new WeakMap,s=0,c=void 0;function u(e){c=e}function m(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(i=e.root)?(o.has(i)||(s+=1,o.set(i,s.toString())),o.get(i)):"0":e[t]);var i})).toString()}function d(e,t,i,n){if(void 0===i&&(i={}),void 0===n&&(n=c),void 0===window.IntersectionObserver&&void 0!==n){var a=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof i.threshold?i.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var r=function(e){var t=m(e),i=l.get(t);if(!i){var n,a=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var i,r=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),null==(i=a.get(t.target))||i.forEach((function(e){e(r,t)}))}))}),e);n=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:r,elements:a},l.set(t,i)}return i}(i),o=r.id,s=r.observer,u=r.elements,d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(u.delete(e),s.unobserve(e)),0===u.size&&(s.disconnect(),l.delete(o))}}var p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!=typeof e.children}var h=function(e){var t,i;function l(t){var i;return(i=e.call(this,t)||this).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,t){e&&i.props.triggerOnce&&i.unobserve(),f(i.props)||i.setState({inView:e,entry:t}),i.props.onChange&&i.props.onChange(e,t)},i.state={inView:!!t.initialInView,entry:void 0},i}i=e,(t=l).prototype=Object.create(i.prototype),t.prototype.constructor=t,r(t,i);var o=l.prototype;return o.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},o.componentWillUnmount=function(){this.unobserve(),this.node=null},o.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,i=e.root,n=e.rootMargin,a=e.trackVisibility,r=e.delay,l=e.fallbackInView;this._unobserveCb=d(this.node,this.handleChange,{threshold:t,root:i,rootMargin:n,trackVisibility:a,delay:r},l)}},o.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},o.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,i=e.entry;return this.props.children({inView:t,entry:i,ref:this.handleNode})}var r=this.props,l=r.children,o=r.as,s=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(r,p);return n.createElement(o||"div",a({ref:this.handleNode},s),l)},l}(n.Component);function v(e){var t=void 0===e?{}:e,i=t.threshold,a=t.delay,r=t.trackVisibility,l=t.rootMargin,o=t.root,s=t.triggerOnce,c=t.skip,u=t.initialInView,m=t.fallbackInView,p=n.useRef(),f=n.useState({inView:!!u}),h=f[0],v=f[1],b=n.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),c||e&&(p.current=d(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:o,rootMargin:l,threshold:i,trackVisibility:r,delay:a},m))}),[Array.isArray(i)?i.toString():i,o,l,s,c,r,m,a]);(0,n.useEffect)((function(){p.current||!h.entry||s||c||v({inView:!!u})}));var g=[b,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},5238:function(e,t,i){"use strict";t.Z=void 0;var n=l(i(7294)),a=l(i(5697)),r=l(i(5900));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.animate,i=e.className,a=e.layout,l=e.lineColor,o=e.children;return"object"==typeof window&&document.documentElement.style.setProperty("--line-color",l),n.default.createElement("div",{className:(0,r.default)(i,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===a,"vertical-timeline--one-column-left":"1-column"===a||"1-column-left"===a,"vertical-timeline--one-column-right":"1-column-right"===a})},o)};o.propTypes={children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]).isRequired,className:a.default.string,animate:a.default.bool,layout:a.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:a.default.string},o.defaultProps={animate:!0,className:"",layout:"2-columns",lineColor:"#FFF"};var s=o;t.Z=s},7038:function(e,t,i){"use strict";t.Z=void 0;var n=o(i(7294)),a=o(i(5697)),r=o(i(5900)),l=i(660);function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.children,i=e.className,a=e.contentArrowStyle,o=e.contentStyle,s=e.date,c=e.dateClassName,u=e.icon,m=e.iconClassName,d=e.iconOnClick,p=e.onTimelineElementClick,f=e.iconStyle,h=e.id,v=e.position,b=e.style,g=e.textClassName,y=e.intersectionObserverProps,E=e.visible;return n.default.createElement(l.InView,y,(function(e){var l=e.inView,y=e.ref;return n.default.createElement("div",{ref:y,id:h,className:(0,r.default)(i,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===v,"vertical-timeline-element--right":"right"===v,"vertical-timeline-element--no-children":""===t}),style:b},n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{style:f,onClick:d,className:(0,r.default)(m,"vertical-timeline-element-icon",{"bounce-in":l||E,"is-hidden":!(l||E)})},u),n.default.createElement("div",{style:o,onClick:p,className:(0,r.default)(g,"vertical-timeline-element-content",{"bounce-in":l||E,"is-hidden":!(l||E)})},n.default.createElement("div",{style:a,className:"vertical-timeline-element-content-arrow"}),t,n.default.createElement("span",{className:(0,r.default)(c,"vertical-timeline-element-date")},s))))}))};s.propTypes={children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),className:a.default.string,contentArrowStyle:a.default.shape({}),contentStyle:a.default.shape({}),date:a.default.node,dateClassName:a.default.string,icon:a.default.element,iconClassName:a.default.string,iconStyle:a.default.shape({}),iconOnClick:a.default.func,onTimelineElementClick:a.default.func,id:a.default.string,position:a.default.string,style:a.default.shape({}),textClassName:a.default.string,visible:a.default.bool,intersectionObserverProps:a.default.shape({root:a.default.object,rootMargin:a.default.string,threshold:a.default.number,triggerOnce:a.default.bool})},s.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px",triggerOnce:!0}};var c=s;t.Z=c},7772:function(e,t,i){"use strict";e.exports={VerticalTimeline:i(5238).Z,VerticalTimelineElement:i(7038).Z}},1134:function(e,t,i){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.r(t),i.d(t,{default:function(){return w}});var a=i(1721),r=i(7294),l=i(4446),o=i.p+"static/rwemalika-88b7485d43d3ec7b708cb1e536d05a3b.png",s=function(e){return r.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},r.createElement("img",{src:o,alt:"",className:"logo"}),r.createElement("div",{className:"content"},r.createElement("div",{className:"inner"},r.createElement("h1",null,"Renaud Rwemalika Ph.D."),r.createElement("p",null,"Passionate about Software Engineering, I have dedicated my carrier on the design, development and analysis of complex data-driven systems. As such, I focused my work on AI4SE as well as SE4AI."))),r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement("button",{onClick:function(){e.onOpenArticle("experience")}},"experience")),r.createElement("li",null,r.createElement("button",{onClick:function(){e.onOpenArticle("projects")}},"projects")),r.createElement("li",null,r.createElement("button",{onClick:function(){e.onOpenArticle("papers")}},"papers")))))},c=i(7772),u=function(e){var t=e.authors.reduce((function(e,t){return e+", "+t}));return r.createElement("p",null,r.createElement("a",{href:e.link,className:"icon fa-download"},"  "),r.createElement("b",null,e.title),". ",r.createElement("i",null,t),". ",e.year,". ",e.venue,".")},m=function(e){return r.createElement("p",null,r.createElement("h3",null,r.createElement("a",{href:e.link,className:"icon fa-github"}),e.title),r.createElement("p",null,e.description))},d=i.p+"static/icse2022-00c1ff827ef3bac2498d2ff9e7630549.pdf",p=i.p+"static/phd2021-9fc7cd3180556c43c78c1d306ad100df.pdf",f=i.p+"static/kdd2020-9f479b478ead74520226dade3e278e17.pdf",h=i.p+"static/fse2019-7da67ffa6352ba3b18284f881c551acd.pdf",v=i.p+"static/issta2019-3b711746560a97e2093532a7d7dc0f2a.pdf",b=i.p+"static/icst2019-de67725b8385f09db7c952ae8476ee9c.pdf",g=i.p+"static/icsme2019-f05ac053e2c25c8fc09de29b4c779d2e.pdf",y=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=r.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return r.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},r.createElement("article",{id:"experience",className:("experience"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.createElement("h2",{className:"major"},"Experience"),r.createElement(c.VerticalTimeline,{animate:"false"},r.createElement(c.VerticalTimelineElement,{date:"Sept. 2021 to Present"},r.createElement("h3",{className:"vertical-timeline-element-title"},"Research Associate"),r.createElement("i",{className:"vertical-timeline-element-subtitle"},"University of Luxembourg"),r.createElement("p",null,"Research in the field of AI for Sofware Engineering; Development of software solutions for our industrial partners; Deployment of Machine Learning pipeline; Supervise Ph.D Student.")),r.createElement(c.VerticalTimelineElement,{date:"Oct. 2017  to Sept. 2021"},r.createElement("h3",{className:"vertical-timeline-element-title"},"PhD Student"),r.createElement("i",{className:"vertical-timeline-element-subtitle"},"University of Luxembourg"),r.createElement("p",null,"Research in the field of AI for Sofware Engineering; Development of software solutions for our industrial partners (Java, Python, JavaScript); Teach classes in Software Engineering.")),r.createElement(c.VerticalTimelineElement,{date:"May 2016 to Oct. 2017"},r.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer"),r.createElement("i",{className:"vertical-timeline-element-subtitle"},"Luxscan, Luxembourg"),r.createElement("p",null,"Design and develop feature in realtime system environment (C++): Develop GUI application (Qt); Maintain application developed in a message driven architecture (MQTT).")),r.createElement(c.VerticalTimelineElement,{date:"Oct. 2013 to May 2016"},r.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer"),r.createElement("i",{className:"vertical-timeline-element-subtitle"},"Advanced Logic Technology, Luxembourg"),r.createElement("p",null,"Design and develop data processing algorithms (C++); Develop the user interface of the solution (MFC); Perform low-level optimizations to handle large amount of data.")),r.createElement(c.VerticalTimelineElement,{date:"Oct. 2012 to Apr. 2013"},r.createElement("h3",{className:"vertical-timeline-element-title"},"Research Assistant"),r.createElement("i",{className:"vertical-timeline-element-subtitle"},"University Catholique de Louvain, Belgium"),r.createElement("p",null,"Creation of GeoDatabases (PostGIS, ArcGIS); Design and develop agent-driven models (Python, Matlab, Lua); Conduct Geospatial analysis on Landsat images (IDRISI, ArcGIS).")),r.createElement(c.VerticalTimelineElement,{date:"Sept. 2010 to Sept. 2012"},r.createElement("h3",{className:"vertical-timeline-element-title"},"Master in Bioengineering"),r.createElement("i",{className:"vertical-timeline-element-subtitle"},"University Catholique de Louvain, Belgium"),r.createElement("p",null,"Geospacial Statistics; Machine Learning; Time Series Analysis."))),t),r.createElement("article",{id:"projects",className:("projects"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.createElement("h2",{className:"major"},"Projects"),r.createElement(m,{title:"html-mutation",description:"Library written in Python allowing to mutate HTML documents.",link:"https://github.com/serval-uni-lu/html-mutation"}),r.createElement(m,{title:"ikora-core",description:"Library written in Java that provides a parser for Robot Framwork and builds the AST and call graph of a Robot Framework project. It comes with basic static analysis functionalities which can be extended through its API.",link:"https://github.com/serval-uni-lu/ikora-core"}),r.createElement(m,{title:"ikora-smells",description:"Library written in Java built on top of ikora-core and allows to detect Test Smells present in Robot Framework code.",link:"https://github.com/serval-uni-lu/ikora-smells"}),r.createElement(m,{title:"commons-git-utils",description:"Library written in Java that provides a parser for Robot Framwork written in Java that builds the AST and call graph of a Robot Framework project. It comes with basic static analysis functionalities which can be extended through its API.",link:"https://github.com/serval-uni-lu/java-commons-git-utils"}),r.createElement(m,{title:"commons-runner-utils",description:"Library written in Java that provides a set of functionalities to automatically build and analyze maven projects. This library is useful for researchers that need to analysis large quantities of software repositories.",link:"https://github.com/serval-uni-lu/java-commons-runner-utils"}),r.createElement(m,{title:"flakime",description:"Maven Plugin that allows to inject flakiness in order to study its impact on different software engineering techniques.",link:"https://github.com/serval-uni-lu/flakime"}),r.createElement(m,{title:"ikora-evolution",description:"CLI that allows to analyze the evolution of Robot Framework test suites.",link:"https://github.com/serval-uni-lu/ikora-evolution"}),r.createElement(m,{title:"ikora-evolution",description:"Library written in JavaScript that allows to extract the current DOM state with its images and store everything in a single file.",link:"https://github.com/kabinja/dom-with-styles"}),r.createElement(m,{title:"ikora-evolution",description:"SonarQube Plugin to support Robot Framework in SonarQube.",link:"https://github.com/kabinja/sonar-ikora-plugin"}),r.createElement(m,{title:"hpath",description:"Library written in JavaScript that generates robust DOM locators relying on the rendering of the HTML document.",link:"https://github.com/kabinja/hpath"}),t),r.createElement("article",{id:"papers",className:("papers"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.createElement("h2",{className:"major"},"Publications"),r.createElement(u,{title:"FlakiMe: Laboratory-Controlled Test Flakiness Impact Assessment",authors:["Maxime Cordy","Renaud Rwemalika","Adriano Franci","Mike Papadakis","Mark Harman"],year:2022,venue:"Proceedings of the 44th International Conference on Software Engineering",link:d}),r.createElement(u,{title:"On the Maintenance of System User Interactive Tests",authors:["Renaud Rwemalika"],year:2021,venue:"Ph.D. Thesis from the University of Luxembourg",link:p}),r.createElement(u,{title:"Data-Driven Simulation and Optimization for Covid-19 Exit Strategies",authors:["Salah Ghamizi","Renaud Rwemalika","Maxime Cordy","Lisa Veiber","Tegawendé F. Bissyandé","Mike Papadakis","Jacques Klein","Yves Le Traon"],year:2020,venue:"Proceedings of the 26th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining",link:f}),r.createElement(u,{title:"The Importance of Accounting for Real-World Labelling When Predicting Software Vulnerabilities",authors:["Matthieu Jimenez","Renaud Rwemalika","Mike Papadakis","Federica Sarro","Yves Le Traon","Mark Harman"],year:2019,venue:"Proceedings of the 27th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering",link:h}),r.createElement(u,{title:"Ukwikora: Continuous Inspection for Keyword-Driven Testing",authors:["Renaud Rwemalika","Marinos Kintis","Mike Papadakis","Yves Le Traon","Pierre Lorrach"],year:2019,venue:"Proceedings of the 28th ACM SIGSOFT International Symposium on Software Testing and Analysis",link:v}),r.createElement(u,{title:"An industrial study on the differences between pre-release and post-release bugs",authors:["Renaud Rwemalika","Marinos Kintis","Mike Papadakis","Yves Le Traon","Pierre Lorrach"],year:2019,venue:"Proceedings of the 35th IEEE International Conference on Software Maintenance and Evolution",link:g}),r.createElement(u,{title:"On the Evolution of Keyword-Driven Test Suites",authors:["Renaud Rwemalika","Marinos Kintis","Mike Papadakis","Yves Le Traon","Pierre Lorrach"],year:2019,venue:"Proceedings of the 12th IEEE International Conference on Software Testing, Verification and Validation",link:b}),t))},t}(r.Component),E=y,k=function(e){return r.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},r.createElement("ul",{className:"icons"},r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/renaudrwemalika",className:"icon fa-twitter"},r.createElement("span",{className:"label"},"Twitter"))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/kabinja",className:"icon fa-github"},r.createElement("span",{className:"label"},"Github"))),r.createElement("li",null,r.createElement("a",{href:"https://linkedin.com/in/renaudrwemalika",className:"icon fa-linkedin"},r.createElement("span",{className:"label"},"LinkedIn")))))},w=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},i.handleOpenArticle=i.handleOpenArticle.bind(n(i)),i.handleCloseArticle=i.handleCloseArticle.bind(n(i)),i.setWrapperRef=i.setWrapperRef.bind(n(i)),i.handleClickOutside=i.handleClickOutside.bind(n(i)),i}(0,a.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},i.setWrapperRef=function(e){this.wrapperRef=e},i.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},i.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},i.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},i.render=function(){return r.createElement(l.Z,{location:this.props.location},r.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},r.createElement("div",{id:"wrapper"},r.createElement(s,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),r.createElement(E,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),r.createElement(k,{timeout:this.state.timeout})),r.createElement("div",{id:"bg"})))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-38600b126d7e0af67bd3.js.map