import hornedBeasts from "./hornedbeasts.jsx";
import beast1Image from "./assets/goldhornedbeast1.jpg";
import beast2Image from "./assets/bluehornedbeast1.jpg";

const Gallery = () => {
    return (
        <div>
            <h2>This is the Gallery</h2>
            <div>
            <hornedBeasts
                title="Animal 1"
                imageUrl={beast1Image}
                description="Heavenly Horned Beast"
            />
            <hornedBeasts
                title="Animal 2"
                imageUrl={beast2Image}
                description="Evil Horned Beast"
            />
        </div>
        </div>
        
    );
};

export default Gallery;
