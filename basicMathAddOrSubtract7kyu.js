function calculate(str) {
    return eval(str.replace(/minus/g, "-").replace(/plus/g, "+")).toString();
    }

    console.log(calculate("1plus2plus3plus4"), '10');
    console.log(calculate('1minus2minus3minus4'), '-8');
    console.log(calculate('1plus2plus3minus4'), '2');