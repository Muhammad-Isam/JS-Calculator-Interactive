let textBox = document.getElementById("inputbox");

function buttonPush(button) {
    let btnValue = button.value;
    let string = textBox.value;

    switch (btnValue) {
        case "AC":
            textBox.value = "";
            break;
        case "=":
            // Splitting the input into an array of operands and operators
            let inputsplit = string.split(/([-+x/])/);

            // Filter out empty strings (resulting from consecutive operators)
            let filtered = inputsplit.filter(token => token !== '');

            let statement1 = 0;
            let statement2 = 1; // Initialize statement2 to 1 for multiplication
            let res = 0;
            let op = null;

            for (let i = 0; i < filtered.length; i++) {
                if (!op) {
                    if (!isNaN(parseFloat(filtered[i]))) {
                        statement1 = parseFloat(filtered[i]);
                        console.log(statement1);
                    } else {
                        op = filtered[i];
                        console.log(op);
                    }
                } else {
                    if (!isNaN(parseFloat(filtered[i]))) {
                        statement2 = parseFloat(filtered[i]);
                        console.log(statement2);
                        // Perform operation
                        switch (op) {
                            case "+":
                                res = statement1 + statement2;
                                break;
                            case "-":
                                res = statement1 - statement2;
                                break;
                            case "x":
                                res = statement1 * statement2;
                                console.log(res);
                                break;
                            case "/":
                                if (statement2 !== 0) {
                                    res = statement1 / statement2;
                                } else {
                                    console.error("Division by zero");
                                    res="Math Error";
                                    break;
                                }
                                break;
                            default:
                                res="Math Error";
                                return;
                        }

                        // Update statement1 for the next iteration
                        statement1 = res;

                        // Reset statement2 and operator
                        statement2 = 1; // Reset statement2 to 1 for the next iteration
                        op = null;
                    }
                }
            }

            // Set the result in the text box
            textBox.value = res;
            break;
        default:
            textBox.value += btnValue;
            break;
    }
}
