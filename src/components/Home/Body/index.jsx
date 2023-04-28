import readTooImageOne from '../../../assets/images/Home/read-too-image-1.png';
import readTooImageTwo from '../../../assets/images/Home/read-too-image-2.png';
import readTooImageThree from '../../../assets/images/Home/read-too-image-3.png';
import MiniCard from "../MiniCard";
import NewsCard from "../NewsCard";
import ReadTooCard from "../ReadTooCard";
import { Container, NewsCardRight, NoticesCard, ReadTooCards } from "./styles";


const Body = () => {
    return (
        <Container>
            <NoticesCard>
                <NewsCard />
                <NewsCardRight>
                    <MiniCard />
                    <MiniCard />
                </NewsCardRight>
            </NoticesCard>

            <ReadTooCards>
                <ReadTooCard new={{
                    title:"Mercado de trabalho",
                    image: readTooImageOne,
                    description:"Como se comportar em uma entrevista online"
                }}/>
                <ReadTooCard new={{
                    title:"Mercado de trabalho",
                    image: readTooImageTwo,
                    description:"Como se comportar em uma entrevista online"
                }}/>
                <ReadTooCard new={{
                    title:"Negocios",
                    image: readTooImageThree,
                    description:"Comunicação para venda: como ajustar seu discurso para o momento"
                }}/>
            </ReadTooCards>
            
        </Container>
    );
}

export default Body;