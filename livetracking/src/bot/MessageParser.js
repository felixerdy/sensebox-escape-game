class MessageParser {
  SUPERSECRETPASSWORD = "password";

  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("lieferung ändern")) {
      this.actionProvider.changeLieferung();
    }

    if (lowerCaseMessage.includes("absenderinformationen")) {
      this.actionProvider.absenderinformationen();
    }

    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.konamiHelp();
    }

    if (lowerCaseMessage.includes(this.SUPERSECRETPASSWORD)) {
      this.actionProvider.showNote();
    }
  }
}

export default MessageParser;
