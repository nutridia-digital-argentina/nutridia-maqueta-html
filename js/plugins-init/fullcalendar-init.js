! function(e) {
    "use strict";
    var t = function() {
        this.$body = e("body"), this.$modal = e("#event-modal"), this.$event = "#external-events div.external-event", this.$calendar = e("#calendar"), this.$saveCategoryBtn = e(".save-category"), this.$categoryForm = e("#add-category form"), this.$extEvents = e("#external-events"), this.$calendarObj = null
    };
    t.prototype.onDrop = function(t, n) {
        var a = t.data("eventObject"),
            o = t.attr("data-class"),
            i = e.extend({}, a);
        i.start = n, o && (i.className = [o]), this.$calendar.fullCalendar("renderEvent", i, !0), e("#drop-remove").is(":checked") && t.remove()
    }, t.prototype.onEventClick = function(t, n, a) {
        var o = this,
            i = e("<form></form>");
        i.append("<label>Modificar Turno</label>"), i.append("<div class='input-group'><input class='form-control' type=text value='" + t.title + "' /><span class='input-group-btn'><button type='submit' class='btn btn-success waves-effect waves-light'><i class='fa fa-check'></i> Save</button></span></div>"), o.$modal.modal({
            backdrop: "static"
        }), o.$modal.find(".delete-event").show().end().find(".save-event").hide().end().find(".modal-body").empty().prepend(i).end().find(".delete-event").unbind("click").on("click", function() {
            o.$calendarObj.fullCalendar("removeEvents", function(e) {
                return e._id == t._id
            }), o.$modal.modal("hide")
        }), o.$modal.find("form").on("submit", function() {
            return t.title = i.find("input[type=text]").val(), o.$calendarObj.fullCalendar("updateEvent", t), o.$modal.modal("hide"), !1
        })
    }, t.prototype.onSelect = function(t, n, a) {
        console.log('--t--' + t);
        console.log(' --n--' + n);
        //console.log(' --a--' + JSON.stringify(a));
        var o = this;
        o.$modal.modal({
            backdrop: "static"
        });
        var i = e("<form></form>");
        i.append("<div class='row'></div>"), i.find(".row")
            /*.append("<div class='card'>\
                        <div class='card-body'>\
                            <div class='mb-4'>\
                                <p>Seleccionar <mark class='text-primary'>un paciente, la práctica y el profesional</mark> a cargo.</p>\
                            </div>\
                            <div class='row'>\
                                <div class='col-md-6'>\
                                    <div class='form-group'>\
                                        <label class='control-label'>Paciente</label>\
                                        <select id='list-pacientes' name='paciente'>\
                                            <option value=''></option>\
                                        </select>\
                                    </div>\
                                </div>\
                                <div class='col-md-6'>\
                                    <div class='form-group'>\
                                        <label class='control-label'>Profesional</label>\
                                        <select id='list-profesionales' name='profesional'>\
                                        <option value=''></option>\
                                        </select>\
                                    </div>\
                                </div>\
                                <div class='col-md-12'>\
                                    <h5>Agregar nuevo paciente<small> <a href='javascript:void()' data-toggle='modal' data-target='#modal-cargar-paciente' class='btn btn-primary btn-event btn-xs'>\
                                    <span class='align-middle'><i class='ti-plus'></i></span>\
                                </a></small></h5>\
                                    <!--<p>Si no encuentra el paciente, puede cargar uno nuevo haciendo click en el botón\
                                    <a href='javascript:void()' data-toggle='modal' data-target='#modal-cargar-paciente' class='btn btn-primary btn-event w-100'>\
                                        <span class='align-middle'><i class='ti-plus'></i></span> Cargar Paciente\
                                    </a>-->\
                                    </p>\
                                </div>\
                                <div class='col-lg-12 col-xl-12'>\
                                    <div class='card bg-danger'>\
                                        <div class='card-header border-0 pb-0 justify-content-center'>\
                                            <h4 class='card-title text-white'>Appointment Schedule</h4>\
                                        </div>\
                                        <div class='card-body patient-calender  pb-2'>\
                                            <input type='text' class='form-control d-none' id='datetimepicker1' />\
                                        </div>\
                                    </div>\
							    </div>\
                            </div>\
                        </div>\
                    </div>").append("<div clsas='col-md-12'>" + this.$calendar.fullCalendar('getDate').format() + "</div>")*/
            ,
            o.$modal.find(".delete-event").hide().end().find(".save-event").show().end().find(".modal-body").empty().prepend(i).end().find(".save-event").unbind("click").on("click", function() {
                i.submit()
            }), o.$modal.find("form").on("submit", function() {
                var e = i.find("select[name='paciente'] option:checked").text() + ' - ' + i.find("select[name='profesional'] option:checked").text();
                a = (i.find("input[name='beginning']").val(), i.find("input[name='ending']").val(), i.find("select[name='profesional'] option:checked").val());
                return null !== e && 0 != e.length ? (o.$calendarObj.fullCalendar("renderEvent", {
                    title: e,
                    start: t,
                    end: n,
                    allDay: !1,
                    className: a
                }, !0), o.$modal.modal("hide")) : alert("You have to give a title to your event"), !1
            }), o.$calendarObj.fullCalendar("unselect")
    }, t.prototype.enableDrag = function() {
        e(this.$event).each(function() {
            var t = {
                title: e.trim(e(this).text())
            };
            e(this).data("eventObject", t), e(this).draggable({
                zIndex: 999,
                revert: !0,
                revertDuration: 0
            })
        })
    }, t.prototype.init = function() {
        this.enableDrag();
        var t = new Date,
            n = (t.getDate(), t.getMonth(), t.getFullYear(), new Date(e.now())),
            a = [{
                title: "Diabetes Dr. Correa",
                start: new Date(e.now() + 158e6),
                className: "budge budge-primary"
            }, {
                title: "Cardiología",
                start: n,
                end: n,
                className: ""
            }, {
                title: "Diabetes",
                start: new Date(e.now() + 338e6),
                className: ""
            }],
            o = this;
        o.$calendarObj = o.$calendar.fullCalendar({
            slotDuration: "00:15:00",
            minTime: "08:00:00",
            maxTime: "19:00:00",
            defaultView: "month",
            handleWindowResize: !0,
            height: e(window).height() - 100,
            header: {
                left: "prev,next today",
                center: "title",
                right: "month,agendaWeek,agendaDay"
            },
            events: a,
            editable: !0,
            droppable: !0,
            eventLimit: !0,
            selectable: !0,
            drop: function(t) {
                o.onDrop(e(this), t)
            },
            select: function(e, t, n) {
                o.onSelect(e, t, n)
            },
            eventClick: function(e, t, n) {
                o.onEventClick(e, t, n)
            }
        }), this.$saveCategoryBtn.on("click", function() {
            var e = o.$categoryForm.find("input[name='category-name']").val(),
                t = o.$categoryForm.find("select[name='category-color']").val();
            null !== e && 0 != e.length && (o.$extEvents.append('<div class="external-event bg-' + t + '" data-class="bg-' + t + '" style="position: relative;"><i class="fa fa-move"></i>' + e + "</div>"), o.enableDrag())
        })
    }, e.CalendarApp = new t, e.CalendarApp.Constructor = t
}(window.jQuery),
function(e) {
    "use strict";
    e.CalendarApp.init()
}(window.jQuery);