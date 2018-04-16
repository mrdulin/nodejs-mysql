class Message {
  constructor(public recipientId: string) {
    this.recipientId = recipientId;
  }

  public send(id, type) {
    return Promise.resolve({
      recipient_id: '123',
      message_id: '122'
    });
  }
}

export { Message };
