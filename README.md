# Patterns for creating an API Stewardship Practice

One of the things we strive for in Azure is a clean, consistent, and intuitive API across the entire set of services. In the early days of Azure, this was a much easier challenge. We addressed it by establishing a Review Board that would approve an API definition before it was allowed to be released. However, we encountered several challenges with this approach. First, Azure continued to grow. It wasn't just that we continued to add more and more services, but the capability--and the API surface area--of existing services expanded. Second, as this growth happened, service teams became larger and more geographically dispersed. Third, service teams viewed this as a check box--a step in the process necessary for a release. This meant that when service teams came to a review, it was *at the end* of their development cycle.

These challenges made it difficult for them to incorporate recommendations and changes that would significantly improve the API and overall developer experience. Creating an approval gate that teams had to pass through before they could release their service resulted in constantly creating exceptions, inconsistent APIs, and more importantly frustration for everyone involved. While a review board was good in theory, in practice it just didn't work. We needed to find another way.

These patterns reflect our journey of working on Microsoft's Azure API Stewardship Board. They try to capture our experiences and the essence of what we've learned from working across the Azure service teams, talking with our customers, field teams, and those in the industry passionate about APIs. They are a key ingredient to how we can scale to deliver thousands of APIs and hundreds of SDKs across the Azure surface area. This set of patterns is intended for use by Architects, Developers, and Managers who are building and delivering a large number of services that comprise a platform and struggle with how to scale while still creating a great developer experience.

We still have a long way to go. In many ways, we are still at the outset of our journey. We are constantly learning from our service partners, uncovering new requirements, and figuring out edge cases. It's our hope that you will join us on this journey, share your experiences, and help us all [grow an orchard](./Grow-an-Orchard.md).

* "[Grow an Orchard](./Grow-an-Orchard.md)" -- Stewardship vs. Governance
  * Educate, enable, empower
  * Measure results
  
* "Tend the garden" -- Invest in stewardship
  * Hire sr. people
  * Identify API champions
  * Add to MBOs.


* "Design a Hammer" -- Build an API people know how to use just by looking at it
  * Naming
  * Operations (GET, PUT, PATCH, blah blah blah)
  * Structure
  * Return values
* "Read the fine print" -- APIs are contracts
* "Clarity is kindness" -- Create an API Guidelines document
* "You break it. You bought it." -- Define what a breaking change is. Create a policy around them.

* "One way to skin a cat." -- Create a style guide.
* "Death by a thousand cuts" -- Strive for consistency across their API surface area. Over time, what starts out as an elegant vision of a consistent and beautiful API becomes a hodgepodge of things that look similar but are just different enough to cause friction.

* "Measure twice. Cut once." -- API First Design
  * Mock servers
  * Sample code
  * Get feedback
* "A rose by any other name" -- Names are important
  * Core concents - Nouns

* "Blame the tool" -- Linting
* "Paint by numbers" -- Correctness by construction (Cadl)
  * API Definition Language
* " ?? " -- Idiomatic implementations & SDKs

* " ?? " -- Invest in API Stewardship. 
* "Whiteboard compatible" -- Are you building the right thing? Establish a practice of previewing APIs. 
* "50 Shades of Grey" -- How to do an API review
* "Hold the line" -- Enforcing your breaking change policy

* "Wash-Rinse-Repeat" -- Automation for scale
* "Trust, but verify" -- "Live" validation
  * API drift
* "Fish where the fish are" -- Deliver the information where it will be used
  * Teams/slack integration
  * Repo pipelines
