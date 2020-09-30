module.exports = {
  "Login to set review": function(client) {
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
      //alert -------------------------------------------------------------------
      .acceptAlert()
      //show top page -----------------------------------------------------------
      .assert.visible(".log-out-button")
      .assert.containsText(".eventTab > a", "Alla kommande evenemang")
      .assert.visible(".event-wrap > #event-list")
      .assert.visible(".event-wrap > #event-list > #event")
      //join event ---------------------------------------------------------------
      .assert.visible(".event-wrap > #event-list > #event > .join-button")
      .click(".event-wrap > #event-list > #event > .join-button")
      // .execute(function() {
      //   document.querySelector(".join-button").click();
      // })
      .assert.visible(".event-wrap > #event-list > #event > .remove-button")
      //show past events ------------------------------------------------------------
      .assert.visible(".eventTab > a:nth-child(3)")
      .click(".eventTab > a:nth-child(3)")
      //show past events detail ------------------------------------------------------
      .assert.visible(".event-wrap > #event-list > #event")
      .click(".event-wrap > #event-list > #event:nth-child(1)")
      .assert.visible(".event-wrap > #event-list > #event > #event-detail")
      .assert.visible(
        ".event-wrap > #event-list > #event > #event-detail > .event-detail-wrap > .detail-with-review > .review-button-wrap > .button-wrap > button:nth-child(1)"
      )
      .click(
        ".event-wrap > #event-list > #event > #event-detail > .event-detail-wrap > .detail-with-review > .review-button-wrap > .button-wrap > button:nth-child(1)"
      )
      //show review form ------------------------------------------------------
      .assert.visible(
        ".event-wrap > #event-list > #event > #event-detail > #set-review"
      )
      .assert.visible(
        ".event-wrap > #event-list > #event > #event-detail > #set-review > .set-review-wrap > textarea"
      )
      .setValue(
        ".event-wrap > #event-list > #event > #event-detail > #set-review > .set-review-wrap > textarea",
        "test test test"
      )
      .assert.visible(
        ".event-wrap > #event-list > #event > #event-detail > #set-review > .set-review-wrap > .button-wrap > .update"
      )
      .click(
        ".event-wrap > #event-list > #event > #event-detail > #set-review > .set-review-wrap > .button-wrap > .update"
      )
      //go back to event detail modal ------------------------------------------------------
      .assert.visible(
        ".event-wrap > #event-list > #event > #event-detail > .event-detail-wrap > .detail-with-review > #individual-review > .individual-review-wrap > p"
      )
      .assert.containsText(
        ".event-wrap > #event-list > #event > #event-detail > .event-detail-wrap > .detail-with-review > #individual-review > .individual-review-wrap > p",
        "test test test"
      )
      .end();
  },
};
