## Getting Started with Building a Schema

Understanding the Tally Schema is simple, but necessary to understand. 

This will teach you the structure of the schema. 

## Constructing your own Schema

A Tally Schema is a simple JSON object that is defined to keep track of the elements. Here is a sample Schema for a sign-in system. We will understand what these keys values mean.
    
```
{
  "name": "AttendeeList",
  "expiry": 180,
  "attributes": [
    {
      "name": "NetID",
      "type": "STRING",
      "isDistinct": true,
      "relate": [
        "Day"
      ]
    },
    {
      "name": "Day",
      "type": "STRING",
      "isDistinct": true
    },
    {
      "name": "Time",
      "type": "DATE",
      "isDistinct": false
    }
  ]
}
```
    
| Attribute | Description           | Note| 
|:-------|----------------------|---------|
| `name`  | This is the name of the schema. It will need to be unique for each dataset |  There are currently no checks. You may override existing tally tables|     |
| `expiry`  | Expiry time in seconds for data inserted to Tally | Not yet enforced         |          |
| `Attributes`  | Attributes are a JSON object that define the data and their relations| Must be an Array           |


### Understanding an Attribute
Attibutes are the fields that make up the records that go into Tally. We will use these objects to keep track of our data. You should read more on attribute concepts [here](./concepts.html)

```
    {
      "name": "NetID",
      "type": "STRING",
      "isDistinct": true,
      "relate": [
        "Day"
      ]
    }
```



| Attribute | Description | Note|
|:-------|----------------------|---------|
| `name`  | This is the name of the attribute |When inserting data, make sure that the insert data key matches the name defined here|
| `type`  | This is the data type of the value to be inserted. There are currenltly 5 possible types to use| You may use: `INT,STRING,CHAR,DOUBLE,DATE`|
| `isDistinct`  | Boolean value that designates if these values are distinct. Ideally, you would want to check these for values that are repeating. Think, an ID or a Day of the Week| When set, aggregate counts up each distinct value and keeps track|
| `relate`  | An array of attribute's to relate to. May Relate one value with another. Depending on the attribute, it does the Attribute VS Target. | You may only use it with attributes flagged as Distinct. Currently only relates the counts of two attributes.