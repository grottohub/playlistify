const fs = require('fs');

class Logger {
  constructor() {
    this.path = '/exceptions/logs';
  }

  log(err, className) {
    const timestamp = new Date().toISOString();
    const file = `${this.path}/${timestamp}.log`;
    let content = `Exception occurred via ${className} on ${new Date().toDateString()}:\n`;

    Object.keys(err).forEach((key) => {
      content += `${key}: ${err[key]}\n`;
    });

    fs.writeFile(file, content);
  }
}

module.exports = new Logger();