const allLis = document.querySelectorAll('li');

for (let i = 0; i < allLis.length; i++) {
	allLis[i].innerText = `LI NUM ${i + 1}`;
}
for (const li of allLis) {
	li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
}
