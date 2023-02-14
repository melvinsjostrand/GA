function displayDateTime() {
  const datetime = document.getElementById("datetime").value;
  document.getElementById("info").innerHTML = `<p>Datum och Tid: ${datetime} </p>`;
  
}