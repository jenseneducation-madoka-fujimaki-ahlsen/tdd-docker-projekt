module.exports = {
  "Demo test Google": function(client) {
    client
      .url("http://localhost:8080/")
      .waitForElementVisible("body", 1000)
      .assert.title("tdd-docker-projekt")
      .assert.visible(".login-button")
      .click(".login-button")
      .setValue(".username", "Madoka")
      .setValue(".password", "madoka123")
      .waitForElementVisible("button", 1000)
      .click("button")
      .pause(1000)
      .acceptAlert()
      .assert.visible(".log-out-button")
      .end();
  },
};
