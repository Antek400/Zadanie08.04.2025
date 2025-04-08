function zaokraglij() {

  let liczba = parseFloat(document.getElementById('liczba').value);

  if (isNaN(liczba)) {

    alert("Proszę podać prawidłową liczbę!");
    return;
  }


  let zaokraglone = Math.round(liczba);
  let zaokragloneWDol = Math.floor(liczba);
  let zaokragloneWGore = Math.ceil(liczba);
  let obciete = Math.trunc(liczba);


  document.getElementById('box1').innerText = `Zaokrąglenie:\n${zaokraglone}`;
  document.getElementById('box2').innerText = `W dół:\n${zaokragloneWDol}`;
  document.getElementById('box3').innerText = `W górę:\n${zaokragloneWGore}`;
  document.getElementById('box4').innerText = `Obcięte:\n${obciete}`;
}
