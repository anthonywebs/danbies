'use strict';

const linkLookup = {
  'danbies': {
    id: 'js-link-danbies',
    color: 'creamy-aqua',
    border: 'bot-border-aqua',
  },
  'products': {
    id: 'js-link-products',
    color: 'purple',
    border: 'bot-border-purple',
  },
  'contact': {
    id: 'js-link-contact',
    color: 'creamy-orange',
    border: 'bot-border-orange',
  }
}

const handleMouseOver = name => {
  const { id, color, border } = linkLookup[name];
  const elem = document.getElementById(id);
  elem.classList.add(color, border);
}

const handleMouseOut = name => {
  const { id, color, border } = linkLookup[name];
  const elem = document.getElementById(id);
  elem.classList.remove(color, border);
}

const handleMemberSite = () => {
  window.location.href = './member.html';
}

const handleScroll = id => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  }); 
}

const handleKeyDown = (e, id) => {
  if (e?.key === 'Enter') {
    if (id === 'member') {
      handleMemberSite();
    } else {
      handleScroll(id);
    }
  }
}

const main = () => {

}

main();