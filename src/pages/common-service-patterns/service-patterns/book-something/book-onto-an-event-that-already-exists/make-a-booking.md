1.  [Home](/)
2.	[Common service patterns](/common-service-patterns/overview)
3.  [Identify patterns](/common-service-patterns/identify-patterns)
4.  [Book something](/common-service-patterns/service-patterns/book-something/overview)
5.  [Book onto an event that already exists](/common-service-patterns/service-patterns/book-something/book-onto-an-event-that-already-exists/overview)
6.  Making a booking

# Make a booking
The user has decided to book. They can sign into an existing account or sign in as a guest to book.

The user will need to input and confirm personal information and booking details if there’s no account to pull information from. 

## User needs

The user needs are:

* I need to know why my personal information is needed
* I want to book recurring events, or multiple unlinked events in one session

## User flow

The user opens the booking platform. 

Users who book regularly can [sign into their account](/common-service-patterns/service-patterns/register-something/overview). Their personal data is retrieved in this booking process. The user will need to enter any extra details about their booking and then confirm the information before going onto the next stage. 

If users don’t have an account, they can sign in as a guest. They can input their personal details, additional booking details and confirm the information before going onto the next stage.

If details are incorrect at the confirmation stage, allow the user to go back and edit this information.  

## Service considerations

Things to consider with the booking account include making sure:

* the user’s personal information can be easily retrieved and confirmed if users already have an account with the booking platform
* users can complete their booking as a guest if they don’t have an account, so as not to disrupt their journey. They should be given an option to register an account at the end of booking
* the user understands why we’re asking for personal information
* users can easily identify where they are in the booking journey
* users can make multiple or recurring bookings at this stage
* user’s can book on behalf of others - think about if they need to provide any details about the other person

## Data consideration

Find out how popular previous sessions or services have been and whether it needs a waiting list to meet demand.

## Research considerations

Things to consider include:

* whether users are booking through a means tested route
* the best way to prove their identity without creating a longer journey

## Tech-enabled considerations

Things to consider include:

* if user details are stored on another database, pull the data to minimise data entry for the user
* allowing users to edit their personal information when they sign in – think about whether to do this at the point of signing into an account, rather than at the end of the booking session
* allowing users to save changes to their account
* using waiting lists if there’s no availability for an event
* the booking platform having a consistent experience with the previous pages that the user has come from
* allowing the user to make group bookings
* the system being flexible enough to handle large volumes of traffic in periods of high demands - bookings could be made for a limited period or users could be put in a queue
* how the booking platform meets accessibility standards
