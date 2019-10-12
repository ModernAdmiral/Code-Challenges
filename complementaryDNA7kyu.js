function DNAStrand(dna){
    //In order to prevent replacing already replaced values,
        // I am replacing initial letters to their lowercase counterparts, 
        // this gives us the desired answer in lowercase form. Then convert to uppercase.
    return dna.replace(/A/g, "t").replace(/T/g, "a").replace(/C/g, "g").replace(/G/g, "c").toUpperCase()

}

console.log(DNAStrand("ATGC"));
// console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
// console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// console.log(DNAStrand("GTAT"),"CATA","String GTAT is");