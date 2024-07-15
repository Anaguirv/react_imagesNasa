import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";
import { ImageCarousel } from "./ImageCarousel";
import { fetchNASAImages } from "../data/API";

export function ImageList({ imageCount }) {
    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function fetchData() {
            setLoading(true); 
            try {
                const data = await fetchNASAImages({ count: imageCount });
                if (Array.isArray(data)) {
                    setImagenes(data);
                } else {
                    console.error("Unexpected response:", data);
                    setImagenes([]);
                }
            } catch (error) {
                console.error("Error fetching images:", error);
                setImagenes([]);
            }
            setLoading(false); 
        }
        fetchData();
    }, [imageCount]); 

    return (
        <div>
            <div className="container">
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="mb-5">
                            <ImageCarousel imagenes={imagenes} />
                        </div>
                        <div className="row">
                            {Array.isArray(imagenes) && imagenes.map((imagen, index) => (
                                <div className="col-md-12" key={index}>
                                    <ImageCard imagen={imagen} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
