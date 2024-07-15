export function ImageCarousel({ imagenes }) {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide mt-5 mb-2" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imagenes.map((imagen, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img 
                            src={imagen.hdurl || imagen.url} 
                            className="img-fluid rounded-start w-100" 
                            alt={imagen.title} 
                            style={{ objectFit: 'cover', height: '300px' }}
                        />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
