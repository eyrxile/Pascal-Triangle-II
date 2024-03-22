var getRow = function(rowIndex) {
    const row = [1];

    for(let i = 1; i <= rowIndex; i++){
        for(let j = row.length - 1; j > 0; j--){
            row[j] += row[j - 1];
        }
        row.push(1);
    }

    return row;
};

//Example usage:
console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));