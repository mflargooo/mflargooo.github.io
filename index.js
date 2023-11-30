if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }

function yearsSince (date) {
    return new Date(Date.now()).getUTCFullYear() - date.getUTCFullYear()
}

document.getElementById("gamedevtime").innerHTML = yearsSince(new Date(2017, 7, 16))