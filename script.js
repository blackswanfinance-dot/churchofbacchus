const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');document.body.style.overflow='';}
menu.addEventListener('click',()=>{const opening=navigation.hidden;navigation.hidden=!opening;menu.setAttribute('aria-expanded',String(opening));menu.setAttribute('aria-label',opening?'Close menu':'Open menu');document.body.style.overflow=opening?'hidden':'';});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!navigation.hidden){closeMenu();menu.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.target);const subject=data.get('subject');const body=`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;window.location.href=`mailto:bacchuschurch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;document.querySelector('#form-status').textContent='Your email app should open. If it does not, email bacchuschurch@gmail.com directly.';});
