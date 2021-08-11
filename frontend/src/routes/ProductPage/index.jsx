import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import Spinner from 'components/Spinner';
import Modal from 'components/Modal';
import ReservationForm from 'components/ReservationForm';
import { getSingleProduct } from 'api/products';
import Button from 'components/Button';
import LazyImage from 'components/LazyImage';
import Layout from 'components/Layout';
import { BsArrowLeft } from 'react-icons/bs';

const ProductPage = ({ options, getCollectionName }) => {
  const location = useLocation();
  const history = useHistory();
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getProduct = async () => {
    const res = await getSingleProduct(id);
    setArticle(res);
    setIsLoading(false);
  };

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

  useEffect(() => {
    if (location?.state?.article) {
      setArticle(location.state.article);
      setIsLoading(false);
    } else {
      //call api
      getProduct();
    }
  }, []);

  return !isLoading ? (
    <Layout>
      <S.Wrapper>
        <S.SideWrapper>
          <S.StyledLink onClick={() => history.goBack()}>
            <BsArrowLeft />
          </S.StyledLink>
          <S.TextWrapper>
            <S.MainTitle>{article.name}</S.MainTitle>
            <S.Price>{article.price}€</S.Price>
            {article.colecao && (
              <S.CollectionText>
                {getCollectionName(article.colecao)}
              </S.CollectionText>
            )}
            <p>{article.description}</p>
            <S.DimensionsWrapper>
              <S.DimTitle>Dimensões:</S.DimTitle>
              <S.Dim>Comprimento: {article.comprimento} cm</S.Dim>
              <S.Dim>Largura: {article.largura} cm</S.Dim>
              {parseFloat(article.altura) > 0 && (
                <S.Dim>Altura: {article.altura} cm</S.Dim>
              )}
            </S.DimensionsWrapper>
          </S.TextWrapper>
          <S.ButtonWrapper>
            <Button onClick={() => setIsModalVisible(true)}>Reservar</Button>
          </S.ButtonWrapper>
        </S.SideWrapper>
        <S.SecWrapper>
          <S.MobileLink onClick={() => history.goBack()}>
            <BsArrowLeft />
          </S.MobileLink>
          <S.ImagesContainer>
            <LazyImage
              alt='Main Picture'
              href={article.main_image}
              target='blank'
              src={article.main_image}
              actual={({ imageProps }) => (
                <S.MainImage {...imageProps}>
                  <S.ZoomIcon />
                </S.MainImage>
              )}
            />
            <S.SecondaryImages>
              {getImageArray().map((img) => (
                <LazyImage
                  key={img}
                  alt='Other Picture'
                  href={img}
                  target='blank'
                  src={img}
                  actual={({ imageProps }) => (
                    <S.StyledImg key={img} {...imageProps}>
                      <S.ZoomIcon />
                    </S.StyledImg>
                  )}
                />
              ))}
            </S.SecondaryImages>
          </S.ImagesContainer>
        </S.SecWrapper>
      </S.Wrapper>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <ReservationForm productId={id} options={options} />
      </Modal>
    </Layout>
  ) : (
    <Spinner />
  );
};

export default ProductPage;
