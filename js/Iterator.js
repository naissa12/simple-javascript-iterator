/**
 * Simple javascript iterator
 */
function Iterator(arr) 
{
    var index = 0;

    return {
        /*
        Returns the current
        array index
        */
        key: function () {
            return index;
        },
        /*
        If the class can iterate 
        the array further, 
        returns true.
        If a call to next() will fail, 
        returns false.
        */
        hasNext: function() {
            return index < arr.length;
        },
        /*
        This moves the iterator one 
        spot and returns the new value.
        */
        next: function() {
            if (this.hasNext()) {
                index++;
                return arr[index];
            }
            return false;
        },
        /*
        This will return the current value 
        pointed to by the iterator.
        */
        current: function() {
            return arr[index];
        },
        /*
        This resets the index to 0.
        */
        reset: function() {
            index = 0;
        },
        /*
        This reverses the array, 
        while keeping the current value
        the same.
        */
        reverse: function () {
            arr.reverse();
            index = arr.length - index - 1;
            return this.current();
        },
        /*
        This function will return a 
        function, when 
        invoked will return the current value when 
        the tag function was invoked.
        */
        tag: function () {
            var currentValue = this.current();
            return function () {
                return currentValue;
            }
        }
    };
}
