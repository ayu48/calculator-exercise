Polymer({
    decimalAdded: false,
    value1: 0,
    value2: 0,

    clear: function(event) {
        this.value1 = 0;
        this.value2 = 0;
        this.$.output.innerHTML = 0;
    },

    numberClick: function(event) {
        var value = event.currentTarget.value;
        var currentInput = this.$.output.innerHTML;

        if (currentInput == 0) {
            this.$.output.innerHTML = value;
        } else if (value == 'decimal' && !this.decimalAdded) {
            this.$.output.innerHTML = currentInput + '.';
            this.decimalAdded = true;
        } else if (value !== "decimal") {
            this.$.output.innerHTML = currentInput + value;
        }
    }
});