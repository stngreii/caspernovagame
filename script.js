function showUploadOptions() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("uploadOptions").style.display = "block";
}

function openCamera() {
  const cameraInput = document.createElement("input");
  cameraInput.type = "file";
  cameraInput.accept = "image/*";
  cameraInput.capture = "user";
  cameraInput.onchange = submitImage;
  cameraInput.click();
}

function submitImage() {
  const bp2Photos = [
    { file: "bp2/WIDIYA.jpg", name: "WIDIYA" },
    { file: "bp2/ADZKIA.jpg", name: "ADZKIA" },
    { file: "bp2/ALI.jpg", name: "ALI" },
    { file: "bp2/ALMAIRA.jpg", name: "ALMAIRA" },
    { file: "bp2/ANOM.jpg", name: "ANOM" },
    { file: "bp2/ARASYA.jpg", name: "ARASYA" },
    { file: "bp2/ASYIFA.jpg", name: "ASYIFA" },
    { file: "bp2/AWFA.jpg", name: "AWFA" },
    { file: "bp2/BELA.jpg", name: "BELA" },
    { file: "bp2/DENITA.jpg", name: "DENITA" },
    { file: "bp2/DEWI.jpg", name: "DEWI" },
    { file: "bp2/DZIKRY.jpg", name: "DZIKRY" },
    { file: "bp2/ELSI.jpg", name: "ELSI" },
    { file: "bp2/ELSIMETAL.jpg", name: "ELSIMETAL" },
    { file: "bp2/GHITSA.jpg", name: "GHITSA" },
    { file: "bp2/INDAH.jpg", name: "INDAH" },
    { file: "bp2/IRWAN.jpg", name: "IRWAN" },
    { file: "bp2/IRWANSARE.jpg", name: "IRWANSARE" },
    { file: "bp2/JUL.jpg", name: "JUL" },
    { file: "bp2/MARYAM.jpg", name: "MARYAM" },
    { file: "bp2/NADIA.jpg", name: "NADIA" },
    { file: "bp2/NAZWA.jpg", name: "NAZWA" },
    { file: "bp2/PA RIAN.jpg", name: "PA RIAN" },
    { file: "bp2/PERLITA.jpg", name: "PERLITA" },
    { file: "bp2/RENI.jpg", name: "RENI" },
    { file: "bp2/RIRIN.jpg", name: "RIRIN" },
    { file: "bp2/RIRIN2.jpg", name: "RIRIN 2" },
    { file: "bp2/SAHIRA.jpg", name: "SAHIRA" },
    { file: "bp2/SHANIA.jpg", name: "SHANIA" },
    { file: "bp2/SILVIA.jpg", name: "SILVIA" },
    { file: "bp2/SYAHRINI.jpg", name: "SYAHRINI" },
    { file: "bp2/SYIFA (2).jpg", name: "SYIFA 2" },
    { file: "bp2/SYIFA.jpg", name: "SYIFA" },
    { file: "bp2/TIARA.jpg", name: "TIARA" },
    { file: "bp2/TSALIS.jpg", name: "TSALIS" },
    { file: "bp2/VINA.jpg", name: "VINA" }
  ];

  const randomIndex = Math.floor(Math.random() * bp2Photos.length);
  const selected = bp2Photos[randomIndex];

  // Tampilkan hasil
  document.getElementById("uploadOptions").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("randomBp2Photo").src = selected.file;
  document.getElementById("randomName").innerText = selected.name;

  // Putar efek suara
  const sound = new Audio("sound/and.mp3");
  sound.play();
}
