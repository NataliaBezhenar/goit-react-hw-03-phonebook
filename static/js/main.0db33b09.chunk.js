(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),s=(n(15),n(10)),i=n(4),u=n(5),l=n(7),d=n(6),h=n(2),b=n.n(h),m=(n(24),n(25),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=b.a.generate(),e.numberInputId=b.a.generate(),e.handleNameChange=function(t){e.setState({name:t.currentTarget.value})},e.handleNumberChange=function(t){e.setState({number:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name,e.state.number),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"Phonebook",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,className:"Phonebook__label",children:["Name",Object(m.jsx)("input",{className:"Phonebook__input",type:"text",name:"name",value:this.state.name,onChange:this.handleNameChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:this.nameInputId,placeholder:"John Johnson"})]}),Object(m.jsxs)("label",{htmlFor:this.numberInputId,className:"Phonebook__label",children:["Number",Object(m.jsx)("input",{className:"Phonebook__input",type:"tel",name:"number",value:this.state.number,onChange:this.handleNumberChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:this.numberInputId,placeholder:"320-320-320"})]}),Object(m.jsx)("button",{className:"Phonebook__button",type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=j,f=(n(27),function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:"ContactList",children:t.map((function(e){return Object(m.jsxs)("li",{className:"ContactList__item",children:[e.name,": ",e.number,Object(m.jsx)("button",{className:"ContactList__button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})}),C=(n(28),function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:"Filter__label",children:["Find contacts by name:"," ",Object(m.jsx)("input",{type:"text",className:"Filter__input",value:t,onChange:n})]})}),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){var a=e.state.contacts;if(a.find((function(e){return e.name===t})))alert(t+" is already in contacts");else{var r={id:b.a.generate(),name:t,number:n};e.setState((function(){return{contacts:[r].concat(Object(s.a)(a))}}))}},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getFilteredContacts();return Object(m.jsxs)("div",{className:"Phonebook__wrapper",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(p,{onSubmit:this.addContact}),Object(m.jsx)("h2",{children:"Contacts "}),Object(m.jsx)(C,{value:e,onChange:this.changeFilter}),Object(m.jsx)(f,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),g=O;o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0db33b09.chunk.js.map