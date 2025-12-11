const publications = [
    { year: 2024, type: "indexed", 
      title: "A novel approach for missing data recovery in wireless sensor networks" },

    { year: 2024, type: "indexed",
      title: "Eichhornia crassipes in slaughterhouse wastewater treatment" },

    { year: 2023, type: "indexed",
      title: "Enhancing Quality & Safety of Garlic Pulp using Ohmic Heating" },

    { year: 2022, type: "indexed",
      title: "Nanotechnology in Food Industries" },

    { year: 2020, type: "indexed",
      title: "Ohmic blanching on drying kinetics of garlic" },

    { year: 2019, type: "conference",
      title: "Ohmic blanching – APDC Conference" }
];

function renderPublications() {
    const yearFilter = document.getElementById("yearFilter").value;
    const typeFilter = document.getElementById("typeFilter").value;

    const list = document.getElementById("pubList");
    list.innerHTML = "";

    publications
        .filter(p => (yearFilter === "all" || p.year == yearFilter))
        .filter(p => (typeFilter === "all" || p.type == typeFilter))
        .forEach(p => {
            const div = document.createElement("div");
            div.className = "pub-item";
            div.innerHTML = `<strong>${p.title}</strong> <br><span>${p.year} — ${p.type}</span>`;
            list.appendChild(div);
        });
}

document.getElementById("yearFilter").addEventListener("change", renderPublications);
document.getElementById("typeFilter").addEventListener("change", renderPublications);

renderPublications();
