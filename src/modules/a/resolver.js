const { Message } = require('../../connectors/message.ts');

const resolver = {
  Query: {
    sendMessage() {
      const msg = new Message();
      return msg.send();
    }
  }
};

exports.resolver = resolver;
