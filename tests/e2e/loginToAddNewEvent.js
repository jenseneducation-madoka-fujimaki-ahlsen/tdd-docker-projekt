module.exports = {
  "Login to add a new event": function(client) {
    client
      .url("http://localhost:8080/")
      .waitForElementVisible("body", 1000)
      .assert.title("tdd-docker-projekt")
      //login -------------------------------------------------------------------
      .assert.visible(".login-button")
      .click(".login-button")
      .setValue(".username", "Madoka")
      .setValue(".password", "madoka123")
      .waitForElementVisible("button", 1000)
      .click("button")
      .pause(1000)
      //alert ---------------------------------------------------------------------
      .acceptAlert()
      //show add event form -------------------------------------------------------
      .assert.visible(".event-form-button")
      .click(".event-form-button")
      .setValue(".title", "Test event title")
      .setValue(".description", "Test description")
      .setValue(".place", "Testplan")
      .setValue(".date", "002020-11-11")
      .waitForElementVisible("input.file-button", 1000)
      .pause(1000)
      .setValue(
        "input#selectedFile",
        require("path").resolve(__dirname + "/run.jpg")
      )
      .pause(1000)
      .click(".add-event-button")
      .pause(1000)
      //show top page -----------------------------------------------------------
      .assert.visible(".event-wrap > #event-list > #event:last-of-type")
      .assert.containsText(
        ".event-wrap > #event-list > #event:last-of-type >.event-wrap > .title",
        "Test event title"
      )
      .end();
  },
};
