import React,{Component} from 'react';
import API, {captureUserMedia} from '../API/API';
import Webcam from './error';
import RecordRTC from 'recordrtc';
import { Modal } from 'react-bootstrap';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class RecordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordVideo: null,
      src: null,
      uploadSuccess: null,
      uploading: false
    };

    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
  }

  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log('requestUserMedia')
    captureUserMedia((stream) => {
      this.setState({ src: window.URL.createObjectURL(stream) });
      console.log('setting state', this.state)
    });
  }

  startRecord() {
    captureUserMedia((stream) => {
      this.state.recordVideo = RecordRTC(stream, { type: 'video' });
      this.state.recordVideo.startRecording();
    });

    setTimeout(() => {
      this.stopRecord();
    }, 10000);
  } 

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      let params = this.state.recordVideo.getBlob();
      console.log(params.data)
      this.setState({ uploading: true });

      API.uploadVideo(params)
      .then((success) => {
        console.log('enter then statement')
        if(success) {
          console.log(success)
          this.setState({ uploadSuccess: true, uploading: false });
        }
      }, (error) => {
    
      })
    });
  }

  render() {
    return(
      <div>
        <Modal show={this.state.uploadSuccess}></Modal>
        <div><Webcam src={this.state.src}/></div>
        {this.state.uploading ?
          <div>Uploading...</div> : null}
        <div><button onClick={this.startRecord}>Start Record</button></div>
      </div>
    )
  }
}

export default RecordPage;

