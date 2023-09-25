import React from "react";
import "./App.css";
import { marked } from "marked";

const defaultText = `# Hedding 1
## Hedding 2

**Bold Text**

- Apple
- Mango
- Banana

[Visit freecodecamp](www.freecodecamp.org)

this is \`<div>Inline Div</div>\`

block of code

\`\`\`
let x = 2;
let y = 2;
let z = x + y
\`\`\`

 > Block Quotes!

![logo]( https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  state = {
    text: defaultText,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const rawMarkup = marked.parse(text, { breaks: true });

    return (
      <div className="markdown-container container-fluid">
        <h4>Markdown Previewer</h4>
        <div className="row my-2">
          <div className="col-6" id="editorWrapper">
            <div className="header bg-primary">
              <h5>Editor</h5>
            </div>
            <textarea
              class="form"
              placeholder="Enter Markup here"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-6" id="previewWrapper">
            <div className="header bg-primary">
              <h5>Previewer</h5>
            </div>
            <div
              className="bg-light"
              id="preview"
              dangerouslySetInnerHTML={{ __html: rawMarkup }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
