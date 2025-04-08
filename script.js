function zaokraglij() {
  const input = document.getElementById("liczba").value;
  const liczba = parseFloat(input);

  if (isNaN(liczba)) {
    alert("Podaj prawidłową liczbę!");
    return;
  }

  if (Number.isInteger(liczba)) {
    alert("Błąd: Podana liczba jest całkowita. Podaj liczbę niecałkowitą.");
    return;
  }

  document.getElementById("box1").textContent = Math.round(liczba);
  document.getElementById("box2").textContent = Math.floor(liczba);
  document.getElementById("box3").textContent = Math.ceil(liczba);
  document.getElementById("box4").textContent = Math.trunc(liczba);   
}
