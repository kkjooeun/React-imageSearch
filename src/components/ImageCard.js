import React, { useState, useRef, useEffect} from 'react';

const ImageCard = ({image}) => {
	const { urls, alt_description} = image
	const [span, setSpan] = useState(0);
	const img = useRef(null);

	useEffect(()=>{
		//console.log("함수 컴포넌트 마운트 완료");
		img.current.addEventListener('load', findSpan);
	},[]); //빈배열의 경우 마운트시, 마운트해제시 실행

	const findSpan = () => {
		//console.log(img.current.clientHeight);
		const height = img.current.clientHeight;
		const span = Math.ceil(height/10);
		setSpan(span);
	}	

	return (
		<img style={{gridRowEnd:`span ${span}`}} ref={img} src={urls.regular} alt={alt_description}/>
	)
}

export default ImageCard;