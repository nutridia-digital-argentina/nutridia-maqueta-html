 $('.modal').on('shown.bs.modal', function() {

            //select2 lista de pacientes
            $('#lista-pacientes').select2({
                data: [{//datos select2
                    "id": "1",
                    "text": "Dolores Gisi",
                    "tiene_deudas": "no",
                    "bg_color": 'bg-success',
                }, {
                    "id": "2",
                    "text": "Danilo Peralta",
                    "tiene_deudas": "si",
                    "bg_color": 'bg-danger',
                }, {
                    "id": "3",
                    "text": "María Forte",
                    "tiene_deudas": "si",
                    "bg_color": 'bg-danger',
                }, {
                    "id": "4",
                    "text": "Laura Dimet",
                    "tiene_deudas": "no",
                    "bg_color": 'bg-success'
                }, {
                    "id": "5",
                    "text": "Damián Bueno",
                    "tiene_deudas": "si",
                    "bg_color": 'bg-danger',
                }, {
                    "id": "6",
                    "text": "Carlos Sandez",
                    "tiene_deudas": "si",
                    "bg_color": 'bg-danger',
                }],
                // placeholder: "Buscar un paciente",
                // theme: "bootstrap",//para que tome las clases
                escapeMarkup: function(markup) {
                    return markup;
                },
                templateResult: formatResult,//formato personalizado html
            });


            //select2 lista de profesionales
            $('#lista-profesionales').select2({
                data: [{//datos select2
                    "id": "1",
                    "text": 'Dr. Correa <small class="d-block"><span class="badge badge-default">Traumatología</span></small>',
                }, {
                    "id": "2",
                    "text": 'Dra. López <small class="d-block"><span class="badge badge-default">Diabetes</span></small>',
                }, {
                    "id": "3",
                    "text": 'Dra. Frías <small class="d-block"><span class="badge badge-default">Cardiología</span></small>',
                }, {
                    "id": "4",
                    "text": 'Dr. Tau <small class="d-block"><span class="badge badge-default">Oftalmología</span></small>',
                }, {
                    "id": "5",
                    "text": 'Dra. Bueno <small class="d-block"><span class="badge badge-default">Diabetes</span></small>',
                }, {
                    "id": "6",
                    "text": 'Dr. Campi <small class="d-block"><span class="badge badge-default">Cardiología</span></small>',
                }],
                // placeholder: "Buscar un profesional",
                // theme: "bootstrap",//para que tome las clases
                //formato HTML personalizado 
                escapeMarkup: function(markup) {
                    return markup;
                },
                templateResult: formatResult_profesionales,//formato personalizado HTML

            });


            //select2 lista de especialidades
            $('#lista-especialidades').select2({
                data: [{//datos select2
                    "id": "1",
                    "text": 'Traumatología',
                }, {
                    "id": "2",
                    "text": 'Diabetes',
                }, {
                    "id": "3",
                    "text": 'Cardiología',
                }, {
                    "id": "4",
                    "text": 'Oftalmología',
                }, {
                    "id": "5",
                    "text": 'Diabetes',
                }, {
                    "id": "6",
                    "text": 'Cardiología',
                }],
                // placeholder: "Buscar especialidad",
               // theme: "bootstrap",//para que tome las clases
                //formato HTML personalizado 
                escapeMarkup: function(markup) {
                    return markup;
                },
                templateResult: formatResult_profesionales,//formato personalizado HTML

            });


            //inicio calendario del turno
            $('#datetimepicker1').datetimepicker({
                inline: true,
                format: 'DD/MM/YYYY',
            });

            //seteo horarios disponibles según la fecha seleccionada
            $("#datetimepicker1").on("dp.change", function() {
                var html = '<h4 class="text-muted">Horarios Disponibles</h4><br>\
                            <button  class="btn btn-success py-1 px-2">8:00 – 8:15</button>\
                            <button  class="btn btn-success py-1 px-2">8:30 – 8:45</button>\
                            <button  class="btn btn-success py-1 px-2">15:45 – 16:00</button>';
                $('#time-slots').html(html);
                $('.time-slots').show();
            });

        });

        
        /*funciones para formato HTML de las listas*/ 
        function formatResult(e) {//formato HTML para lista de pacientes

            estado_pagos = 'Tiene deudas';
            color_estado_pago = 'badge-danger';

            if (e.tiene_deudas === 'no') {
                estado_pagos = 'Al día';
                color_estado_pago = 'badge-success';
            }

            var markup = '<div id="DZ_W_Todo1" class="widget-media dz-scroll ps ps--active-y">' +
                '<ul class="timeline">' +
                '<li>' +
                '<div class="timeline-panel">' +
                '<div class="mr-2 media">' +
                'KG' +
                '</div>' +
                '<div class="media-body">' +
                '<h5 class="mb-1">' + e.text + '<small class="d-block">Registrado: 29 July 2020 - 02:26 PM</small></h5>' +
                '<span class="badge ' + color_estado_pago + '">' + estado_pagos + '</span>' +
                '</div>' +
                '</div>' +
                '</li>' +
                '</ul>' +
                '<div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 370px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 300px;"></div></div></div>';

            return markup;
        }

        function formatResult_profesionales(e) {//formato HTML para lista de pacientes

            var markup = '<div id="DZ_W_Todo1" class="widget-media dz-scroll ps ps--active-y">' +
                '<ul class="timeline">' +
                '<li>' +
                '<div class="timeline-panel">' +
                '<div class="mr-2 media">' +
                'KG' +
                '</div>' +
                '<div class="media-body">' +
                '<h5 class="mb-1">' + e.text + '</h5>' +
                '</div>' +
                '</div>' +
                '</li>' +
                '</ul>' +
                '<div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 370px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 300px;"></div></div></div>';

            return markup;
        }

        

