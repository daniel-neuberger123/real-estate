
let slideIndex = 1;
var flag = true;
var duration = document.getElementById("duration").value;
le = [1, 3, 6, 9];
for (let r = 1; r <= duration; ++r) {
    le.push(12 * r);

};
var Ne;

function n(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function l(num) {
    var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return commas;

}
function f(num) {

    var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return commas;
};

function g(num) {

    var numb = Number(num.replace(/[^0-9|-]/g, ""));
    return numb;
};


function Appreciation() {

    $(document).ready(function () {

        var purchase = document.querySelector("#price").value;

        var duration = document.querySelector("#duration").value;


        var performance = document.querySelector("#aprct").value;
        document.querySelector("#aprct").value = f(performance);


        var num, ans;
        var step1, step2;

        step1 = f(parseFloat(performance)) / 100;
        num = step1 + 1;

        step2 = Math.pow(num, duration);
        ans = step2 * (g(purchase));
        ans = parseInt(ans);

        let elem = document.getElementById("out-price");

        elem.textContent = f(ans);

        eprofit();


    });
}
$(document).ready(function () {

    let peak = document.createElement("h1");
    let p1 = document.createElement("p");
    let q1 = document.createElement("p");
    let l1 = document.createElement("p");
    peak.textContent = "Haftungsausschluss – des Immo Rechners der Grauhirsch Immobilien GmbH";
    p1.textContent = "Der Immo Rechner wurde mit größter Sorgfalt konzipiert und wird Ihnen kostenfrei aber auf eigenes Risiko zur Verfügung gestellt. Der Immo Rechner stellt lediglich eine Beispiels wertentwicklung einer Immobilie auf Basis der durch Sie eingegeben Daten dar, ohne dass das Rechenergebnis zu einer Immobilienwertentwicklung als die Realität abbildbar und/oder als verlässlich zu erachten ist. Das ermittelte Ergebnis des Immo Rechners dient lediglich als nicht belastbare Orientierungshilfe und als erster Anhaltspunkt für Sie und ersetzt insbesondere keine fachgerechte Beratung zu einer";
    q1.textContent = "Immobilien investition. Der Immo Rechner und die Rechener gebnisse zu einer Immobilien wertentwicklung sind daher auch ausdrücklich nicht als persönliche Anlageberatung zu verstehen. Die Grauhirsch Immobilien GmbH übernimmt ausdrücklich auch keine Haftung für die Richtigkeit der Berechnung des Immo Rechners und dessen ermittelte Wertentwicklungs ergebnisse und des tatsächlichen Eintritts der ermittelten Immobilien wertentwicklung und übernimmt daher auch keine Haftung, sofern Sie Ihre Entscheidung über eine Immobilien investition auf Basis des Wertentwicklungs ergebnisses des Immo Rechners treffen. Ferner gilt: Die weitere Nutzung der";
    l1.textContent = "Wertermittlungs ergebnisse obliegt ausschließlich Ihnen als Anwender.Insofern gilt dieser Haftungsausschluss auch gegenüber Dritten.";

    let disclaimer = document.getElementById("para");
    disclaimer.appendChild(peak);
    disclaimer.appendChild(p1);
    disclaimer.appendChild(q1);
    disclaimer.appendChild(l1);


    $("#price").on("change", function () {


        var rr = document.getElementById("price").value;
        document.getElementById("price").value = f(rr);
        document.getElementById("p-p2").value = f(rr);
        Appreciation();
    })

})

$('.new').on('keyup', Appreciation);

document.addEventListener("DOMContentLoaded", function () {

    [document.getElementById('amrt'), document.getElementById('percent2')].forEach(function (element) {


        element.addEventListener("keyup", function () {

            if (this.id == 'amrt') {
                document.getElementById("percent2").value = this.value;
            }
            else {

                document.getElementById("amrt").value = this.value;
            }

        })
    })
})

function eprofit() {
    var kauf = document.getElementById('price').value;

    var capital2 = document.getElementById('capital-2').value;
    document.getElementById('capital-2').value = f(capital2);

    var equity = document.getElementById('capital').value;
    var percent1 = document.getElementById('percent1').value;
    var percent2 = document.getElementById('percent2').value;
    var duration = document.querySelector("#duration").value;
    // document.querySelectorAll('.year').textContent = f(duration);




    var ans1 = parseInt(Math.round(((g(kauf) - g(equity)) * percent1 * 0.01) / 12));
    var ans2 = parseInt(Math.round(((g(kauf) - g(equity)) * percent2 * 0.01) / 12));

    let ue = ans1 + ans2;
    document.getElementById('interest').value = f(ans1);
    document.getElementById('repayment').value = f(ans2);

    document.getElementById("s21").textContent = f(ue);



    let w = document.getElementById("percent1").value;

    let oe = g(kauf) - g(equity);
    for (let r = 0; r < 12 * (duration); ++r) {
        oe -= ue - oe * ((0.01 * w) / 12);
    }

    de = Math.round(oe)

    document.getElementById("out-loan").textContent = f(de);
    var ge = document.getElementById("out-price").textContent;
    pe = parseInt(g(ge)) - de
    document.getElementById("out-profit").textContent = f(pe);
    // document.getElementById("asct").textContent = f(pe) + " €";
    document.getElementById("profits-2").textContent = f(pe) + " €";



}

$(document).ready(function () {

    [document.getElementById('price'), document.getElementById('capital-2'), document.getElementById('capital')
        , document.getElementById('amrt'), document.getElementById('aprct'), document.getElementById('duration')].forEach(function (element) {

            element.addEventListener('change', function () {


                var kauf = document.getElementById('price').value;
                document.getElementById('price').value = f(kauf);
                document.getElementById('p-p2').value = f(kauf);

                var capital2 = document.getElementById('capital-2').value;
                document.getElementById('capital-2').value = f(capital2);

                var equity = document.getElementById('capital').value;
                document.getElementById('capital').value = f(equity);

                var percent1 = document.getElementById('percent1').value;

                var percent2 = document.getElementById('percent2').value;

                var duration = document.querySelector("#duration").value;

                var interest = document.getElementById('interest').value;
                document.getElementById('interest').value = f(interest);
                var repay = document.getElementById('repayment').value;
                document.getElementById('repayment').value = f(repay);


                if (this.id == 'capital') {

                    document.getElementById('capital-2').value = this.value;

                }

                else if (this.id == 'capital-2') {
                    document.getElementById('capital').value = this.value;

                }
                var capital2 = document.getElementById('capital-2').value;
                var equity = document.getElementById('capital').value;


                var ans1 = parseInt(Math.round(((g(kauf) - g(equity)) * percent1 * 0.01) / 12));
                var ans2 = parseInt(Math.round(((g(kauf) - g(equity)) * percent2 * 0.01) / 12));


                document.getElementById('interest').value = f(ans1);
                document.getElementById('repayment').value = f(ans2);


                let ue = ans1 + ans2;

                document.getElementById("s21").textContent = f(ue);


                let w = document.getElementById("percent1").value;


                let oe = g(kauf) - g(equity);
                for (let r = 0;
                    r < 12 * Number(duration);
                    ++r) {
                    oe -= ue - oe * (.01 * w / 12)
                }




                let ob = g(kauf) - 0;
                for (let r = 0;
                    r < (12 * Number(duration));
                    ++r) {
                    ob -= ue - ob * (.01 * w / 12)
                }

                document.getElementById("out-loan").textContent = f(Math.round(oe));
                var out = document.getElementById("out-price").textContent;
                document.getElementById("out-profit").textContent = f(Number(g(out)) - Math.round(oe));
                document.getElementById("profits-2").textContent = f(Number(g(out)) - Math.round(oe)) + " €";


                C_res();
                built();
            })

        })

});



function draw() {

    let p = window.matchMedia("(max-width:640px)");
    let q = window.matchMedia("(max-width:960px)");

    const canvas1 = document.querySelector('#canvas1');
    const canvas123 = document.querySelector('#canvas123');

    if (!canvas1.getContext && !canvas123.getContext) {
        return;
    }
    const ctx1 = canvas1.getContext('2d');
    const ctx123 = canvas1.getContext('2d');
    if (p.matches) {

        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);


        ctx1.strokeStyle = '#b1bbc2';
        ctx1.lineWidth = 8;

        ctx1.beginPath();
        ctx1.moveTo(250, 670);
        ctx1.lineTo(980, 200);
        ctx1.stroke();



        ctx1.strokeStyle = '#dfcb8d';
        ctx1.lineWidth = 10;
        ctx1.beginPath();
        ctx1.moveTo(1050, 670);
        ctx1.lineTo(1050, 200);
        ctx1.stroke();


        ctx1.strokeStyle = '#b1bbc2';
        ctx1.lineWidth = 8;
        // draw a  line
        ctx1.beginPath();
        ctx1.moveTo(1780, 670);
        ctx1.lineTo(1120, 200);
        ctx1.stroke();



    }
    else if (q.matches) {


        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

        ctx1.strokeStyle = '#b1bbc2';
        ctx1.lineWidth = 4;

        ctx1.beginPath();
        ctx1.moveTo(515, 330);
        ctx1.lineTo(1700, 195);
        ctx1.stroke();



        ctx1.strokeStyle = '#dfcb8d';
        ctx1.lineWidth = 4;

        ctx1.beginPath();
        ctx1.moveTo(515, 350);
        ctx1.lineTo(1700, 350);
        ctx1.stroke();



        ctx1.strokeStyle = '#b1bbc2';
        ctx1.lineWidth = 4;
        ctx1.beginPath();
        ctx1.moveTo(515, 370);
        ctx1.lineTo(1700, 490);
        ctx1.stroke();

        (ctx1.lineWidth = 4),
            ctx1.moveTo(canvas1.width - 150, 230),
            ctx1.lineTo(canvas1.width - 150, canvas1.height / 2 - 30),
            ctx1.moveTo(canvas1.width - 150, canvas1.height - 230),
            ctx1.lineTo(canvas1.width - 150, canvas1.height / 2 + 30),
            ctx1.stroke();


    }


    else {


        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

        ctx1.strokeStyle = '#b1bbc2';
        ctx1.lineWidth = 4;

        ctx1.beginPath();
        ctx1.moveTo(385, 330);
        ctx1.lineTo(1800, 120);
        ctx1.stroke();



        ctx1.strokeStyle = '#dfcb8d';
        ctx1.lineWidth = 4;

        ctx1.beginPath();
        ctx1.moveTo(385, 350);
        ctx1.lineTo(1800, 350);
        ctx1.stroke();



        ctx1.strokeStyle = '#b1bbc2';
        ctx1.lineWidth = 4;
        ctx1.beginPath();
        ctx1.moveTo(385, 370);
        ctx1.lineTo(1800, 580);
        ctx1.stroke();


        (ctx1.lineWidth = 4),
            ctx1.moveTo(canvas1.width - 100, 150),
            ctx1.lineTo(canvas1.width - 100, canvas1.height / 2 - 30),
            ctx1.moveTo(canvas1.width - 100, canvas1.height - 150),
            ctx1.lineTo(canvas1.width - 100, canvas1.height / 2 + 30),
            ctx1.stroke();

        if (slideIndex != 1)
            (ctx123.lineWidth = 4),
                ctx123.moveTo(1990, 40),
                ctx123.lineTo(1990, 1640),
                ctx123.stroke();
    }


}
//slider function.
[document.getElementById("duration")].forEach(function (element) {

    element.addEventListener('input', function () {
        le = [1, 3, 6, 9];
        var slider = document.querySelector("#rg1");
        var duration = document.getElementById("duration").value;
        slider.max = parseInt(duration) + 4;
        slider.value = parseInt(duration) + 4;
        document.getElementById("rgvalue").textContent = parseInt(duration);

        for (let r = 1; r <= duration; ++r) {
            le.push(12 * r);


        };

        document.querySelector('.head').textContent = "Der Fremdkapital-Hebel in " + duration + " Jahren ";
    });

});

function sliderfun() {

    var em = document.getElementById("rgvalue");
    var rng = document.getElementById("rg1").value;
    var rngyear = document.getElementById("rgyear");
    // em.textContent = rng;
    em.textContent = le[rng - 1] >= 12 ? le[rng - 1] / 12 : le[rng - 1];

    rngyear.textContent = le[rng - 1] < 12
        ? " Monat" + (le[rng - 1] > 1 ? "e" : "")
        : " Jahre" + (le[rng - 1] > 12 ? "e" : "")



}




draw();

window.addEventListener('resize', draw);
window.onresize = slides;

function slides() {

    let q = window.matchMedia("(max-width:960px)");

    if (slideIndex == 1) {
        if (q.matches) {
            $('.p1grid').show();

        }

    }

    else if (slideIndex == 2 || slideIndex == 3) {

        if (q.matches) {

            document.querySelector('.p1grid').style.display = 'none';
        }
        else {
            $('.p1grid').show();
        }


    }


}

function plus(n) {

    showSlides(slideIndex += n);
}

function crnt(n) {

    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("pmain");
    let dots = document.getElementsByClassName("ind");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 1; i < slides.length; i++) {
        if (flag == false) {

            slides[i].style.display = 'none';   //remove 

        }
        else {
            document.querySelector('.p1grid').classList.add("slide-Anim");
            document.querySelector('.p1grid').classList.remove("Anim-part2");
            flag = false;
        }

    }



    // var duration = document.querySelector("#duration").value;
    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" ind--active", "");

    }
    if (slideIndex == 1) {
        document.querySelector('.p1grid').classList.add("Anim-part2");
        document.querySelector('.p1grid').classList.remove("slide-Anim");
        document.getElementById("canvas123").style.display = 'none';
        flag = true;

        let q = window.matchMedia("(max-width:960px)");
        if (q.matches) {
            $('.p1grid').show();
        }

    }

    if (slideIndex == 2) {

        document.querySelector('.head').textContent = "Monatlicher Eigenanteil für Vermögensaufbau";
        document.getElementById("canvas123").style.display = 'block';

        document.querySelector('.p1grid').classList.remove("last-part-pages");

        let q = window.matchMedia("(max-width:960px)");

        if (q.matches) {
            document.querySelector('.p1grid').style.display = 'none';
        }


    }
    else if (slideIndex == 3) {

        document.querySelector('.head').textContent = "Der Fremdkapital-Hebel in " + duration + " Jahren ";
        document.getElementById("canvas123").style.display = 'block';
        document.querySelector('.p1grid').classList.add("last-part-pages");

        let q = window.matchMedia("(max-width:960px)");
        if (q.matches) {
            document.querySelector('.p1grid').style.display = 'none';
        }
    }
    else {
        document.querySelector('.head').textContent = "Berechne Deinen Vermögensaufbau mit Immobilien";
    }

    let q = window.matchMedia("(max-width:960px)");
    if (q.matches) {
        slides[slideIndex - 1].style.display = 'block';
    }
    else {

        if (slideIndex == 2) {
            setTimeout(
                function () {
                    slides[slideIndex - 1].style.display = 'block';
                }, 200
            );
        }
        else {

            slides[slideIndex - 1].style.display = 'block';

        }
    }


    dots[slideIndex - 1].className += " ind--active";


    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    //FOR NEXT BUTTON..
    if (slideIndex == slides.length) {
        nextBtn.disabled = true;
        document.querySelector("#nextBtn").classList.remove("pbtn--active");

    }
    else {
        nextBtn.disabled = false;
        document.querySelector("#nextBtn").classList.add("pbtn--active");
    }

    // FOR PREV BUTTON
    if (slideIndex > 1) {
        document.querySelector("#prevBtn").classList.add("pbtn--active");
        prevBtn.disabled = false;
    }
    else {
        document.querySelector("#prevBtn").classList.remove("pbtn--active");
        prevBtn.disabled = true;
    }

    draw();
}


function dis() {
    var disc = document.getElementById("dis");
    disc.style.display = 'none';
}
function built() {

    var interest = document.getElementById('interest').value;
    document.getElementById('interest').value = f(interest);
    document.getElementById("ipr").value = f(interest);
    var repay = document.getElementById('repayment').value;
    document.getElementById('repayment').value = f(repay)
    var ad = document.getElementById('admin').value;
    document.getElementById('admin').value = f(ad);
    var misc = document.getElementById('misc1').value;
    document.getElementById('misc1').value = f(misc)


    var new_add = g(interest) + g(repay) + g(ad) + g(misc);
    document.getElementById('s21').textContent = f(parseInt(new_add));


    var text = document.getElementById('bill1-slide2').textContent;


    let new_add1 = new_add - g(text);
    document.getElementById('t-s2').textContent = f(parseInt(new_add1));

    // console.log("hrehf");
    C_res(new_add);

}

document.addEventListener("DOMContentLoaded", function () {

    [document.getElementById('interest'), document.getElementById('repayment'), document.getElementById('admin'), document.getElementById('misc1')].forEach(function (element) {


        element.addEventListener("keyup", function () {

            var interest = document.getElementById('interest').value;
            document.getElementById('interest').value = f(interest);
            var repay = document.getElementById('repayment').value;
            document.getElementById('repayment').value = f(repay)
            var ad = document.getElementById('admin').value;
            document.getElementById('admin').value = f(ad);
            var misc = document.getElementById('misc1').value;
            document.getElementById('misc1').value = f(misc)


            var new_add = g(interest) + g(repay) + g(ad) + g(misc);

            document.getElementById('t-s2').textContent = f(parseInt(new_add));

            C_res(new_add);
            var text = document.getElementById('bill1-slide2').textContent;
            document.getElementById('bill1-slide2').textContent = f(text);

            new_add = new_add - g(text);
            document.getElementById('s21').textContent = f(parseInt(new_add));

            if (this.id == "admin" || this.id == "misc1") {
                return;
            }
            else {
                var new_interest = g(interest) * 0.006;
                var new_interest2 = g(repay) * 0.006;

                document.getElementById('percent1').value = (parseFloat(new_interest));
                document.getElementById('percent2').value = (parseFloat(new_interest2));

            }
        });

    })
});
window.onload = () => {

    [document.getElementById('sp1'), document.getElementById('sp2'), document.getElementById('sp3')].forEach(function (element) {
        element.addEventListener("change", function () {



            var sp1 = document.getElementById('sp1').value;
            document.getElementById('sp1').value = f(sp1)
            var sp2 = document.getElementById('sp2').value;
            document.getElementById('sp2').value = f(sp2);
            var sp3 = document.getElementById('sp3').value;
            document.getElementById('sp3').value = f(sp3);


            let p = document.getElementById("s21").textContent;

            p = g(p);
            C_res(p);
            //  C_res();
        })

    });
}

[document.getElementById('r-v'), document.getElementById('rent'), document.getElementById('duration'),
document.getElementById('amrt'), document.getElementById('admin'), document.getElementById('misc1'), document.getElementById('taxb')].forEach(function (element) {
    element.addEventListener("change", function () {

        let q1;

        var V = document.getElementById('rent').value;
        var z = document.getElementById("taxb").value;
        var duration = document.getElementById("duration").value;
        var I = document.getElementById('r-v').value;
        var ce = document.getElementById('interest').value;
        var me = document.getElementById('repayment').value;
        var f = document.getElementById('admin').value;
        var k = document.getElementById('misc1').value;
        var section = document.getElementById("hid");

        let ve, ee, he, ue;
        ee = parseInt(g(V)) + parseInt(g(z));
        ue = parseInt(g(ce)) + parseInt(g(me));
        he = ue + parseInt(g(f)) + parseInt(g(k));

        ve = he - ee;


        if ($("#hid").find("span").length !== 0) {

            while (section.firstChild) {
                section.removeChild(section.lastChild);

            }
        }
        if (V == 0 || I == 0) {
            return;
        }
        else {

            for (let i = 0; 3 * (i + 1) <= duration; i++) {

                q1 = Math.round(parseInt(ve +
                    parseInt(g(V)) -
                    parseInt(g(V)) * Math.pow(1 + 0.01 * parseInt((I)), (i + 1)))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

                let p1 = document.createElement("span");
                p1.setAttribute("class", "class1");
                p1.textContent = " nach " + 3 * (i + 1) + " Jahren: " + q1 + " €";
                section.appendChild(p1);


            }

        }

        let p = document.getElementById("s21").textContent;

        p = g(p);
        C_res(p);
    })

})




$(document).ready(function () {

    [document.getElementById('rent'), document.getElementById('taxb')].forEach(function (element) {
        element.addEventListener("change", function () {

            var rent = document.getElementById('rent').value;
            document.getElementById('rent').value = f(rent)
            var tax = document.getElementById('taxb').value;
            document.getElementById('taxb').value = f(tax)
            var diff = document.getElementById('s21').textContent;
            document.getElementById('s21').textContent = f(diff);


            var new_add = Number(g(rent)) + Number(g(tax));
            var deduct = Number(g(diff)) - (Number(new_add));

            document.getElementById('bill1-slide2').textContent = f(parseFloat(new_add));

            //deductible
            document.getElementById('t-s2').textContent = f(parseFloat(deduct));

            let p = document.getElementById("s21").textContent;

            p = g(p);
            C_res(p);
        });
    });

});

function called() {

    var rent = document.getElementById('rent').value;
    document.getElementById('rent').value = f(rent)
    var tax = document.getElementById('taxb').value;
    document.getElementById('taxb').value = f(tax)
    var diff = document.getElementById('s21').textContent;
    document.getElementById('s21').textContent = f(diff);


    var new_add = Number(g(rent)) + Number(g(tax));
    var deduct = Number(g(diff)) - (Number(new_add));


    document.getElementById('bill1-slide2').textContent = f(parseFloat(new_add));

    document.getElementById('t-s2').textContent = f(parseFloat(deduct));

    var hh = document.getElementById('s21').textContent;
    C_res(hh);
}
//EQUITY CAPITAL PART 2


//PAGE2 PART2
$(document).ready(function () {


    [document.getElementById('pv--price'), document.getElementById('dp-price'), document.getElementById('price')].forEach(function (element) {

        element.addEventListener('change', function () {

            var kauf = document.getElementById('price').value;
            document.getElementById('price').value = f(kauf);
            var value = document.getElementById("pv--price").value;
            document.getElementById("pv--price").value = f(value);
            var dp = document.getElementById("dp-price").value;
            document.getElementById("dp-price").value = f(dp);

            document.getElementById("pv--percent1").value = l(parseFloat(g(value) / 2000));

            var Afa = (g(kauf) - g(value)) * g(dp) / 100;

            var Afa2 = Afa / 12;
            document.getElementById("a-pr").value = f(Math.round(Afa));
            document.getElementById("a-pr2").value = f(Math.round(Afa2));


        })

    })

});

function tax() {
    $(document).ready(function () {
        document.getElementById('p2p2').style.display = 'block';
        document.getElementById('p2p1').style.display = 'none';

    })
}

$(document).ready(function () {
    $('#rent').change(function () {
        $('#rpr').val(f($('#rent').val()));
    });
});



$(document).ready(function () {
    $('#admin').change(function () {
        $('#adp').val(f($('#admin').val()));
    });
});


$(document).ready(function () {
    $('#interest').change(function () {
        $('#ipr').val(f($('#interest').val()));
        built();
    });
});

$(document).ready(function () {

    [document.getElementById('hpr'), document.getElementById('rpr'), document.getElementById('opr'),
    document.getElementById('oth'), document.getElementById('a-pr2'), document.getElementById('adp'),
    document.getElementById('ipr')
    ].forEach(function (element) {

        element.addEventListener('input', function () {


            var G = document.getElementById('hpr').value;
            document.getElementById('hpr').value = f(G);
            var V = document.getElementById('rpr').value;
            document.getElementById('rpr').value = f(V);
            var Z = document.getElementById('opr').value;
            document.getElementById('opr').value = f(Z);
            var X = document.getElementById('oth').value;
            document.getElementById('oth').value = f(X);

            var p = document.getElementById('a-pr2').value;
            document.getElementById('a-pr2').value = f(p);

            var k = document.getElementById('adp').value;

            document.getElementById('adp').value = f(k);
            var ce = document.getElementById('ipr').value;
            document.getElementById('ipr').value = f(ce);



            var xe = g(V) + g(Z) - g(X) - g(p) - g(k) - g(ce);
            var we = Math.round(xe * g(G) / -100);
            document.getElementById('g-p').textContent = f(parseInt((we)));

            // C_res()
        })
    })
})

function benefit() {
    document.getElementById('p2p1').style.display = 'block';
    document.getElementById('p2p2').style.display = 'none';


    var p = document.getElementById("g-p").textContent;
    document.getElementById('taxb').value = f(p);

    called();
}

function benefit2() {

    document.getElementById('p2p2').style.display = 'none';
    document.getElementById('p2p1').style.display = 'block';

    let p = document.getElementById('taxb').value;

    let v = document.getElementById('t-s2').textContent;
    let q = document.getElementById('bill1-slide2').textContent;

    document.getElementById('t-s2').textContent = f(parseInt(g(v)) - parseInt(g(p)));
    document.getElementById('bill1-slide2').textContent = f(parseInt(g(q)) - parseInt(g(p)));


    document.getElementById('taxb').value = 0;
}


function val_be() {

    let V = (document.getElementById("rent").value);
    let I = (document.getElementById("r-v").value);
    let d = (document.getElementById("duration").value);

    let e = 12 * parseInt(g(V));
    t = 0;

    for (let a = 0; a < parseInt(g(d)); ++a) {
        t += e;
        a % 3 == 0 && (e *= 1 + parseInt(g(I)) / 100);
    }

    return t;
}



function C_res(hh) {


    let P = (document.getElementById("sp1").value);
    let A = (document.getElementById("sp2").value);
    let W = (document.getElementById("sp3").value);
    let K = (document.getElementById("capital-2").value);
    let z = (document.getElementById("taxb").value);
    let time = (document.getElementById("duration").value);


    var be = val_be();


    Ne = parseInt(g(P)) +
        parseInt(g(W)) +
        parseInt(g(A)) +
        parseInt(g(K)) +

        12 * ((hh) - parseInt(g(z))) * parseInt(g(time))
        - be;

    Ne = parseInt(Ne);

    Ne = Ne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementById("pigrslt").textContent = Ne + " €";



    let part2 = document.getElementById("profits-2").textContent;

    let answer = parseInt(g(part2)) - parseInt(g(Ne));
    document.getElementById("pigrslt-final").textContent = (answer).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";


}


var price = document.getElementById("price");
var time = document.getElementById("duration");
var slide = document.getElementById("rg1");

price.addEventListener("change", handler);

time.addEventListener("change", handler);

slide.addEventListener("input", handler);

function handler() {
    var Pq, profit;
    let P = (document.getElementById("sp1").value);
    let A = (document.getElementById("sp2").value);
    let W = (document.getElementById("sp3").value);
    let K = (document.getElementById("capital-2").value);
    let f = (document.getElementById("s21").textContent);
    let z = (document.getElementById("taxb").value);
    let time = (document.getElementById("duration").value);
    var be = val_be();


    Ne = parseInt(g(P)) +
        parseInt(g(W)) +
        parseInt(g(A)) +
        parseInt(g(K)) +

        12 * ((parseInt(g(f))) - parseInt(g(z))) * parseInt(g(time))
        - be;


    if (this.id == 'rg1') {
        profit = document.getElementById("out-profit").textContent;
        var re = document.getElementById("rg1").value;
        var timee = document.getElementById("duration").value;

        Pq = Math.round(Ne / (12 * timee)) * le[re - 1];
        profit = Math.round(parseInt(g(profit)) / (12 * timee)) * le[re - 1];

        Pq = Pq.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        if (this.id == 'rg1') {

            document.getElementById("pigrslt").textContent = Pq + " €";

        }
        else {
            Ne = Ne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            document.getElementById("pigrslt").textContent = Ne + " €";

        }
    }

    profit = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementById("profits-2").textContent = profit + " €";


    let part2 = document.getElementById("profits-2").textContent;

    let answer;
    if (this.id == 'rg1' || this.id == 'duration') {
        answer = parseInt(g(part2)) - (g(Pq));
    }
    else {
        answer = parseInt(g(part2)) - (g(Ne));

    }

    document.getElementById("pigrslt-final").textContent = (answer).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";

}