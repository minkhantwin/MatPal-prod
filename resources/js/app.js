/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});



$(function() {

    $('#price').on('input', function(e) {
        var price = $(this).val();
        var total = parseFloat( $('#totalw').val() );
        $('#amount').val( Math.floor( (price / 20) * total ));
    
    })

    $('#lb-back').on('click',function(e) {
        console.log($(this).val());
        let nextVal;
        switch($(this).val())
        {
            case "00" :
                nextVal = "25";
                break;
                
            case "25" :
                nextVal = "50";
                break;
                
            case "50" :
                nextVal = "75";
                break;
                

            case "75" :
                nextVal = "00";
        }
        $(this).val(nextVal);
        $(this).text(nextVal);
        
    })

    $('#addw').on('click',function(e) {
        var f = $('#lb-front');
        var b = $('#lb-back');
        var wgh = parseFloat(f.val().concat('.'+b.val()))

        
        var cnt = parseInt( $(this).data('cnt') );
    
        // addd element
        var item = "<div data-wgh=\""+wgh+"\" class=\"row p-1 mx-1 mb-3 shadow\" id=\"item"+cnt+"\"><div class=\"col-10\">"+wgh+"</div> <div class=\"col p-0 ml-3\"><img class=\"remove-item\" style=\"width: 15px;height: auto;\" src=\"icons/cancel.png\"/>    </div></div>";
        $(this).data('cnt',++cnt);
        $('#list-container').append(item);
        
        calcAmount(wgh,"add")
        
        b.val("00");
        b.text("00");
        f.val("");
        f.focus();
    })

    $('#list-container').on('click',function(e) {

        if( $(e.target).hasClass('remove-item') )
        {
            var wgh = $( e.target.parentNode.parentNode ).data('wgh') ;
    
            calcAmount(wgh,"remove")
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);

        }
        

    })

    function calcAmount(w,flag)
    {
        if(flag == "add")
        {
            // add total weight
            var total = parseFloat($('#totalw').val()) + w;
            $('#totalw').val(total);
    
            // add total amount
            var price = $('#price').val();
            $('#amount').val( Math.floor( (price / 20) * total ) );
        
        }
        else if(flag == "remove")
        {
              // add total weight
              var total = parseFloat($('#totalw').val()) - w;
              $('#totalw').val(total);
      
              // add total amount
              var price = $('#price').val();
              $('#amount').val( Math.floor( (price / 20) * total ));
          
            
        }

    }


})


