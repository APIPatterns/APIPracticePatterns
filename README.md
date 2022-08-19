# Patterns for creating an API Stewardship Practice

This set of patterns is intended for use by Architects, Developers, and Managers who are building and delivering a large number of services that comprise a platform. These services are built by different, often geo-dispersed teams, with varying levels of skills. Over time, what starts out as an elegant vision of a consistent and beautiful API becomes a hodgepodge of things that look similar but are just different enough to cause friction.

These patterns reflect many of our experiences working on Microsoft's Azure API Stewardship Board. They try to capture the essence of what we've learned from working across the Azure service teams, talking with our customers, field teams, and those in the industry passionate about APIs. They are a key ingredient to how we can scale to deliver thousands of APIs and hundreds of SDKs across the Azure surface area.

* "Grow an Orchard" -- Stewardship vs. Governance
  * Educate, enable, empower
* "Design a Hammer" -- Build an API people know how to use just by looking at it
  * Naming
  * Operations (GET, PUT, PATCH, blah blah blah)
  * Structure
  * Return values

* "Read the fine print" -- APIs are contracts
* "Clarity is kindness" -- Create an API Guidelines document
* "You break it. You bought it." -- Define what a breaking change is. Create a policy around them.

* "One way to skin a cat." -- Create a style guide.
* "Death by a thousand cuts" -- Strive for consistency across their API surface area

* "Measure twice. Cut once." -- API First Design
  * Mock servers
  * Sample code
  * Get feedback
* "A rose by any other name" -- Names are important
  * Core concents - Nouns
* "Stop. Drop. And Roll" -- Are you building the right thing?  

* "Blame the tool" -- Linting

* "Paint by numbers" -- Correctness by construction (Cadl)
  * API Definition Language
* " ?? " -- Idiomatic implementations & SDKs
  
* "Wash-Rinse-Repeat" -- Automation for scale
* "Trust, but verify" -- "Live" validation
  * API drift
* "Fish where the fish are" -- Deliver the information where it will be used
  * Teams/slack integration
  * Repo pipelines
