import { ImageThumb, ProductCardContainer, ProductImage, InfoCard, Name, Price, Description } from "./ProductCard.styled";
import PropTypes from 'prop-types';
import { useState } from "react";
const STOPPER = "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"


export function ProductCard({ data }) {
    const [pictureNumber/* , setPictureNumber */] = useState(0);
    const { name, price, photo, description } = data;
    /* const hendleButton = ({ target }) => {
        if (target.name === 'left') {
            console.log('ліва кнопка')
        }
         else{console.log('права кнопка')}
    } */

    return <ProductCardContainer >
        <ImageThumb>
        {<ProductImage src={photo[0]? photo[pictureNumber]?.src : STOPPER} alt={photo[pictureNumber]?.alt}  height="300px"/>}
            {/* {photo.length > 1 &&
                {<ButtonThumb>
                    <button type="button" onClick={hendleButton} name='left'>left</button>
                    <button type="button" onClick={hendleButton} name='right'>right</button>
                </ButtonThumb>}} */}
        </ImageThumb>
        <InfoCard>
            <Name>{name}</Name>
            <Description>{description.slice(0, 150)}{description.length > 150 && "..."}</Description>
            {/* {category.length !== 0 && <a href='/'> Категорії: {category.join(' ')}</a>} */}
            <Price>    {price} грн/шт</Price>
        </InfoCard>
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
    