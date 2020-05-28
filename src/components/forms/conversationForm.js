import React, {Component} from 'react'

class ConversationForm extends Component {

  componentDidMount() {
    const M = window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems,{});
    });
  }
  

render () {
  return (
    <div>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
        <form >
            <input></input>
        </form>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Create</a>
        </div>
      </div>
    </div>
    )
  }
}

export default ConversationForm