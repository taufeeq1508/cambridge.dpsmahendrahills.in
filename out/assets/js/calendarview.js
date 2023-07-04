$(document).ready(function () {

    function generate_year_range(start, end) {
        var years = "";
        for (var year = start; year <= end; year++) {
            years += "<option value='" + year + "'>" + year + "</option>";
        }
        return years;
    }

    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    selectYear = document.getElementById("year");
    selectMonth = document.getElementById("month");
    selectedDate = "";


    // createYear = generate_year_range(1970, 2050);
    /** or
     * createYear = generate_year_range( 1970, currentYear );
     */

    // document.getElementById("year").innerHTML = createYear;

    var calendar = document.getElementById("calendar");
    var lang = calendar.getAttribute('data-lang');

    var months = "";
    var days = "";

    var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (lang == "en") {
        months = monthDefault;
        days = dayDefault;
    } else if (lang == "id") {
        months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    } else if (lang == "fr") {
        months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    } else {
        months = monthDefault;
        days = dayDefault;
    }


    var $dataHead = "<tr>";
    for (dhead in days) {
        $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
    }
    $dataHead += "</tr>";

    //alert($dataHead);
    document.getElementById("thead-month").innerHTML = $dataHead;


    monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);



    $('#next').click(function () {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    });

    $('#previous').click(function () {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    });

    function showCalendar(month, year) {
        console.log("Show callendar adding again");

        var firstDay = (new Date(year, month)).getDay();

        tbl = document.getElementById("calendar-body");


        tbl.innerHTML = "";


        monthAndYear.innerHTML = months[month] + " " + year;
        // selectYear.value = year;
        // selectMonth.value = month;

        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {

            var row = document.createElement("tr");


            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cell = document.createElement("td");
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth(month, year)) {
                    break;
                } else {
                    cell = document.createElement("td");
                    cell.setAttribute("data-date", date);
                    cell.setAttribute("data-month", month + 1);
                    cell.setAttribute("data-year", year);
                    cell.setAttribute("data-month_name", months[month]);
                    cell.className = "date-picker";
                    cell.innerHTML = "<span>" + date + "</span>";

                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        selectedDate = today.getDate();
                        cell.className = "date-picker selected";
                    }
                    row.appendChild(cell);
                    date++;
                }


            }

            tbl.appendChild(row);
        }

    }

    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }
    // $('#calendar').on('click', function () {
    //     var tbl = document.getElementById("calendar");
    //     if (tbl != null) {
    //         $(this).find(".date-picker").closest("td").removeClass('selected');
    //         for (var i = 0; i < tbl.rows.length; i++) {
    //             for (var j = 0; j < tbl.rows[i].cells.length; j++) {
    //                 tbl.rows[i].cells[j].onclick = function (event) {
    //                     $(`[data-date=${selectedDate}]`).removeClass("selected");
    //                     var d = this.getAttribute('data-year') + - +this.getAttribute('data-month') + - +this.getAttribute('data-date');
    //                     var r = new Date(d);
    //                     var j = formatDate(r);
    //                     $("#slot").val(j);
    //                     $(this).addClass('selected');
    //                     console.log(selectedDate);
    //                     selectedDate = this.getAttribute('data-date');
    //                     event.stopPropagation();
    //                 };
    //             }
    //         }
    //     }
    // });
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
});
