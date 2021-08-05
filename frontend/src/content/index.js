import img1 from 'assets/images/img1.jpg';
import img2 from 'assets/images/img2.jpg';
import img3 from 'assets/images/img3.jpeg';

const content = {
  services: [
    {
      title: '100% Madeira',
      description: `Na WOODi trabalhamos para criar uma imagem singular e produzir peças únicas 100% em madeira. A madeira é o nosso recurso de eleição pela sua beleza sempre única e genuína.`,
      image: img1,
    },
    {
      title: `À sua medida`,
      description: `Criamos coleções únicas e limitadas, mas também criamos a peça do zero, à sua medida. Basta dizer-nos o que tem em mente, e nós tratamos do resto.`,
      image: img3,
    },
    {
      title: 'Natural e renovável',
      description: `Sempre que possível optamos por
        reutilizar paletes abandonadas para criar peças novas e dar uma nova vida a um recurso útil
        que ia ser desperdiçado.`,
      image: img2,
    },
  ],
};

export { content };
