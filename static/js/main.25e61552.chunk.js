(this["webpackJsonpevent-manager"]=this["webpackJsonpevent-manager"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),s=n.n(a),c=n(9),i=n.n(c),o=(n(65),n(66),n(119)),l=n(120),u=n(118),d=n(42),h=n.n(d),v=(n(67),n(32)),j=n(16),b=n(17),m=n(23),p=n(20),E=(n(68),n(13)),O=n(39),g=(n(69),function(e){var t=e.handleChange,n=e.isError,a=e.label,s=Object(O.a)(e,["handleChange","isError","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(E.a)({className:n?"form-input error":"form-input",onChange:t},s)),Object(r.jsx)("label",{className:s.value.length?"shrink form-input-label":"form-input-label",style:n?{color:"red"}:null,children:a})]})}),f=(n(70),function(e){var t=e.children,n=e.disabled,a=Object(O.a)(e,["children","disabled"]);return Object(r.jsx)("button",Object(E.a)(Object(E.a)({},a),{},{disabled:n,className:n?"disabled-button custom-button":"custom-button",children:t}))}),x=n(29),N=n.n(x),D="https://database2021.herokuapp.com",y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t,n,a={id:r.state.eventName+r.state.venue+r.state.price,Description:r.state.description,Discount:r.state.discount,Event_Name:r.state.eventName,Price:r.state.price,Venue:r.state.venue};console.log("event Data is",a);try{t="/events",n=a,N.a.post(D+t,Object(E.a)({},n))}catch(s){console.log("error in post request")}},r.handleChnage=function(e){var t=e.target,n=t.name,a=t.value,s=t.validity;r.validateForm(n,a,s),r.setState(Object(v.a)({},"".concat(n),a))},r.resetForm=function(){r.setState({eventName:"",description:"",venue:"",price:"",discount:"",hasEventNameError:!1,hasDescriptionError:!1,hasVenueError:!1,hasPriceError:!1,hasDiscountError:!1,eventNameErrorMsg:"",descriptionErrorMsg:"",venueErrorMsg:"",priceErrorMsg:"",discountErrorMsg:""})},r.validateForm=function(e,t,n){if("eventName"===e&&(n.valid?r.setState({hasEventNameError:!1,eventNameErrorMsg:""}):r.setState({hasEventNameError:!0,eventNameErrorMsg:"Event name cannot be Empty"})),"description"===e&&(n.valid?r.setState({hasDescriptionError:!1,descriptionErrorMsg:""}):r.setState({hasDescriptionError:!0,descriptionErrorMsg:"Description cannot be Empty"})),"venue"===e&&(n.valid?r.setState({hasVenueError:!1,venueErrorMsg:""}):r.setState({hasVenueError:!0,venueErrorMsg:"Venue cannot be Empty"})),"price"===e)if(n.valid)r.setState({hasPriceError:!1,priceErrorMsg:""});else{r.setState({hasPriceError:!0,priceErrorMsg:"price is mandatory and cannot be less than one"})}if("discount"===e){var a="discount percentage cannot be empty";t<0&&(a="discount percentage cannot be less than zero"),t>100&&(a="discount percentage cannot be greater than 100"),n.valid?r.setState({hasDiscountError:!1,discountErrorMsg:""}):r.setState({hasDiscountError:!0,discountErrorMsg:a})}},r.state={eventName:"",description:"",venue:"",price:"",discount:"",hasEventNameError:!1,hasDescriptionError:!1,hasVenueError:!1,hasPriceError:!1,hasDiscountError:!1,eventNameErrorMsg:"",descriptionErrorMsg:"",venueErrorMsg:"",priceErrorMsg:"",discountErrorMsg:""},r}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.eventName,a=t.description,s=t.venue,c=t.price,i=t.discount,o=t.hasDiscountError,l=t.hasEventNameError,u=t.hasDescriptionError,d=t.hasVenueError,h=t.hasPriceError,v=t.priceErrorMsg,j=t.discountErrorMsg,b=t.eventNameErrorMsg,m=t.descriptionErrorMsg,p=t.venueErrorMsg;return Object(r.jsx)("div",{className:"form-container",children:Object(r.jsxs)("form",{className:"add-new-event-form",onSubmit:this.handleSubmit,children:[Object(r.jsx)(g,{type:"text",isError:l,name:"eventName",label:"Event Name",value:n,required:!0,onBlur:function(t){e.validateForm(t.target.name,t.targetvalue,t.target.validity)},handleChange:this.handleChnage}),l&&Object(r.jsx)("span",{className:"errorMessage",children:b}),Object(r.jsx)(g,{type:"text",name:"description",label:"Event Description",value:a,isError:u,required:!0,onBlur:function(t){e.validateForm(t.target.name,t.targetvalue,t.target.validity)},handleChange:this.handleChnage}),u&&Object(r.jsx)("span",{className:"errorMessage",children:m}),Object(r.jsx)(g,{type:"text",name:"venue",label:"Event Venue",value:s,isError:d,required:!0,onBlur:function(t){e.validateForm(t.target.name,t.targetvalue,t.target.validity)},handleChange:this.handleChnage}),d&&Object(r.jsx)("span",{className:"errorMessage",children:p}),Object(r.jsx)(g,{type:"number",name:"price",label:"Price",min:"1",value:c,isError:h,required:!0,onBlur:function(t){e.validateForm(t.target.name,t.targetvalue,t.target.validity)},handleChange:this.handleChnage}),h&&Object(r.jsx)("span",{className:"errorMessage",children:v}),Object(r.jsx)(g,{type:"number",name:"discount",label:"Discount Percentage",value:i,isError:o,min:"0",max:"100",required:!0,onBlur:function(t){e.validateForm(t.target.name,t.targetvalue,t.target.validity)},handleChange:this.handleChnage}),o&&Object(r.jsx)("span",{className:"errorMessage",children:j}),Object(r.jsxs)("div",{className:"form-button",children:[Object(r.jsx)(f,{type:"submit",children:"Add New Event "}),Object(r.jsx)(f,{type:"button",onClick:this.resetForm,children:"Reset"})]})]})})}}]),n}(s.a.Component),M=n(41),C=n.n(M),S=n(53),F=(n(89),n(90),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).state={allEvents:[]},r}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.eventData,t=e.Description,n=e.Discount,a=e.Event_Name,s=e.Price,c=e.Venue;return Object(r.jsxs)("div",{className:"each-event-container",children:[Object(r.jsxs)("div",{className:"event-item",children:[" ",Object(r.jsx)("span",{children:"Event Name"}),"           ",Object(r.jsx)("span",{children:a})," "]}),Object(r.jsxs)("div",{className:"event-item",children:[" ",Object(r.jsx)("span",{children:"Event Description"}),"    ",Object(r.jsxs)("span",{children:[" ",t," "]})," "]}),Object(r.jsxs)("div",{className:"event-item",children:[" ",Object(r.jsx)("span",{children:"Event Venue"}),"          ",Object(r.jsxs)("span",{children:[" ",c," "]})," "]}),Object(r.jsxs)("div",{className:"event-item",children:[" ",Object(r.jsx)("span",{children:"Event Price"}),"          ",Object(r.jsxs)("span",{children:[" ",s," "]})," "]}),Object(r.jsxs)("div",{className:"event-item",children:[" ",Object(r.jsx)("span",{children:"Event Discount"}),"       ",Object(r.jsxs)("span",{children:[n," % "]}),"  "]})]})}}]),n}(s.a.Component)),V=(n(91),function(e){var t=e.name,n=e.id,a=e.options,s=e.defaultValue,c=e.handleChange;return Object(r.jsx)("select",{className:"select-css",name:t,id:n,defaultValue:s,onChange:function(e){return c(e.target.value)},children:a.map((function(e,t){return Object(r.jsx)("option",{value:e.value,children:e.value},t+n)}))},n)}),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).filterOptions=[{value:"ALL"},{value:"Free"},{value:"Discount"},{value:"No Discount"}],r.handelFilterChangeEvent=function(e){var t=[];"ALL"===e&&(t=r.state.allEvents),"Free"===e&&(t=r.state.allEvents.filter((function(e){return"100"===e.Discount}))),"Discount"===e&&(t=function(e){return e.filter((function(e){return"0"!==e.Discount}))}(r.state.allEvents)),"No Discount"===e&&(t=function(e){return e.filter((function(e){return"0"===e.Discount}))}(r.state.allEvents)),r.setState({eventsToDisplay:t})},r.state={allEvents:[],eventsToDisplay:[]},r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n="/events",N.a.get(D+n);case 3:t=e.sent,this.setState({allEvents:t.data,eventsToDisplay:t.data}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}var n}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"filter-event-container",children:[Object(r.jsxs)("div",{children:["Filter By: \xa0 - \xa0\xa0",Object(r.jsx)(V,{name:"filter",id:"filter",options:this.filterOptions,defaultValue:"ALL",handleChange:this.handelFilterChangeEvent})]}),0===this.state.eventsToDisplay.length?Object(r.jsx)("div",{className:"no-events",children:"No events found"}):Object(r.jsx)("div",{className:"event-container",children:this.state.eventsToDisplay.map((function(e,t){return Object(r.jsx)(F,{eventData:e},t)}))})]})}}]),n}(s.a.Component),P=function(){return Object(r.jsxs)("div",{className:"accordion-container",children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)(l.a,{expandIcon:Object(r.jsx)(h.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(r.jsx)("h2",{className:"accordion-header",children:"ADD NEW EVENT"})}),Object(r.jsx)(u.a,{children:Object(r.jsx)(y,{})})]}),Object(r.jsxs)(o.a,{defaultExpanded:!0,children:[Object(r.jsx)(l.a,{expandIcon:Object(r.jsx)(h.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:Object(r.jsx)("h2",{className:"accordion-header",children:"ALL EVENTS"})}),Object(r.jsx)(u.a,{children:Object(r.jsx)(k,{})})]})]})};var L=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(P,{})})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.25e61552.chunk.js.map