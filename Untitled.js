var calendar = function () {
    var wrap, label,
        months = ["jan", "feb", "mar", "apr", "may", "jun",                    "jul", "aug", "sept", "oct", "nov","dec"]
    function init(newWrap) {
        wrap = $(newWrap || "#cal");
        label = wrap.find("#label");
        wrap.find("#prev").bind("click.calendar"),                    function()  {switchMonth(false);}
        wrap.find("#next").bind("click.calendar"),                    function()  {switchMonth(true);}
        label.bind("click.calendar", function()                     {switchMonth(null, new Date().getMonth, new                 Date().getFullYear());});
  }
    function switchMonth(next,month,year) {
        var curr = label.text().trim().split(""), calendar,         tempYear=parseInt(curr[1],10);
        month=month || ((next) ? ((curr[0]==="dec") ? 0 :           months.indexOf(curr[0])+ 1) : ((curr[0])==="jan")? 11         : months.indexOf(curr[0])-1);
  }  
}
