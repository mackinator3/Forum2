// JavaScript source code
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function ImgButton({value}) {
    const [imgDisplay, setImgDisplay] = useState(false)
   
    return (
        imgDisplay ? <Image src={value} alt="Anime" onClick={() => setImgDisplay(!imgDisplay)}></Image> : <Button className="Images" onClick={() => setImgDisplay(!imgDisplay)} > Image </Button>
    )
}