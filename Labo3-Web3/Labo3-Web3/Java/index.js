//Confirmation de la publication (et publication)
function confirmerPublication() {
    $("#AddPublication").dialog({
        resizable: false,
        height: "auto",
        width: 400,
        dialogClass: 'custom-dialog',
        modal: true,
        buttons: {
            "Confirmer la publication": function () {
                let titre = $("#titre").val();
                let auteur = $("#auteur").val();
                let contenu = $("#contenu").val();

                var nouvellePublication = {
                    "titre": titre,
                    "auteur": auteur,
                    "date de publication": new Date(),
                    "Contenu": contenu
                };     
                fetch("http://localhost:3000/Publication", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nouvellePublication),
                })
                $(this).dialog("close");
            },
            "Annuler": function () {
                $(this).dialog("close");
            }
        }
    });
}

function App() {
    return <>
        <Header />
        <BlogList />
        <Footer />
    </>
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)




