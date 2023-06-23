const Slot = require("../game/slot");

const simulationConfig = {
  numSpins: 100000,
  betAmount: 1,
};

function runSimulation() {
  const slotMachine = new Slot();
  let totalWins = 0;
  let totalBets = 0;

  console.log(`Running simulation for ${simulationConfig.numSpins} spins...`);

  const startTime = new Date();

  for (let i = 0; i < simulationConfig.numSpins; i++) {
    const spinResult = slotMachine.spin();
    const totalLinePayout = spinResult.linePayouts.reduce(
      (total, payout) => total + payout,
      0
    );

    totalWins += totalLinePayout;
    totalBets += simulationConfig.betAmount;
  }

  const endTime = new Date();
  const executionTime = (endTime - startTime) / 1000;

  console.log("Simulation complete.");
  console.log("----------------------------------");
  console.log("Results:");
  console.log(`Total Spins: ${simulationConfig.numSpins}`);
  console.log(`Total Bets: ${totalBets}`);
  console.log(`Total Wins: ${totalWins}`);
  console.log(`Win Rate: ${((totalWins / totalBets) * 100).toFixed(2)}%`);
  console.log(`Execution Time: ${executionTime.toFixed(2)} seconds`);
}

runSimulation();
