import { ProfileCard } from './ProfileCard.jsx';
import { PricingDetails } from './ProfileCard.jsx';
import { NotificationCenter } from './ProfileCard.jsx';
import { ProductList } from './ProfileCard.jsx';
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <ProfileCard 
        name="Sasha"
        photo="https://i.pinimg.com/736x/a9/19/86/a91986b6ebeb61fbf4f6c04670368541.jpg"
        bio="Seorang pengembang web yang suka kopi dan desain."
        skills={['React', 'JavaScript', 'CSS']}
      />
      <hr />
      <PricingDetails userName="Sasha" originalPrice={500000} discountPercent={20} />
      <hr />
      <NotificationCenter isLoggedIn={true} messageCount={5} />
      <hr />
      <ProductList />
    </div>
  );
}
export default App;