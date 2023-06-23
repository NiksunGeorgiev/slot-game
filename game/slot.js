const config = require("../dist/configurations/configuration");

class Slot {
  constructor() {
    this.reelsCount = config.default.reelsCount;
    this.rowsCount = config.default.rowsCount;
    this.symbols = config.default.symbols;
    this.lines = config.default.lines;
    this.reels = config.default.reels;
  }

  spin() {
    const result = {};

    result.reelPositions = this.generateReelPositions();
    result.screenSymbols = this.getScreenSymbols(result.reelPositions);
    result.linePayouts = this.calculateLinePayouts(result.screenSymbols);

    return result;
  }

  generateReelPositions() {
    const reelPositions = [];
    for (let i = 0; i < this.reelsCount; i++) {
      reelPositions.push(Math.floor(Math.random() * this.reels[i].length));
    }
    return reelPositions;
  }

  getScreenSymbols(reelPositions) {
    const screenSymbols = [];
    for (let row = 0; row < this.rowsCount; row++) {
      const symbolsInRow = [];
      for (let reel = 0; reel < this.reelsCount; reel++) {
        const symbolIndex =
          (reelPositions[reel] + row) % this.reels[reel].length;
        symbolsInRow.push(this.reels[reel][symbolIndex]);
      }
      screenSymbols.push(symbolsInRow);
    }
    return screenSymbols;
  }

  calculateLinePayouts(screenSymbols) {
    const linePayouts = [];
    for (const line of this.lines) {
      const symbolsInLine = line.map((row, reel) => screenSymbols[row][reel]);
      const linePayout = this.calculateLinePayout(symbolsInLine);
      linePayouts.push(linePayout);
    }
    return linePayouts;
  }

  calculateLinePayout(symbolsInLine) {
    const uniqueSymbols = Array.from(new Set(symbolsInLine));
    if (uniqueSymbols.length === 1) {
      return this.symbols[uniqueSymbols[0]][symbolsInLine.length - 1];
    } else {
      return 0;
    }
  }
}

module.exports = Slot;
