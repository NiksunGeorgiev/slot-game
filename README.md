#Slot Machine Simulator

This project is a slot machine simulator implemented using object-oriented programming principles. 
It provides a Slot class with a spin method, which generates random reel positions and calculates the symbols displayed on the screen. 
Additionally, the spin method calculates the payout for each line.

#Features


*Object-Oriented Design: The code is structured using object-oriented principles to encapsulate the functionality of the slot machine.
*Slot Class: The Slot class contains the necessary properties and methods to simulate a slot machine.
*Spin Method: The spin method simulates a single spin of the slot machine and returns the game result, including reel positions and symbols on the screen.
*Lines Payout: The spin method calculates the payout for each line based on the symbols displayed on the screen.
*Simulation Script: The project includes a simple simulation script that allows you to iterate a large number of spins. The script provides information about the total wins, bets, and execution speed of the simulation.

#Project Structure

The project follows a well-organized structure to separate concerns and improve code maintainability. The main files and directories are as follows:

game/slot.js: Contains the implementation of the Slot class and its methods.
scripts/simulation.js: Provides a simulation script that runs a specified number of spins and displays the simulation results.
configurations/configuration.ts : Provides a ts configuration file holds the configuration data for the slot machine. It defines the number of reels, rows, available symbols, and lines for the game. You can modify this file to customize the behavior of the slot machine.

#Usage

1. Install the required dependencies by running `npm install`
2. Buld all ts files by running `tsc`
3. Run the project  using the command `npm run start`.
4. Run the simulation script using the command `npm run simulate`.
   
