import MiniCard from "../MiniCard";
import NewsCard from "../NewsCard";
import { Container, NewsCardRight, NoticesCard } from "./styles";


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
        </Container>
    );
}

export default Body;