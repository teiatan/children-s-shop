import { ButtonThumb, ImageThumb, ProductCardContainer, ProductImage } from "./ProductCard.styled";
import PropTypes from 'prop-types';
import { useState } from "react";
import { StopperImage } from "components/StopperImage/StopperImage";


export function ProductCard({ data }) {
    const [pictureNumber, setPictureNumber] = useState(0);
    console.log("setPictureNumber:", setPictureNumber);
    const { name, price, photo, category } = data;
    const hendleButton = ({ target }) => {
        if (target.name === 'left') {
            console.log('ліва кнопка')
        }
         else{console.log('права кнопка')}
    }

    return <ProductCardContainer >
        <ImageThumb>
        {photo[0]?<ProductImage src={data.photo[pictureNumber]?.src} alt={data.photo[pictureNumber]?.alt}  height="300px"/> : <StopperImage/>}
            {photo.length > 1 &&
                <ButtonThumb >
                    <button type="button" onClick={hendleButton} name='left'>left</button>
                    <button type="button" onClick={hendleButton} name='right'>right</button>
                </ButtonThumb>}
        </ImageThumb>
        <div>
            <p>{name}</p>
            <p>{category.join(' ')}</p>
            <span>{price} грн.</span>
        </div>
    </ProductCardContainer>
}

ProductCard.propTypes ={
    data: PropTypes.object,
}


    // <ProductCard data={{
    //     name: "Сенсорні кульки",
    //     id: "id-9",
    //     price: 150,
    //   photo: [
        
    //         {src:"https://content2.rozetka.com.ua/goods/images/big/280916356.jpg", alt:"невалідна картинка"}, 
    //         {src:"https://i.ibb.co/V3CCZN8/photo-2023-03-15-19-48-43-6.jpg", alt:"валідна картинка"}
    // ],
    //     category: ["Іграшки"],
    //     description: ""
    // } } />
    
    //  const [photo, setPhoto] = useState('');
    // const [alt, setAlt] = useState('');
    // const [photoID, setPhotoID] = useState(0);
    // const [showBtn, setShowBtn]=useState(false)
    // useEffect(() => {
    //     if (data.photo.length === 1) {
    //         setPhoto(() => {
    //             if (data.photo[0].src === '')
    //                 return STOPPER;
    //             return data.photo[0].src
    //         })
    //     setAlt(data.photo[0].alt)
    // } else if (data.photo.length > 1) {
    //     setShowBtn(true);
    //     setPhoto(data.photo[0].src)
    //     setAlt(data.photo[0].alt)    
    // } else {
    //     setPhoto(STOPPER)
    // }
    // }, []);
    // useEffect(() => {
    //     setPhoto(data.photo[photoID].src)
    //     setAlt(data.photo[photoID].alt) 
    // },[photoID])

    // const previousSlide = () => {
    // setPhotoID(state=>state - 1);
    // };
    // const nextSlide = () => {
    // setPhotoID(state=>state + 1);
    // };
    