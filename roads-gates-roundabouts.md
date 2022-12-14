# Roads, gates, & roundabouts

One of the things we strive for in Azure is a clean, consistent, and intuitive API across the entire set of services. In the early days of Azure, this was a much easier challenge. However, as Azure grew rapidly, it seemed that there was a new service team every day! And these teams built their APIs just differently enough to cause friction in the developer experience and additional challenges when building SDKs. Sound familiar?

We addressed it by establishing a Review Board that would approve an API definition before it was allowed to be released. However, we encountered several challenges with this approach. First, Azure continued to grow. It wasn't just that we continued to add more and more services, but the capability--and the API surface area--of existing services expanded. Second, as this growth happened, service teams became larger and more geographically dispersed. Third, and this is the biggest challenge, service teams viewed this as a check box--a step in the process necessary for a release. This meant that when service teams came to a review, it was *at the end* of their development cycle.

It was not uncommon for the architects and engineers that deeply understand APIs to find issues with the API. Sometimes these were minor, e.g. specifying a default value or range incorrectly. Often, they were the unaware of how constructs, e.g. `null`, manifested itself across different programming languages. However, there were also bigger issues, for example using `POST` to create resources in a non-idempotent manner, that could lead to unexpected behavior and the dreaded support call.

Because service teams came to the Review Board *after* their service was built and their API created, these challenges made it difficult for them to incorporate recommendations and changes that would significantly improve the API and overall developer experience. Creating an approval gate that teams had to pass through before they could release their service resulted in constantly creating exceptions, inconsistent APIs, and more importantly frustration for everyone involved.

We needed to find another way.

## Educate. Enable. Empower.
