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
        <header className="tip-header">
          <p>Tips</p>
        </header>
        <div className="row">
          <div className="col">Use the following link to organize your classes.  
            <a
                className="App-link"
                href="https://pop.weclarify.com/?fbclid=IwAR0q59JrJ6ym61_Jx8QYJgoTaWEcp3-AKQ0uRG8HmCeoD2hxXY7SXQzvPZw"
                target="_blank"
                rel="noopener noreferrer">

                Click here! Clarify is ready for registration at Illinois Tech
            </a>
          </div>
          <div className="col">Gradually study to prepare for your exams. Even if you study for a few minutes each day.</div>
          <div className="w-100"></div>
          <div className="col">Always look at your requirements and audits. Ensure that you plan out your semesters to have some variety.</div>
          <div className="col">If you plan on going through the co-terminal program. Plan your courses. You never want to take too many grad classes at the same time.</div>
        </div>

        <div className="row">
          <div className="col">Take advantage of the events held by the school.</div>
          <div className="col">Ask questions in the Facebook Illinois Tech Community page.</div>
          <div className="col">Do not wait the last minute to get help from the professors.</div>
          <div className="col">If you write goals or plans, you are more likely to complete them.</div>
        </div>

      </div>
    );
  }
}

export default Tips;