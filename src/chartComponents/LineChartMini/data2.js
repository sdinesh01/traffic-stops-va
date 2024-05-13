const tsv = `agency_name	2020	2021	2022	2023
Virginia State Police	82124.0	211022.0	224717.0	234247.0
`;

const rows = tsv.split('\n').map(str => str.split('\t'));
const headers = rows.shift();
const years = headers.slice(1).map(n => +n);

const agencies = rows.map(row => {
	return {
		name: row[0],
		data: years.map((year, i) => ({
			x: year,
			y: +row[i + 1]
		})).filter(d => d.y)
	};
});

export { agencies, years };
