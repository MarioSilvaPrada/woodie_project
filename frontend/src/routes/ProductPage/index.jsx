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

const ProductPage = ({ options }) => {
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
            <p>{article.description}</p>
            <S.DimensionsWrapper>
              <S.DimTitle>Dimensões:</S.DimTitle>
              <S.Dim>Altura: {article.altura} cm</S.Dim>
              <S.Dim>Comprimento: {article.comprimento} cm</S.Dim>
              <S.Dim>Largura: {article.largura} cm</S.Dim>
            </S.DimensionsWrapper>
          </S.TextWrapper>
          <Button onClick={() => setIsModalVisible(true)}>Reservar</Button>
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
