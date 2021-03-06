    var collection = "";
                  
    function updateChips() {

        //Update chip names
        $( ".chip-item" ).each(function( index, el ) {

            if($(el).data('type') == "string"){
                $(el).text($(el).data('item-id'));
            }

            if($(el).data('type') == "role"){
                var id = $(el).data('item-id');
                var role = guild.roles.find( role => role.id == id);
                $(el).text(role.name);
            }

            if($(el).data('type') == "textChannel"){
                var id = $(el).data('item-id');
                var channel = guild.channels.text.find( role => role.id == id);
                $(el).text(channel.name);
            }
            
            if($(el).data('type') == "voiceChannel"){
                var id = $(el).data('item-id');
                var channel = guild.channels.voice.find( role => role.id == id);
                $(el).text(channel.name);
            }

            if($(el).data('type') == "categoryChannel"){
                var id = $(el).data('item-id');
                var channel = guild.channels.category.find( role => role.id == id);
                $(el).text(channel.name);
            }

         });

        //Update chip collector data
        $('input[data-collection]').each(function(a, i){
            
            var collection = $(i).data('collection');
            var arrayItems = [];

            var items = $('#' + collection ).children('.chip-item');
            items.each( (b, item)=> {
                arrayItems.push( String($(item).data('item-id')) );
            })

            $(i).val(JSON.stringify(arrayItems))

        });
    }

    function removeChip(item){
        $(item).remove();
        TriggerUnsaved()
        updateChips();
    }

    // Config Editor: Select Popup identifier
    var collection = undefined;
    var targetdialog = undefined;
    var autoClose = true;

    function addRole( el, doClose = true ){

        autoClose = doClose;

        var target = $(el).data('target');
        var dialog = "#dialog-select"

        if($(el).data('modal') != undefined){
            dialog += "-" + $(el).data('modal')
        }

        collection = target;
        targetdialog = dialog

        addingTo = $('#'+target);
        $(dialog).modal('open');
        

    }
    function addRoleSilent( el ){

        var target = $(el).data('target');
        var dialog = "#dialog-select"

        if($(el).data('modal') != undefined){
            dialog += "-" + $(el).data('modal')
        }

        collection = target;
        targetdialog = dialog
        addingTo = $('#'+target);

    }

    function addSelected(el, type, newMethod = false, useVal = false){


        if(newMethod){
            
            var selectedElement     =  $(el).text();
            var addElement          = true;

            if(useVal){
                console.log('Using val() instead of text()')
                selectedElement = String($(el).val());
            }


            //Prevent duplicates
            $('#'+collection).children('.chip-item').each(function(a, i) { 
                if(selectedElement == $(i).data('item-id')){
                    addElement = false;
                    console.log('Duplicate, Not adding.')
                }
            });

            if(type == "command"){
                if(selectedElement == "help"){
                    Materialize.toast('<span class="white-text">Disabling "help" will not stop <span class="blue-text">@Manager</span> from triggering it.', 10000)
                }
            }
    
            if(addElement){
                $('#'+collection).append('<div class="chip chip-item" data-item-id="'+selectedElement+'" data-type="'+type+'" onclick="removeChip(this)"> '+selectedElement+' </div>');
                updateChips();
            }

            
            TriggerUnsaved()

            if(autoClose == true){
                $(targetdialog).modal('close');
                
            }

            return;

        }else{
            
            var elementJ         = $(el);
            var selectedElement  = elementJ.find(':selected').val();
            var addElement       = true;
    
            $(el).val("NONE");
            console.log('Adding chip via old method')
    
            //Prevent duplicates
            $('#'+collection).children('.chip-item').each(function(a, i) { 
                if(selectedElement == $(i).data('item-id')){
                    addElement = false;
                }
            });
    
            if(addElement){
                $('#'+collection).append('<div class="chip chip-item" data-item-id="'+selectedElement+'" data-type="'+type+'" onclick="removeChip(this)">  </div>');
                updateChips();
            }
    
            elementJ.material_select();
            $(targetdialog).modal('close');
            TriggerUnsaved()
            updateChips();
            return;

        }

       

    }

