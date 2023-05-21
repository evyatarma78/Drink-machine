# Drink-machine


This code represents a drink machine simulation with functions for selecting a drink, adding money to the wallet, returning change, and displaying the current credit balance on the screen.

The code includes the following variables:
- `credit`: Represents the amount of money in the wallet.
- Can prices: representing the prices of different drink cans (cola, fanta, zero, sprite).
- Cans supply: representing the quantities of each drink cans available in the machine (cola_qty, fanta_qty, zero_qty, sprite_qty).

The code also includes the following functions:
- `printToScreen()`: Updates the screen display with the current credit balance.
- `addsh(coin)`: Adds the given coin value to the credit balance in the wallet.
- `reset()`: Returns the remaining credit in the wallet and resets the balance and screen display.
- `choice_drink(drink)`: Handles the selection of a drink and performs the necessary deductions from the credit balance and quantity of the chosen drink can. It updates the screen display accordingly.
- `getPahit()`: Clears the image of the selected drink from the screen.

