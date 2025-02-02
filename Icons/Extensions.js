Array.prototype.sortByValue = function (propertyName) {
	return this.sort((a, b) => a[propertyName].toLowerCase() > b[propertyName].toLowerCase() ? 1 : -1);
}

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

String.prototype.contains = function (it) { return this.indexOf(it) != -1; };

String.prototype.strip = function (matchesToRemove) {
    var thisString = this;
    if (Array.isArray(matchesToRemove)) {
        matchesToRemove.forEach(function (match) {
            thisString = thisString.split(match).join('')
            
        });
    } else {
        thisString = thisString.split(matchesToRemove).join('')
    }
    return thisString;
}