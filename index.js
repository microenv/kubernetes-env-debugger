const http = require('http');

const name = process.env.NAME || 'kubernetes-env-debugger';
const port = process.env.PORT || '3000';

const app = new http.Server();

const getEnvHtml = function() {
  let html = '<table><thead><tr><th>ENV NAME</th><th>ENV VALUE</th></tr><tr><td colspan="2"></td></tr></thead><tbody>';
  for(let key in process.env) {
    if(process.env.hasOwnProperty(key)) {
      html += `<tr><th>${key.toUpperCase()}</th><td>${process.env[key]}</td></tr>`;
    }
  }
  html += '</tbody></table>';
  return html;
};

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<!doctype html><html><body>${getEnvHtml()}</body></html>`);
  res.end('\n');
});

app.listen(port, () => {
  console.log(`${name} is listening on port ${port}`);
});
