import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';
import Spinner from 'components/Spinner';

const ProductPage = () => {
  const location = useLocation();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location?.state?.article) {
      setArticle(location.state.article);
      setIsLoading(false);
    } else {
      //call api
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

  console.log(location.state.article);
  return !isLoading ? (
    <S.Container>
      <S.Wrapper>
        <S.TextWrapper>
          <S.MainTitle>{article.name}</S.MainTitle>
          <p>{article.description}</p>
        </S.TextWrapper>
        <S.ImagesContainer>
          <S.MainImage backImage={article.main_image} />
          <S.SecondaryImages>
            {getImageArray().map((img) => (
              <S.StyledImg backImage={img} />
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
