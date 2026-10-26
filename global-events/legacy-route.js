const target=new URL('../',location.href);target.search=location.search;target.hash=document.body.dataset.section||'calendar';location.replace(target.href);
