const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');document.body.style.overflow='';}
menu.addEventListener('click',()=>{const opening=navigation.hidden;navigation.hidden=!opening;menu.setAttribute('aria-expanded',String(opening));menu.setAttribute('aria-label',opening?'Close menu':'Open menu');document.body.style.overflow=opening?'hidden':'';});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!navigation.hidden){closeMenu();menu.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
const bitcoinAddress = document.querySelector('#bitcoin-address');
const copyBitcoin = document.querySelector('#copy-bitcoin');
const bitcoinStatus = document.querySelector('#bitcoin-status');
copyBitcoin.hidden=false;
copyBitcoin.addEventListener('click',async()=>{
  const address=bitcoinAddress.textContent.trim();
  try{
    if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(address);
    bitcoinStatus.textContent='Bitcoin address copied.';
  }catch{
    const selection=window.getSelection();
    if(selection){const range=document.createRange();range.selectNodeContents(bitcoinAddress);selection.removeAllRanges();selection.addRange(range);}
    bitcoinStatus.textContent='Select and copy the address above, or scan the QR code with your wallet.';
  }
});
