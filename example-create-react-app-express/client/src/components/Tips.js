import React, { Component } from 'react';

class Tips extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div className="App">
        <header className="Tip-header">
          <p>Tips</p>
        </header>
        <div class="row">
        <div class="col">Use this link to organize your classes.</div>
        <div class="col">Gradually study to prepare for your exams. Even if you study for a few minutes each day.</div>
        <div class="w-100"></div>
        <div class="col">Always look at your requirements and audits. Ensure that you plan out your semesters to have some variety.</div>
        <div class="col">{this.state.responseToPost}</div>
        </div>
      </div>
    );
  }
}

export default Tips;