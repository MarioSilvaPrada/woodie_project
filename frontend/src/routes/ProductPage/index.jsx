import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import Spinner from 'components/Spinner';
import { getSingleProduct } from 'api/products';
import Button from 'components/Button';
import LazyImage from 'components/LazyImage';
import { BsArrowLeft } from 'react-icons/bs';

const ProductPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    const res = await getSingleProduct(id);
    setArticle(res);
    setIsLoading(false);
  };

  useEffect(() => {
    if (location?.state?.article) {
      console.log('ola');
      setArticle(location.state.article);
      setIsLoading(false);
    } else {
      //call api
      getProduct();
    }
  }, []);

  const getImageArray = () => {
    const imageArr = Array(article.image1, article.image2, article.image3);
    const arr = [];
    for (let i = 0; i < imageArr.length; i++) {
      if (imageArr[i]) {
        arr.push(imageArr[i]);
      }
    }
    return arr;
  };

  return !isLoading ? (
    <S.Container>
      <S.Wrapper>
        <S.SideWrapper>
          <S.StyledLink onClick={() => history.goBack()}>
            <BsArrowLeft />
          </S.StyledLink>
          <S.TextWrapper>
            <S.MainTitle>{article.name}</S.MainTitle>
            <S.Price>{article.price}€</S.Price>
            <p>{article.description}</p>
          </S.TextWrapper>
          <Button to='#'>Reservar</Button>
        </S.SideWrapper>
        <S.ImagesContainer>
          <LazyImage
            alt='Main Picture'
            src={article.main_image}
            Element={<S.MainImage backImage={article.main_image} />}
          />
          <S.SecondaryImages>
            {getImageArray().map((img) => (
              <LazyImage
                key={img}
                alt='Other Picture'
                src={img}
                Element={<S.StyledImg key={img} backImage={img} />}
              />
            ))}
          </S.SecondaryImages>
        </S.ImagesContainer>
      </S.Wrapper>
    </S.Container>
  ) : (
    <Spinner />
  );
};

export default ProductPage;
