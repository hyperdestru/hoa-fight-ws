export function formatDate(pDate) {
	if (typeof pDate.getDate === "function" &&
		typeof pDate.getMonth === "function" &&
		typeof pDate.getFullYear === "function") {

		let day, month, year;

		if (pDate.getDate() < 10) day = '0' + pDate.getDate()
			else day = pDate.getDate();
		
		if (pDate.getMonth() < 10) month = '0' + (pDate.getMonth() + 1)
			else day = (pDate.getMonth() + 1);

		year = pDate.getFullYear();

		return `${day}/${month}/${year}`;
	} else {
		throw new Error("Expecting Date object argument");
	}
}
