const vacancy = {
	name: "vacancy",
	title: "Vacancies",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
			},
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "location",
			title: "Location",
			type: "string",
		},
		{
			name: "closingDate",
			title: "Closing Date",
			type: "date",
		},
		{
			name: "vacancyDocument",
			title: "Vacancy Document",
			type: "file",
		},
		{
			name: "images",
			title: "Images",
			type: "array",
			of: [
				{
					type: "image",
					options: { hotspot: true },
					fields: [{ name: "alt", title: "Alt", type: "string" }],
				},
			],
			options: {
				layout: "grid",
				hotspot: true,
				grid: {
					columns: 2,
				},
			},
		},
	],
};


export default vacancy
