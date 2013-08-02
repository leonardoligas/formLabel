/*
 * LabelForm - jQuery Plugin
 * Simple Label Form
 *
 * 
 *
 * Copyright (c) 2013 - 2018 Leonardo Ligas
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.0.0 (30/07/2013)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {
    var config=new Array();
    jQuery.fn.formLabel =
            function(conf) {

                var iddiv = $(this).attr("id");
                // Config for plug
                config[iddiv] = jQuery.extend({
                    title: 'Delete From list',
                    color: "fe0000",
                    background_color: "ffffff",
                    name: "car",
                    list: new Array("Ferrari","Mercedes", "BMW"),
                    existelement: new Array()
                }, conf);


                var name = config[iddiv].name;
                var list = config[iddiv].list;
                var element= config[iddiv].existelement;
                var html = "<div class=\"control-group row\" id=\"control-group\"><div class=\"span6\"><label class=\"control-label\" >" + iddiv +
                        "</label><div class=\"controls controls-row\">" +
                        "<div class=\"input-append\">" +
                        "<select name=\"sel" + name + "s\" id=\"" + name + "\">";
                html += "<option value=\"\" >------</option>";

                for (i = 0; i < list.length; i++) {
                      
                        html += "<option value=\"" + name + "" + i + "\" id=\"opt" + name + "" + i + "\">" + list[i] + "</option>";

                }

                html += "</select></div></div></div><div id=\"" + name + "s\" class=\"span2 well \"></div</div>";
                $("#" + iddiv).html(html);


                $(document).on(
                        "change", "#" + name,
                        function() {
                            formLabeladdElement("" + name, name + "s",iddiv );
                        });
                       
                for( i=0; i < element.length; i++) {
                   
                        var id = name+""+element[i];
                        
                        var value = config[iddiv].list[element[i]];
                        
                        formLabeladdExistElement(name, name + "s", id, value ,iddiv);
                       
                        $("#"+id).html("");
                  
                }
                formlabeldeleteElement("" + name);

            };


    var formLabeladdElement = function(name, names ,iddiv) {
        if ($("#" + name).val() == 0) {
          
            return;
        }
        var id = $("#" + name + "").val();
        var value = $("#opt" + id).html();
        formLabeladdExistElement(name, names, id, value ,iddiv);

    };

    var formLabeladdExistElement = function(name, names, id, value,iddiv) {
        
        var oldhtml = $("#" + names).html();
        var input = "<input type=\"hidden\" name=\"" + names + "\" value=\"" + id
                + "\" >"
        $("#" + names).html(
                oldhtml + " <div class=\"delete" + name + "\" valore=\"" + value
                + "\" idvalore=\"" + id
                + "\"><span  class=\"badge badge-success\" title=\"" + config[iddiv].title + "\" \n\
                style=\"background-color:" + config[iddiv].background_color + ";color:" + config[iddiv].color + ";margin-top:2px;cursor:pointer\">" + value
                + " x</span>" + input + "</div>");
        $("#" + name + " option[value='" + id + "']").remove();
    };

    var formlabeldeleteElement = function(name) {
        $(document).on(
                "click",
                ".delete" + name,
                function() {

                    $("#" + name).append(
                            "<option id=\"opt" + $(this).attr("idvalore")
                            + "\" value=" + $(this).attr("idvalore") + ">"
                            + $(this).attr("valore") + "</option>");
                    $(this).html("");
                });

    };
})(jQuery);
