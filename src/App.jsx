// Dependencies
import { useEffect, useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Images
import topLeftImg from './assets/top-left.png';
import topImg from './assets/top.png';
import topRightImg from './assets/top-right.png';

// API
import WeddingInvitationApi from './api/weddingInvitationApi';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Couple from './pages/Couple';
import Event from './pages/Event';
import Moment from './pages/Moment';
import QuoteWish from './pages/QuoteWish';
import WelcomeCard from './components/WelcomeCard';

const App = () => {
  // States
  const [DATA, setDATA] = useState({
    _id: {},
    bridegroom_id: 'bridegroom',
    data: {
      bride: {
        nickname: '',
      },
      groom: {
        nickname: '',
      },
    },
    wishes: [],
    welcome_card_picture_url: '',
    slideshow_picture_urls: [],
    gallery_picture_urls: [],
    event: {
      std_url: '',
      schedules: [],
      gmaps_iframe: '',
      gmaps_url: '',
      countdown_date: '01/01/2000',
    },
    quote: {},
  });

  const [guestName, setGuestName] = useState('');

  const splittedPageUrl = window.location.pathname.split('/');
  const paramId = splittedPageUrl[1] || 'default';

  const postWish = async ({ inputName, inputWish }) => {
    const wishes = await WeddingInvitationApi.postWish(
      { name: inputName, wish: inputWish },
      paramId
    );
    setDATA({
      ...DATA,
      wishes,
    });
  };

  const deleteWish = async (wishId) => {
    const wishes = await WeddingInvitationApi.deleteWish(wishId, paramId);
    setDATA({
      ...DATA,
      wishes,
    });
  };

  // Effects
  useEffect(() => {
    (async () => {
      const fetchedDATA = await WeddingInvitationApi.getData(paramId);
      setDATA(fetchedDATA);
    })();

    const getGuestName =
      (splittedPageUrl[2] && splittedPageUrl[2].replace('+', ' ')) ||
      'Nama Tamu';
    setGuestName(getGuestName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="frame">
        <img src={topLeftImg} alt="Frame" className="corner top-left" />
        <img src={topImg} alt="Frame" className="corner top" />
        <img src={topRightImg} alt="Frame" className="corner top-right" />
        <img src={topLeftImg} alt="Frame" className="corner bottom-right" />
        <img src={topImg} alt="Frame" className="corner bottom" />
        <img src={topRightImg} alt="Frame" className="corner bottom-left" />
      </div>
      <HashRouter>
        <WelcomeCard
          guest={guestName}
          pictureUrl={DATA.welcome_card_picture_url}
        />

        <Route exact path="/">
          <Home
            DATA={DATA.data}
            slideshowPictureUrls={DATA.slideshow_picture_urls}
          />
        </Route>

        <Route path="/couple">
          <Couple DATA={DATA.data} />
        </Route>

        <Route path="/event">
          <Event event={DATA.event} />
        </Route>

        <Route path="/moment">
          <Moment
            DATA={DATA.data}
            galleryPictureUrls={DATA.gallery_picture_urls}
          />
        </Route>

        <Route path="/quote-wish">
          <QuoteWish
            DATA={DATA.data}
            quote={DATA.quote}
            wishes={DATA.wishes}
            postWish={postWish}
            deleteWish={deleteWish}
          />
        </Route>

        <Navbar />
      </HashRouter>
    </div>
  );
};

export default App;
