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
    const message = this.createChatBotMessage(
      `Absender: IG: @sensebox, Columbia, https://www.sensebox.com.co/`
    );

    this.updateChatbotState(message);

    const messageTwo = this.createChatBotMessage(
      `Der Absender hat eine Notiz zur Lieferung verfasst. Möchten Sie sie lesen?`,
      {
        widget: "yesNoOptions",
      }
    );

    this.updateChatbotState(messageTwo);
  };

  askForPassword = () => {
    const message = this.createChatBotMessage(
      "Bitte geben Sie das Kennwort ein um die Notiz zu lesen"
    );

    this.updateChatbotState(message);
  };

  showNote = () => {
    const message = this.createChatBotMessage(
      `Hello underbernd, I'm happy that we can make some serious business here. 
      I urgently need to do money laudery with my income from the make-up boxes 🤑🤑🤑  
      Production of senseBox is already running at full speed. 
      You can also log in to the admin panel if you want.
      You can find the password on my tshirt in my Instagram post on may 20 2021
      xoxo sensebox columbia ❤️❤️`
    );

    this.updateChatbotState(message);
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
