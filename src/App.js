import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ListView from './Components/Listview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faShare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { faVolumeUp, faVolumeMute} from '@fortawesome/free-solid-svg-icons';
import { Alert, Card, Container} from 'react-bootstrap';
import audio from "./Components/audio/audio2.mp3";
import { v4 as uuidv4 } from 'uuid';
import { BaseUrl } from './url/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Components/images/ohm.png';
import Welcome from './Components/welcome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import share from './Components/images/share.png';
import WhatsApp from './Components/images/whatsAppicon.png';
import Facebook from './Components/images/facebookicon.png';
import Instagram from './Components/images/instagramicon.png';
import Gmail from './Components/images/gmailicon.png';








function App() {
  const [dataList, setDataList] = useState([]);
  const [text, setText] = useState('');
  const [showList, setShowList] = useState(true);
  const listContainerRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [textCount, setTextCount] = useState(0);
  const [totalTextCount, setTotalTextCount] = useState(0);
  const [firstEnteredText, setFirstEnteredText] = useState('');
  const [lastEnteredTextIndex, setLastEnteredTextIndex] = useState(-1);
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [uuid, setUuid] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [wrongTextError, setWrongTextError] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(true);
  const audioRef = useRef(null);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showToolTip2, setshowToolTip2] = useState(false);
  const [showToolTip3, setshowToolTip3] = useState(false);
  const [showToolTip4, setshowToolTip4] = useState(false);
  const [Shareoptions, setShareoptions] = useState(false);
  
  
const handleshareoptions = () =>{
setShareoptions(!Shareoptions)
}
 

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleMouseEnter2 = () =>{
    setshowToolTip2(true)
  };

  const handleMouseLeave2 = () =>{
     setshowToolTip2(false)
  }
  const handleMouseEnter3 = () => {
    setshowToolTip3(true);
  };

  const handleMouseLeave3 = () => {
    setshowToolTip3(false);
  };
  const handleMouseEnter4 = () => {
    setshowToolTip4(true);
  };

  const handleMouseLeave4 = () => {
    setshowToolTip4(false);
  };

  const handleInputChange = (e) => {
   
      const inputValue = e.target.value;
      setText(inputValue);
    
      
      setIsTyping(!!inputValue.trim()); 
    };

  const handleSendClick = () => {
   
    setText('');
    setIsTyping(!isTyping);
    

  };

  const handleWhatsAppShare = () => {
   
    const textToShare = 'I am participating in the Naamajapa Yajna! Join me!';
    const urlToShare = 'https://om.bookseva.com/' 
    const whatsappShareURL = `https://wa.me/?text=${encodeURIComponent(
      `${textToShare} ${urlToShare}`
    )}`;

    
    window.open(whatsappShareURL, '_blank');
  };
  
  const handleInstagramShare = () => {
    // Instagram doesn't have a direct share URL, so you can open the Instagram website.
    const instagramShareURL = 'https://www.instagram.com/';

    window.open(instagramShareURL, '_blank');
  };

  const handleGmailShare = () => {
    const subject = 'Join Naamajapa Yajna';
    const body = 'I am participating in the Naamajapa Yajna! Join me at https://om.bookseva.com/';

    const gmailShareURL = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = gmailShareURL;
  };

  const handleFacebookShare = () => {
    const textToShare = 'I am participating in the Naamajapa Yajna! Join me!';
    const urlToShare = 'https://om.bookseva.com/';
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      urlToShare
    )}&quote=${encodeURIComponent(textToShare)}`;

    window.open(facebookShareURL, '_blank');
  };

  const handleStartClick = () => {
    setShowWelcomePopup(false);
    toggleAudio(true)
  };
  
  
 


  const handleRegistration = async () => {
    let generatedUuid = localStorage.getItem('deviceUuid');

    if (!generatedUuid) {
      generatedUuid = uuidv4();
      localStorage.setItem('deviceUuid', generatedUuid);
    }

    try {
      const response = await axios.post(BaseUrl +'/register', {
        uuid: generatedUuid,
      });

      if (response.status === 200) {
        setUuid(generatedUuid);
        setIsRegistered(true);
        setRegistrationStatus('Registration Successful');
      } else if (response.status === 400) {
        setRegistrationStatus('User Already Exists');
      } else {
        setRegistrationStatus('Registration Failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setRegistrationStatus('Registration Failed');
    }
  };
  

  useEffect(() => {
   
    handleRegistration();

    // const audioElement = audioRef.current;
    // if (audioElement) {
    //   audioElement.play()
    //     .then(() => {
    //       setAudioPlaying(true);
    //     })
    //     .catch((error) => {
    //       console.error('Error playing audio:', error);
    //     });
    // }
 

  }, []); 
  useEffect(() => {
    if (isRegistered) { 
      axios
  .get(BaseUrl + '/textCount/' + uuid) 
  .then((response) => {
    const fetchedTextCount = response.data.textCount;
    setTextCount(fetchedTextCount);
  })
  .catch((error) => {
    console.error('Error fetching textCount:', error);
  });
    }
  }, [isRegistered, uuid]);
  
  useEffect(() => {
    axios
      .get(BaseUrl+'/totalTextCount')
      .then((response) => {
        const fetchedTotalTextCount = response.data.totalTextCount;
        setTotalTextCount(fetchedTotalTextCount);
      })
      .catch((error) => {
        console.error('Error fetching totalTextCount:', error);
      });

    if (listContainerRef.current) {
      listContainerRef.current.scrollTop = listContainerRef.current.scrollHeight;
    }

    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dataList]);

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
      setAudioPlaying(!audioElement.paused);
    }
  };
  

  const addData = (text) => {
    if (!isRegistered) {
      alert('Please register first.'); 
      return;
    }

    if (text.toLowerCase() !== 'om namo narayanaya') {
      setWrongTextError(true);
      setTimeout(() => {
        setWrongTextError(false)
        
        
      }, 2000);
      return;
    
    }

   
    setWrongTextError(false);
    setText('');
     setIsTyping(false);
   

    axios
      .get(BaseUrl+'/firstEnteredText')
      .then((response) => {
        const firstEnteredText = response.data.firstEnteredText;

        if (!firstEnteredText) {
          setFirstEnteredText(text);
          setDataList([{ text, time: getCurrentTime() }]);
          setShowList(true);
          
          console.log('Setting showList to true');
          toggleAudio();
        } else if (firstEnteredText.toLowerCase() === text.toLowerCase()) {
          const generatedUuid = localStorage.getItem('deviceUuid');
          axios
            .post(BaseUrl+'/messages', { text: text, uuid: generatedUuid })
            .then((response) => {
              console.log('Message sent to the server');
            })
            .catch((error) => {
              console.error('Error sending message:', error);
            });

          const newDataList = [...dataList, { text, time: getCurrentTime() }];
          setDataList(newDataList);
          setTextCount(textCount + 1);
          console.log('Updated dataList:', newDataList);
          setLastEnteredTextIndex(newDataList.length - 1);
        }
      })
      .catch((error) => {
        console.error('Error fetching firstEnteredText:', error);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addData(text);
      setText('');
    } else {
     
      if (!/^[a-zA-Z ]$/.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
      } else if (e.key === ' ' && text.endsWith(' ')) {
        e.preventDefault(); 
      }
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="App">
       {showWelcomePopup && <Welcome onStartClick={handleStartClick} />}
     
      <div className="board">
        {/* <img src={logoImage} alt="Logo" className="logo" /> */}
        <img src={logo} alt='logo' className='logo'/>
      
        <div className='heading'> <span className='first'>NAAMAJAPA</span><span className='second'>YAJNA</span></div>
        <div className='heading2'> <span className='first'>നാമജപ</span><span className='second'>യജ്ഞം</span></div>
        {/* <img src={logo} alt='logo' className='logo2'/> */}
        {/* <FontAwesomeIcon
          icon={faShare}
          className='logo2'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        /> */}
       
        <button ><img src={share} alt="Share" className='logo2' 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleshareoptions}
        /> {}
         {showTooltip && <div className="tooltiptext">Click to share and invite your friends</div>}
        </button>
      
    
       

      </div>
     
      <div className="current-date">
  <div className="container">
    <div className="row">
      <div className="col-2 order-1 text-left"> {/* Adjust column width and add text-left class */}
      
      <div onClick={toggleAudio}>
  <FontAwesomeIcon icon={audioPlaying ? faVolumeUp : faVolumeMute}
  onMouseEnter={handleMouseEnter3}
  onMouseLeave={handleMouseLeave3} />
  {showToolTip3 && <div className='tooltiptext3'>Click to mute audio</div>}
</div>

      </div>
      <div className="col-8 text-center order-2"> {/* Center-align text within the column */}
        {isToday(currentDate)
          ? 'Today'
          : `Current Date: ${currentDate.toLocaleDateString()}`}
      </div>
    </div>
  </div>
</div>






{showList && (
        <div className="list-container" ref={listContainerRef}>
          <ListView dataList={dataList} lastEnteredTextIndex={lastEnteredTextIndex} />
        </div>
      )}
      <div className={showWelcomePopup? "count-text2":"count-text"}>
  {textCount} out of {totalTextCount} Namajapas done by you.
</div>
<div className={showWelcomePopup? "data-entering-space2":"data-entering-space"}>
  <div className={showWelcomePopup ? "input-container2":"input-container"}>
    <input
      type="text"
      placeholder="Type: OM NAMO NARAYANAYA"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        setIsTyping(!!e.target.value.trim());
      }}
      onPaste={(e) => e.preventDefault()}
      onKeyDown={handleKeyPress}
      autoComplete="off"
      className="input-field"
      onMouseEnter={handleMouseEnter4}
      onMouseLeave={handleMouseLeave4}
    />
    {showToolTip4 && <div className='tooltiptext4'>Type here to start NaamajapaYajna</div>}
  </div>
  
  {wrongTextError && (
    <div className="error-message">
      <Alert variant="danger" className="error-alert">
        <strong>Error:</strong> Please enter OM NAMO NARAYANAYA
      </Alert>
    </div>
  )}
  {isTyping ? (
  <button
    className='btn1'
    type="button"
    onClick={() => {
      addData(text);
      setText('');
    }}
  >
    <FontAwesomeIcon icon={faPaperPlane} className="btn4" type="button" 
   />
  </button>
  
) : (
  <button
    className={showWelcomePopup? "btn3":"btn1"}
    type="button"
    
  
  >
   
      <FontAwesomeIcon icon={faMicrophone} 
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        />
    {showToolTip2 && <div className="tooltiptext2">start recording</div>}
  </button>
)}
</div>




<audio id="audio" src={audio} preload="auto" ref={audioRef} loop />



{Shareoptions&&(
 <div className="share-options">
  <div className="icon-box">
    <button className='card' onClick={handleWhatsAppShare}>
      <img src={WhatsApp} alt='btn5' className='btn5' />
    </button>
    <button className='card' onClick={handleFacebookShare}>
      <img src={Facebook} alt='btn6' className='btn6' />
    </button>
  </div>
  <div className="icon-box">
    <button className='card' onClick={handleInstagramShare}>
      <img src={Instagram} alt='btn7' className='btn7' />
    </button>
    <button className='card' onClick={handleGmailShare}>
      <img src={Gmail} alt='btn8' className='btn8' />
    </button>
  </div>
</div>

)}


      
    </div>
  );
}

export default App;