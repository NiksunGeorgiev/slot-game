const Slot = require("./game/slot");

const slot = new Slot();
const result = slot.spin();

console.log("Reel Positions:", result.reelPositions);
console.log("Screen Symbols:", result.screenSymbols);
console.log("Line Payouts:", result.linePayouts);
