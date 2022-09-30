$(document).ready(function(){
    //Themes
    var theme = $('#theme');
    console.log(localStorage.getItem('href'))
    theme.attr('href',localStorage.getItem('href'));


    $('#theme-blue').click(function(){
        theme.attr('href','css/blue.css');
        localStorage.setItem('href','css/blue.css');
    });
    $('#theme-red').click(function(){
        theme.attr('href','css/red.css');
        localStorage.setItem('href','css/red.css');
    });
    $('#theme-green').click(function(){
        theme.attr('href','css/green.css');
        localStorage.setItem('href','css/green.css');
    });

    //slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
        mode: 'fade',
        auto:true,
        captions: true,
        slideWidth: 965
        });
    }
        //Posts
    if(window.location.href.indexOf('index') > -1){
        var post =[
            {
                title: 'Title number 1',
                date: 'Publicado el dia '+moment().date()+' de '+ moment().format('MMMM')+' del año '+moment().format('YYYY'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                title: 'Title number 2',
                date: 'Publicado el dia '+moment().date()+' de '+ moment().format('MMMM')+' del año '+moment().format('YYYY'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                title: 'Title number 3',
                date: 'Publicado el dia '+moment().date()+' de '+ moment().format('MMMM')+' del año '+moment().format('YYYY'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                title: 'Title number 4',
                date: 'Publicado el dia '+moment().date()+' de '+ moment().format('MMMM')+' del año '+moment().format('YYYY'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                title: 'Title number 5',
                date: 'Publicado el dia '+moment().date()+' de '+ moment().format('MMMM')+' del año '+moment().format('YYYY'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                title: 'Title number 6',
                date: 'Publicado el dia '+moment().date()+' de '+ moment().format('MMMM')+' del año '+moment().format('YYYY'),
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ]
        post.forEach((i)=>{
            var script = `
            <article class="post">
                <h2>${i.title}</h2>
                <span class="date">${i.date}</span>
                <p>${i.description}</p>
                <a href="#" class="readMore">Read More</a>
            </article>
            `
            $('#post').append(script);
        });
    }

    //Ir hacia arriba
    $('.up').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
        return false;
    });

    //False Login

    $('#login form').submit(function(){
        var user_name = $('#user_name').val();
        localStorage.setItem('username',user_name);

    });

    var name_local = localStorage.getItem('username');
    if(name_local != null && name_local != 'undefined'){

        let new_paragraph = document.createElement('p');
        new_paragraph.innerHTML = '<strong>Welcome to this site '+ name_local +"</strong> "+ '<a href="#" class="logout"> Logout </a>' 
        $('#who').append(new_paragraph);
        $("#login").hide();

        $('.logout').click(function(){
            localStorage.removeItem('username')
            location.reload();
        })
    }

    // Accordion
    if(window.location.href.indexOf('abaout_me')>-1){
        $('.accordion').accordion();
    }
 
    //clock
    if(window.location.href.indexOf('clock')>-1){
        var clock = moment().format('h:mm:ss');
        $('#clock').html(clock);
        
        setInterval(function(){
            var clock = moment().format('h:mm:ss');
            $('#clock').html(clock);
        }, 1000);
    }

    // validate
    if(window.location.href.indexOf('contact')>-1){
        $.validate({
            lang: 'es'
        });

        $('form input[name="dateBorn"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
    }
});

