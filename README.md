Your good friend Le Chef Benoit is a famous pastry chef in your city. His shop, Sucre, is one of the most well-known in the world! Knowing that you're a great developer, Le Chef Benoit has come to you for help to optimize his sales in the upcoming holiday.

Every Thanksgiving, he receives hundreds of orders. Unfortunately, there are more orders than he can fulfill. Though he has the man power and ovens to bake thousands of pastries and pies in a day, his shop has limited flour stores (500 lbs / 60,000 grams). Le Chef Benoit would like to optimize the method for choosing which orders to fulfill in order to maximize profit given the flour limitation.

## The Challenge

Given a list of all orders, find the most profitable subset of orders without going over the flour limit, **60,000 grams**.

## Pastry Order Analysis

Let's go over a single order:

```json
[
        {
            "quantity": 14,
            "id": "f9b14810-a76b-4ed2-8d85-ef39e4248252",
            "name": "chocolate chip cookie",
            "flourConsumption": 5.625,
            "price": 0.25,
            "customerLimit": 60
        },
        {
            "quantity": 1,
            "id": "fe4f6b97-c627-45f8-850d-ef0c504f57b5",
            "name": "apple pie bars",
            "flourConsumption": 16.66,
            "price": 0.8,
            "customerLimit": 2
        }
    ]
```

This order is made up of two pastry selections, chocolate chip cookies and apple pie bars. Each selection has its own quantity. So, this order calls for:

```
**14** (quantity) X **5.625** (flourConsumption) = **78.75 grams** of flour 
```

PLUS

```
**1** (quantity) X 16.66 (flourConsumption) = **16.66 grams** of flour 
```

which comes to a total of 95.41 grams of flour.