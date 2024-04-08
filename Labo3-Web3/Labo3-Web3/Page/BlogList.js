function BlogList(){
    let [publications, setPublications] = React.useState([]);
 
    React.useState(() => {
        async function CreationPublication(){
            fetch('http://localhost:3000/Publication')
            .then(response => response.json())
            .then(json => setPublications(json))
        }
        CreationPublication();
    }, []);

    return (
        <div className="row" id="Publication">
        {publications.map(publication =>
              <BlogCard key= {publication.id} {...publication} />
          )}
        </div>
    )
}
