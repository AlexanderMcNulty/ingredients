var React =  require('react');
var ReactDOM = require('react-dom');
var Manager = require('./components/Manager.jsx');

var content = {
  white:[{num:"20", text:"New followers added this month"},
          {num:"$1250", text:"Average Monthly Income"},
          {num:"$13865", text:"Yearly income Goal"}],
  jumbo:[{color:'#0096d0', text:[{num:15080,text:"Shot Views"},{num:12000,text:"Likes"},{num:5100,text:"Comments"}]},
          {color:'#cd59ae', text:[{num:15080,text:"Shot Views"},{num:12000,text:"Likes"},{num:5100,text:"Comments"}]}],
  small:[{color:'#0096d0', text:"New visitors", num:"1.5k"},
          {color:'#b28ad6', text:"Bounce Rate", num:"50%"},
          {color:'#ff4826', text:"Searchs", num:"28%"},
          {color:'#63c254', text:"Traffic", num:"140.5kb"}],
  special:{color:'#ff8a00', text:"Paris", num:"18°"}
}

ReactDOM.render(
    <Manager content={content} />, document.getElementById('manager')
  );
