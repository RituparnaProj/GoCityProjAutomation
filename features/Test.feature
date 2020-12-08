Feature: GoCity Sample Scenarios


Scenario: How it works

Given I am on the Go City Products page
When I select How it works
Then I should see how it works page 


Scenario: Plan your trip

Given I am on the Go City Products page
When I select Plan your trip
Then I fill in the details for the trip and select get your guidebook
Then I should see Guide Book page



