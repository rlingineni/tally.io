# Getting Started with Tally
Tally keeps track of aggregates. It may be used in a wide array of cases. It is currently available as a C# API. 

#### [Web Routes](http://docs.tally4.apiary.io/)

#### [Getting Started with Schemas](./schema.html)

#### [Tally Concepts](./concepts.html)




## Quick Start
Check out the [Web API docs](http://docs.tally4.apiary.io/) for more information on routing and parameter details.


1. **Create a schema for your dataset**
	- Take a look at the [Tally Schema](./schema.html) format to understand how to intialize a Tally Table for your data to keep track 
	- Make a `POST` request to the `api/schema` route with your JSON schema

2. **Insert Data to your Tally Table**
	- Insert data with a `POST` request to the `api/data/insert/{schemaName}` route with your data as JSON

	*You can also retrieve existing Tally data using `api/data/retrieve/{schemaName}` *

3. **Retrieve Aggregates for your data**
	- Aggregates are the results from your growing dataset over time. Use the `api/aggregates/retrieve/{schemaName}` to get your aggregates file

## Tally Explained

There are 420 jelly beans in a container. I want to know the following data:

- ratio of blue to red beans 
- ratio of green to yellow beans
- total numbers of each jelly bean every hour

Is it easier to dump our jelly beans and recount our totals every time? This would be the traditional approach with keeping track of data in a database.

However, since we already know the information we want. It's easier to keep track of the information we want individually? Let's just update those values as we add each bean to get a running count.

... or a “tally” of information every single time we insert new values as opposed to investing in keeping data organized over longer amounts of time. That's the idea behind Tally.
