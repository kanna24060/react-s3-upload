import React, { RefObject } from "react";
import "./App.css";
import logo from "./tensult-text-logo-latest.svg";

import  { Storage } from "aws-amplify";
//import awsconfig from "./aws-exports";
import { withAuthenticator, S3Text } from "aws-amplify-react";
import Button from "@material-ui/core/Button";
import { LinearProgress } from "@material-ui/core";

// Amplify.configure(awsconfig);
 import { Amplify } from 'aws-amplify';

   Amplify.configure({
   Auth: { 
       identityPoolId: 'us-east-1:17c82090-a71b-4f14-ab15-adcbbec4c010',
       region: 'us-east-1',
       userPoolId: 'us-east-1_UZoqEsmAG',
       userPoolWebClientId: '6d48ta9aqo5nc5p8bi6lklf86', 
   }});

Storage.configure({ level: "private" });

class App extends React.Component {
  fileInput: RefObject<any>;
  constructor(props: any) {
    super(props);
    this.fileInput = React.createRef();
  }
  progressCallback = (progress: any) => {
    this.setState({ fileProgress: 100 * (progress.loaded / progress.total) });
  };
  uploadFile = () => {
    const file = this.fileInput.current.files[0];
    const name = file.name;

    Storage.put(name, file, { progressCallback: this.progressCallback }).then(
      () => {
        this.setState({ file: name });
      }
    );
  };

  render() {
    const fileProgress = this.state ? (this.state as any).fileProgress : 0;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App">
            
          <img src={logo} className="App-logo" alt="Tensult" />
            <p> Pick a file</p>
            <input type="file" ref={this.fileInput} />
            <S3Text level="private" path="" />
            <Button
              variant="contained"
              color="primary"
              onClick={this.uploadFile}
            >
              Upload
            </Button>
            <br /> <br />
            {fileProgress > 0 && 
              <LinearProgress variant="determinate" value={fileProgress} />
            }
          </div>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
