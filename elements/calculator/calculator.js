Polymer({
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
        var currentInput = this.$.output.innerHTML;

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
        this.value1 = parseFloat(this.$.output.innerHTML);
        this.operator = event.currentTarget.value;
        this.decimalAdded = false;

        if (this.operator == 'square-root') {
            this.calculate();
        } else {
            this.emptyOutput();
        }

    },

    showResult: function() {
        this.value2 = parseFloat(this.$.output.innerHTML);
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
    },

    updateOutput: function(value) {
        this.$.output.innerHTML = value;
    }
});