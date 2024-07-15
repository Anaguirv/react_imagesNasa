function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

export function ImageCard({ imagen }) {
    return (
        <div className="card mb-3" style={{ maxWidth: '100%' }}>
            <div className="row g-0">
                <div className="col-md-5 align-items-center">
                    <img 
                        src={imagen.hdurl || imagen.url} 
                        className="img-fluid rounded-start w-100" 
                        alt={imagen.title} 
                        style={{ objectFit: 'cover', height:'100%'}}
                    />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <div className="card-body">
                        <h3 className="card-title">{imagen.title}</h3>
                        <p>Image of the day: {formatDate(imagen.date)}</p>
                        <p className="card-text d-flex">{imagen.explanation}</p>
                        {imagen.copyright && (
                            <p className="card-text">
                                <small className="blockquote-footer">&copy; {imagen.copyright}</small>
                            </p>
                        )}
                        <div className="d-flex justify-content-end">
                            <a 
                                className="btn btn-outline-secondary" 
                                href={imagen.hdurl || imagen.url}  
                                role="button" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-solid fa-user-astronaut me-2"></i>
                                Ver tamaño completo
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
