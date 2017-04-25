# Tally Demo

Here is a sample that demonstrates Tally in Action.

We want to know how many times each button is pressed.


Here are three buttons:

<button> <a> Red Button </a> </button>
<button> <a> Green Button </a> </button>
<button> <a> Blue Button </a> </button>

A Tally Schema for this dataset has already been created like this:
```
{
  "name": "TallyDemoButtons",
  "expiry": 180,
  "attributes": [
    {
      "name": "buttonID",
      "type": "STRING",
      "isDistinct": true,
    }
    ]
}
```

Every single time you press a button, a POST request is made to the Tally endpoint like this:

``` 
[
    {   
        buttonID:'red-button'
    }
]
```

The aggregates are updated, and below are the totals. No DB. No Storage. We just keep track of Tally's.



            