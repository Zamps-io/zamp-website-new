import UserWebLayout from "../src/components/UserWebLayout";
import Header from "../src/components/Header";
import SwiperSlider from "../src/components/Swiper";

export default function Home() {
  return (
    <UserWebLayout webtitle="Home Page">
      <div style={{ backgroundColor: "#0D172A" , minHeight:'100vh'}}>
        <Header/>
      <SwiperSlider/>
      </div>
    </UserWebLayout>
  );
}
