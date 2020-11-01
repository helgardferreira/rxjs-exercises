/* [
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"id": 675465,
				"title": "Fracture"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"id": 654356453,
				"title": "Bad Boys"
			}
		]
	}
] */

// Converting from Arrays to Trees
function exercise() {
  const lists = [
      {
        id: 5434364,
        name: "New Releases",
      },
      {
        id: 65456475,
        name: "Thrillers",
      },
    ],
    videos = [
      {
        listId: 5434364,
        id: 65432445,
        title: "The Chamber",
      },
      {
        listId: 5434364,
        id: 675465,
        title: "Fracture",
      },
      {
        listId: 65456475,
        id: 70111470,
        title: "Die Hard",
      },
      {
        listId: 65456475,
        id: 654356453,
        title: "Bad Boys",
      },
    ]

  return lists.map(({ id, name }) => ({
    name,
    videos: videos
      .filter(({ listId }) => listId === id)
      .map(({ id, title }) => ({ id, title })),
  })) // complete this expression
}

console.log(JSON.stringify(exercise(), null, 2))
