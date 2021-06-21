const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},

	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];
const ulParent = document.createElement('ul');
for (const game of warriorsGames) {
	const { homeTeam, awayTeam } = game;
	const gameLi = document.createElement('li');
	// destructuring awayTeam and homeTeam
	const { team: hTeam, points: hPoins } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;

	const teams = `${aTeam} @ ${hTeam}`;
	// bolding the winning score
	let scoreLine;
	if (aPoints > hPoins) {
		scoreLine = `<b>${aPoints}</b>-${hPoins}`;
	} else {
		scoreLine = `${aPoints}-<b>${hPoins}</b>`;
	}
	const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
	gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');

	gameLi.innerHTML = `${teams} ${scoreLine}`;
	ulParent.append(gameLi);
}
document.body.prepend(ulParent);
