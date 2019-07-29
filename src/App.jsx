import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      notes: [],
      noteInputValue : ''
    };
 
  }
  handleNoteInputChange = (e) => {
    this.setState({noteInputValue : e.target.value});
  }
  handleAddNoteClick = (e) => {
    e.preventDefault();

    var note = {
      id:Date.now(),
      text:this.state.noteInputValue
    }
    var newNotes =[note,...this.state.notes];
    this.setState({
      notes:newNotes,
      noteInputValue:''
    });
  }

  removeNote = (noteId) => {
    var notes = this.state.notes;
    var filteredNotes = notes.filter(function(item){ 
      return item.id != noteId;
    });
    this.setState({notes:filteredNotes});
  }

  render(){
      return (
          <div className="wrap">
            <div className="container">
              <div className="notes">
                {
                  this.state.notes.map((note) => {
                    return (
                      <div className="note" key={note.id}>
                        <div className="note-body">
                          <i onClick={(e) => { this.removeNote(note.id)}} className="far fa-times-circle note-remove"></i>
                          <div className="note-text">
                            {note.text}
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
                <div className="note new-note">
                  <form className="note-body">
                      <div className="form-group">
                        <label htmlFor="note-input">New note</label>
                        <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}/>
                      </div>
                      <button id="add-note" type="submit" className="btn btn-primary" onClick={this.handleAddNoteClick}>Add</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      );
  }
}
export default App;




