class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  showLieferstatus = () => {
    const message = this.createChatBotMessage(
      "Die Lieferung befindet sich momentan in Rotterdam und wird in 2 Tagen die Lieferadresse erreichen"
    );

    this.updateChatbotState(message);
  };

  changeLieferung = () => {
    const message = this.createChatBotMessage(
      "Leider können Sie keine Anpassungen mehr an Ihrer Lieferung vornehmen."
    );

    this.updateChatbotState(message);
  };

  absenderinformationen = () => {
    const message = this.createChatBotMessage(`Absender: 🇨🇴 Beauty 🇨🇴`);

    this.updateChatbotState(message);

    const messageTwo = this.createChatBotMessage(
      `Der Absender hat eine Notiz zur Lieferung verfasst. Möchten Sie sie lesen?`,
      {
        widget: "yesNoOptions",
      }
    );

    this.updateChatbotState(messageTwo);
  };

  konamiHelp = () => {
    const message = this.createChatBotMessage(
      "Der Weg ist das Spiel. Sagt dir der Konami Code etwas?"
    );

    this.updateChatbotState(message);
  };

  askForPassword = () => {
    const message = this.createChatBotMessage(
      "Bitte geben Sie das Kennwort ein um die Notiz zu lesen."
    );
    this.updateChatbotState(message);
    const passwordMessage = this.createChatBotMessage(
      "Falls Sie kein Kennwort erhalten haben, senden Sie eine E-Mail mit dem Betreff (SBX007) an admin@ranzen.tech"
    );
    this.updateChatbotState(passwordMessage);
  };

  showNote = () => {
    const message = this.createChatBotMessage(
      `Hello underbernd, I'm happy that we can make some serious business here. 
      I urgently need to do money laudery with my income from the make-up boxes 🤑🤑🤑  
      Production of senseBox christmas edition is already running at full speed.`
    );

    this.updateChatbotState(message);

    const messagee = this.createChatBotMessage(
      `You can also log in to the admin panel (https://admin.ranzen.tech/) if you want.
      You can find the password on my tshirt in my Instagram post on may 20 2021.
      The 4 digit 2FA code is located on opensensemap.org`
    );

    this.updateChatbotState(messagee);

    const messageee = this.createChatBotMessage(`xoxo @sensebox 🇨🇴 ❤️❤️`);

    this.updateChatbotState(messageee);
  };

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
