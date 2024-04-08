function CommentList(){
    let [commentaires, setCommentaire] = React.useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    React.useEffect(() => {
        async function CreationCommentaire(){
            fetch(`http://localhost:3000/Commentaire?publicationLier=${id}`)
            .then(response => response.json())
            .then(json => setCommentaire(json))
        }
        CreationCommentaire();
    });

    return (
        <div className="row" id="Commentaire">
        {commentaires.map(commentaire =>
              <Comment key= {commentaire.id} {...commentaire} />
          )}
        </div>
    )
}
