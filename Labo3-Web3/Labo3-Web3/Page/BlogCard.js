function BlogCard(props){
    return (         
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="card m-2">
            <img src="images/Etu.png" className="card-img-top img-fluid>" alt="Image 1"/>
            <div className="card-body">
                <h5 className="card-title fw-bold">{props.titre}</h5>
                <p className="card-text m-3 text-truncate-2">{props.Contenu}</p>
                <a href={`Forum.html?id=${props.id}`} className="btn btn-primary">Lire la suite</a>
            </div>
        </div> 
    </div>)
}

