Polymer('calculator-element', {

    decimalAdded: false,
    operator: null,
    value1: 0,
    value2: 0,

    clear: function(event) {
        this.emptyOutput();
        this.emptyValues();
    },

    numberClick: function(event) {
        var value = event.currentTarget.value;
        var currentInput = this.getOutput();

        if (currentInput == 0) {
            this.updateOutput(value);
        } else if (value == 'decimal' && !this.decimalAdded) {
            this.updateOutput(currentInput + '.');
            this.decimalAdded = true;
        } else if (value !== "decimal") {
            this.updateOutput(currentInput + value);
        }
    },

    operatorClick: function(event) {
        // if more than one calculations are done before equal is pressed
        // calculate what you have so far
        if (this.value1 && this.operator) {
            this.value1 = this.calculate(this.value1, parseFloat(this.getOutput()), this.operator);
        } else {
            this.value1 = parseFloat(this.getOutput());
        }

        this.operator = event.currentTarget.value;
        this.decimalAdded = false;

        //calculate square root right after operator pressed
        if (this.operator == 'square-root') {
            this.calculate();
        } else {
            this.emptyOutput();
        }

    },

    showResult: function() {
        this.value2 = parseFloat(this.getOutput());
        var result = this.calculate(this.value1, this.value2, this.operator);
        this.emptyValues();
        this.updateOutput(result);
    },

    calculate: function(value1, value2, operator) {
        var result;
        if (operator == '+') {
            result = value1 + value2;
        } else if (operator == '-') {
            result = value1 - value2;
        } else if (operator == 'x') {
            result = value1 * value2;
        } else if (operator == '/') {
            result = value1 / value2;
        } else if (operator == 'square-root') {
            result = Math.sqrt(value1);
        }
        return result;
    },

    emptyOutput: function() {
        this.$.output.innerHTML = 0;
    },

    emptyValues: function() {
        this.value1 = 0;
        this.value2 = 0;
        this.operator = null;
    },

    updateOutput: function(value) {
        this.$.output.innerHTML = value;
    },

    getOutput: function() {
        return this.$.output.innerHTML;
    }
});