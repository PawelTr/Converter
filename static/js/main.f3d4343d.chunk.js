(this.webpackJsonpConverter=this.webpackJsonpConverter||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),i=a.n(s),l=(a(13),a(2)),r=a(3),o=a(5),u=a(4),h=(a(14),a(6)),j=(a(15),a(0)),C=function(e){return Object(j.jsx)("div",{className:"Calc",children:Object(j.jsxs)("form",{className:"Form",children:[Object(j.jsxs)("div",{className:"Val",children:[Object(j.jsxs)("div",{className:"Val__inner",children:[Object(j.jsx)("input",{type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",min:"0",onChange:e.onChange1,value:e.cost1}),e.val1]}),Object(j.jsx)("p",{className:"Val__subtilte",children:"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c"})]}),Object(j.jsx)("svg",{width:"139",height:"78",viewBox:"0 0 139 78",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M138.061 13.0607C138.646 12.4749 138.646 11.5251 138.061 10.9393L128.515 1.3934C127.929 0.807609 126.979 0.807609 126.393 1.39339C125.808 1.97918 125.808 2.92893 126.393 3.51472L134.879 12L126.393 20.4853C125.808 21.0711 125.808 22.0208 126.393 22.6066C126.979 23.1924 127.929 23.1924 128.515 22.6066L138.061 13.0607ZM138.061 67.0607C138.646 66.4749 138.646 65.5251 138.061 64.9393L128.515 55.3934C127.929 54.8076 126.979 54.8076 126.393 55.3934C125.808 55.9792 125.808 56.9289 126.393 57.5147L134.879 66L126.393 74.4853C125.808 75.0711 125.808 76.0208 126.393 76.6066C126.979 77.1924 127.929 77.1924 128.515 76.6066L138.061 67.0607ZM9.07584e-07 67.5C31.9097 67.5 55.2479 53.7789 76.055 40.2577L74.4204 37.7422C53.6783 51.2211 30.9755 64.5 -9.12127e-07 64.5L9.07584e-07 67.5ZM76.055 40.2577C96.9922 26.6521 115.09 13.5 137 13.5L137 10.5C113.992 10.5 95.0324 24.3479 74.4204 37.7422L76.055 40.2577ZM8.70972e-07 13.5C30.9755 13.5 53.6783 26.7789 74.4204 40.2577L76.055 37.7422C55.2479 24.2211 31.9097 10.5 -8.70972e-07 10.5L8.70972e-07 13.5ZM74.4204 40.2577C95.0324 53.6521 113.992 67.5 137 67.5L137 64.5C115.09 64.5 96.9922 51.3479 76.055 37.7422L74.4204 40.2577Z",fill:"#246C27"})}),Object(j.jsx)("div",{className:"Val",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Val__inner",children:[Object(j.jsx)("input",{type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",min:"0",value:e.cost2,onChange:e.onChange2}),e.val2]}),Object(j.jsx)("p",{className:"Val__subtilte",children:"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435"})]})})]})})},d=(a(17),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={Val:[0]},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((function(e){return e.json()})).then((function(t){var a=Object.values(t.Valute);e.setState({Val:a})}))}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"Col1",children:this.state.Val.map((function(t,a){return Object(j.jsx)("button",{className:"Card",symbol:t.CharCode,id:t.CharCode,onClick:function(){e.props.changeActiveVal(t.CharCode)},children:t.Name},a)}))})}}]),a}(n.Component)),v=(a(18),function(){return Object(j.jsxs)("div",{className:"Header",children:[Object(j.jsx)("svg",{width:"40",height:"57",viewBox:"0 0 40 57",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M39.0607 46.0607C39.6464 45.4749 39.6464 44.5251 39.0607 43.9393L29.5147 34.3934C28.9289 33.8076 27.9792 33.8076 27.3934 34.3934C26.8076 34.9792 26.8076 35.9289 27.3934 36.5147L35.8787 45L27.3934 53.4853C26.8076 54.0711 26.8076 55.0208 27.3934 55.6066C27.9792 56.1924 28.9289 56.1924 29.5147 55.6066L39.0607 46.0607ZM38 0.5C25.7917 0.5 16.476 3.23245 10.1635 7.47368C3.84184 11.721 0.5 17.5228 0.5 23.5C0.5 29.4772 3.84184 35.279 10.1635 39.5263C16.476 43.7676 25.7917 46.5 38 46.5L38 43.5C26.2083 43.5 17.524 40.8574 11.8365 37.0362C6.15816 33.221 3.5 28.2728 3.5 23.5C3.5 18.7272 6.15816 13.779 11.8365 9.96382C17.524 6.14255 26.2083 3.5 38 3.5L38 0.5Z",fill:"#246C27"})}),Object(j.jsx)("h1",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"}),Object(j.jsx)("svg",{width:"40",height:"57",viewBox:"0 0 40 57",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M0.93934 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807613 11.0711 0.807613 10.4853 1.3934L0.93934 10.9393ZM2 56.5C14.2083 56.5 23.524 53.7676 29.8365 49.5263C36.1582 45.279 39.5 39.4772 39.5 33.5C39.5 27.5228 36.1582 21.721 29.8365 17.4737C23.524 13.2324 14.2083 10.5 2 10.5L2 13.5C13.7917 13.5 22.476 16.1426 28.1635 19.9638C33.8418 23.779 36.5 28.7272 36.5 33.5C36.5 38.2728 33.8418 43.221 28.1635 47.0362C22.476 50.8574 13.7917 53.5 2 53.5L2 56.5Z",fill:"#246C27"})})]})}),b=(a(19),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={Val:[0]},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((function(e){return e.json()})).then((function(t){var a=Object.values(t.Valute);e.setState({Val:a})}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"Col0",children:this.state.Val.map((function(e,t){var a=(e.Previous-e.Value).toFixed(2);return a>=0?Object(j.jsxs)("div",{className:"Card__line",id:t,children:[e.CharCode," ",Object(j.jsx)("span",{className:"green",children:a})]},t):Object(j.jsxs)("div",{className:"Card__line",id:t,children:[e.CharCode," ",Object(j.jsx)("span",{className:"red",children:a})]},t)}))})}}]),a}(n.Component)),f=(a(20),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeActiveVal1=function(e){n.setState({ActiveVal1:e});var t=n.state.Val.filter((function(t){return t.CharCode===e})),a=n.state.Val.filter((function(e){return e.CharCode===n.state.ActiveVal2})),c=(n.state.Sum*t[0].Value/a[0].Value).toFixed(3);n.setState({Cost2:c})},n.changeActiveVal2=function(e){n.setState({ActiveVal2:e});var t=n.state.Val.filter((function(e){return e.CharCode===n.state.ActiveVal1})),a=n.state.Val.filter((function(t){return t.CharCode===e})),c=(n.state.Cost2/t[0].Value*a[0].Value).toFixed(3);n.setState({Sum:c})},n.changeCost=function(e){var t=n.state.Val.filter((function(e){return e.CharCode===n.state.ActiveVal1})),a=n.state.Val.filter((function(e){return e.CharCode===n.state.ActiveVal2})),c=(e.target.value*t[0].Value/a[0].Value).toFixed(3);n.setState({Cost2:c,Sum:e.target.value})},n.changeSum=function(e){var t=n.state.Val.filter((function(e){return e.CharCode===n.state.ActiveVal1})),a=n.state.Val.filter((function(e){return e.CharCode===n.state.ActiveVal2})),c=(e.target.value/t[0].Value*a[0].Value).toFixed(3);n.setState({Sum:c,Cost2:e.target.value})},n.changeWallet=function(e){var t=e.target.value;n.setState({ActiveWall:t})},n.state={Val:[0],ActiveVal1:"SEK",ActiveVal2:"USD"},n.changeActiveVal1=n.changeActiveVal1.bind(Object(h.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((function(e){return e.json()})).then((function(t){var a=Object.values(t.Valute);e.setState({Val:a})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Main",children:[Object(j.jsx)(v,{}),Object(j.jsx)("div",{className:"Line",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"AllVals",children:[Object(j.jsx)("div",{className:"Row1",children:Object(j.jsx)(d,{changeActiveVal:this.changeActiveVal1})}),Object(j.jsx)("div",{className:"Row2",children:Object(j.jsx)(d,{changeActiveVal:this.changeActiveVal2})}),Object(j.jsx)("div",{className:"Col2",children:Object(j.jsx)(C,{val1:this.state.ActiveVal1,val2:this.state.ActiveVal2,onChange1:this.changeCost,onChange2:this.changeSum,cost1:this.state.Sum,cost2:this.state.Cost2,onChangeWallet:this.changeWallet})})]})]})}}]),a}(n.Component)),O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)(f,{})}}]),a}(n.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),V()}],[[21,1,2]]]);
//# sourceMappingURL=main.f3d4343d.chunk.js.map