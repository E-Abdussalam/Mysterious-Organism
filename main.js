// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dnaStrand) => {
  return {
    specimenNum: number,
    dna: dnaStrand,
    mutate() {
      var randomBaseIndex = Math.floor(Math.random() * this.dna.length);
      var generatedBase = returnRandBase();
      console.log(this.dna[randomBaseIndex]);
      console.log(randomBaseIndex);
      console.log(this.dna);
      console.log(generatedBase);

      if (this.dna[randomBaseIndex] === generatedBase) {
        console.log(`PaequorFactory.mutate() - The new DNA base '${generatedBase}' is identical to the 
        current base '${this.dna[randomBaseIndex]}' and does not need changed.\n`);
        this.dna.splice(0, 1, generatedBase);
        console.log(this.dna);
        return this.dna;
      } else {
        console.log(
          `----------------\nOriginal DNA base: ${this.dna[randomBaseIndex]} at index: ${randomBaseIndex}`
        );
      }
    },
    compareDNA(pAequor) {
      console.log(`specimens ${this.specimenNum} sequence: ${this.dna}`);
      console.log(
        `specimens ${pAequor2.specimenNum} DNA sequence: ${pAequor.dna}`
      );
      if (this.dna === pAequor.dna) {
        console.log(
          `Specimen ${pAequor.specimenNum} has an idential DNA sequence.`
        );
      } else {
        let identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            identicalBases++;
          }
        }
        console.log(`Total DNA in common between specimen ${
          this.specimenNum
        } and specimen ${pAequor.specimenNum}: 
        ${((identicalBases / this.dna.length) * 100).toFixed(0)}%`);
      }
    },
    willLikelySurvive() {
      let dnaBaseHolder = 0;
      this.dna.forEach((item) => {
        if (item === "C" || item === "G") {
          dnaBaseHolder++;
        }
      });
      const survivalPercentage = (dnaBaseHolder / this.dna.length) * 100;
      if (survivalPercentage >= 60) {
        console.log("spicemen can survive");
        return true;
      } else {
        console.log(
          `Lesser chance of survival. Percentage of C and G bases is ${survivalPercentage.toFixed(
            0
          )}%`
        );
      }
    },
  };
};

const pAequor = pAequorFactory(6, mockUpStrand());
const pAequor2 = pAequorFactory(7, mockUpStrand());
pAequor.mutate();
pAequor.compareDNA(pAequor2);
pAequor.willLikelySurvive();
