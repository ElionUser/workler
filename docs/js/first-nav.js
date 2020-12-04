function loadMenu()
{
    nav = document.getElementById('bar')
    currentTimeLine = document.getElementById('current-time-line')

    ClientHeight = document.body.clientHeight

    Percent()

    window.onscroll = () => { 

        ClientHeight = document.body.clientHeight
        
        Percent()
        

        if( window.scrollY > 400 )
        {
            nav.style.backgroundColor = '#ebeeff'    
            nav.style.boxShadow = '0px 0px 15px rgba(0,0,0,.1)'
        } else {
            nav.style.backgroundColor = 'transparent'    
            nav.style.boxShadow = '0px 0px 15px transparent'
        }

    }
    
}

function Percent()
{
    percent = (window.scrollY * 100) / ClientHeight 

    currentTimeLine.style.height = percent.toFixed(2) + '%'
}



addEventListener('load',loadMenu)