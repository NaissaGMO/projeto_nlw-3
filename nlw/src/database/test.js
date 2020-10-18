const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {

  await saveOrphanage(db, {
    lat: "-3.7372936",
    lng: "-38.5180789", 
    name: "Lar dos Meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "859595242",
    images: ["https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",]
        
        .toString(),
    instructions: "Venha de coração aberto, trazendo para as crianças muito amor e carinho",
    opening_hours: "Horário de visitas das 8h até 18h",
    open_on_weekends: "0"
  })

  const selectedOrphanages = await db.all("SELECT * FROM orphanages"); console.log(selectedOrphanages);

  const orphanage = await db.get('SELECT * FROM orphanages WHERE id = "2"'); console.log(orphanage);
});
