import React from 'react';
import {Button,Container,Row,Col} from 'reactstrap';
import { fetchNotes,fetchNote, addNote} from'./api';
import Websocket from 'react-websocket';

//Components 
import ListNotes from "./components/ListNotes.component";
import AddNoteForm from './components/AddNoteForm.component';
import EditNoteForm from './components/EditNoteForm.component';

 
class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      notes:[], //the actual notes array
      note:{}, //Content of the Note particular notes
      current_notes_id:0,
      is_creating:true ,
      is_fetching:true,
    }

    this.getData=this.getData.bind(this);
    this.handleSaveNote=this.handleSaveNote.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);
  }

//onclick to Adds New Notes
  handleAddNotes=()=>
  {
    this.setState(()=>{
      return{is_creating:true}
    })
  }


  componentDidMount(){
    this.getData()
  }

  async getData(){
    let data=await fetchNotes();
    this.setState({notes:data});
  }

  async handleItemClick(id){
    let selected_note=await fetchNote(id);
    this.setState(()=>{
      return{
        is_creating:false,
        current_notes_id:id,
        note:selected_note,
      }
    })
  }

 
 async handleSaveNote(data){
    await addNote(data);
    await this.getData();

  }

  handleData=(data)=>{
    let result= JSON.parse(data);
    let current_notes=this.state.note;
    if(current_notes.id===result.id){
      this.setState({note:result});
    }
  }

  handleOnChange=(e)=>{
    let content=e.target.value;
    let current_note=this.state.note;
    current_note.content=content;

    this.setState({
      note:current_note
    });

    const socket=this.refs.socket;
    socket.state.ws.send(JSON.stringify(current_note));

  }

  render(){
    return(
      <React.Fragment>
        <Container>
          <Row>
            <Col xs='10' className="Notes-title">
              <h2>Realtime Notes App</h2>
            </Col>
            <Col xs='2'>
              <Button color="primary" onClick={this.handleAddNotes}>Add Notes</Button>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <ListNotes notes={this.state.notes } handleItemClick={(id)=>this.handleItemClick(id)}/>
            </Col>
            <Col xs="8">
              {
                this.state.is_creating?
                <AddNoteForm handleSave={this.handleSaveNote}/>:
                <EditNoteForm handleChange={this.handleOnChange} note={this.state.note}/>
              }
              <Websocket ref="socket" url='ws://127.0.0.1:8000/ws/notes'
              onMessage={this.handleData.bind(this)}/>
            </Col>
          </Row>
        </Container>
       
      </React.Fragment>
    );
  }
}

export default App;
