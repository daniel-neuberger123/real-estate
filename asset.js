let slideIndex = 1;
var flag = true;
var duration = document.getElementById("duration").value;
le = [1, 3, 6, 9];
for (let r = 1; r <= duration; ++r) {
    le.push(12 * r);

};

function num(evt) {
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

        var equity = document.querySelector("#capital").value;
        document.querySelector("#capital").value = f(equity);

        var duration = document.querySelector("#duration").value;
        document.querySelector("#duration").value = f(duration);
        document.querySelectorAll('.year').textContent = f(duration);

        var repayment = document.querySelector("#amrt").value;
        document.querySelector("#amrt").value = f(repayment);

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
        // C_res();

    });
}

$(document).ready(function () {
    
    $("#price").on("change", function () {


        var rr = document.getElementById("price").value;
        document.getElementById("price").value = f(rr);
        document.getElementById("p-p2").value = f(rr);
        Appreciation();
    })

})

$('.new').on('keyup', Appreciation);


function eprofit() {

    var purchase = document.querySelector("#price").value;
    var price = document.getElementById("out-price").textContent;

    var profit = g(price) - g(purchase);
    var half = profit / 2;

    var aprofit = document.querySelector("#amrt").value * half + profit;

    let elt = document.getElementById("out-profit");
    let plt = document.getElementById("profits-2");
    let mlt = document.getElementById("asct");


    elt.textContent = f(parseInt(aprofit));
    plt.textContent = f(parseInt(aprofit));
    mlt.textContent = f(parseInt(aprofit)) + " €";

    var net_profit = g(price) - aprofit;
    let element = document.getElementById("out-loan");


    element.textContent = f(parseInt(net_profit));

}

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



        ctx1.strokeStyle = '#5e5858';
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



        ctx1.strokeStyle = '#5e5858';
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



        ctx1.strokeStyle = '#5e5858';
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

    element.addEventListener('change', function () {
        le = [1, 3, 6, 9];
        var slider = document.querySelector("#rg1");
        var duration = document.getElementById("duration").value;
        slider.max = parseInt(duration) + 4;
        slider.value = parseInt(duration) + 4;
        document.getElementById("rgvalue").textContent = parseInt(duration);

        for (let r = 1; r <= duration; ++r) {
            le.push(12 * r);

        };

     

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
    let s = window.matchMedia("(max-width:1400px)");

    if (slideIndex == 1) {
        if (q.matches) {
            $('.p1grid').show();
        }

    }

    else if (slideIndex == 2 || slideIndex == 3 || slideIndex == 4) {


        if (q.matches) {
            document.querySelector('.p1grid').style.display = 'none';
        }
        else if (s.matches) {
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
            slides[i].style.display = 'none';

        }
        else {
            document.querySelector('.p1grid').classList.add("slide-Anim");
            document.querySelector('.p1grid').classList.remove("Anim-part2");

            flag = false;
        }

    }
    var duration = document.querySelector("#duration").value;
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

        let q = window.matchMedia("(max-width:960px)");
        let s = window.matchMedia("(max-width:1400px)");
        if (q.matches) {
            document.querySelector('.p1grid').style.display = 'none';
        }


    }
    else if (slideIndex == 3 || slideIndex == 4) {
        document.querySelector('.head').textContent = "Der Fremdkapital-Hebel in " + duration + " Jahren ";
        document.getElementById("canvas123").style.display = 'block';

        let q = window.matchMedia("(max-width:960px)");
        if (q.matches) {
            document.querySelector('.p1grid').style.display = 'none';
        }
    }
    else {
        document.querySelector('.head').textContent = "Berechne Deinen Vermögensaufbau mit Immobilien";
    }


    setTimeout(function () {
        slides[slideIndex - 1].style.display = 'block';
    }, 300);
    dots[slideIndex - 1].className += " ind--active";

    draw();
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
    document.getElementById('t-s2').textContent = f(parseInt(new_add));
    document.getElementById('slide2-cont').textContent = f(parseInt(new_add));


    var text = document.getElementById('bill1-slide2').textContent;
    document.getElementById('bill1-slide2').textContent = f(text);

    new_add = new_add - g(text);
    document.getElementById('s21').textContent = f(parseInt(new_add));


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
            document.getElementById('slide2-cont').textContent = f(parseInt(new_add));


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
            if (this.id == "sp1") {

                let d1 = document.createElement("label");
                d1.setAttribute("id", "additional-cost");
                d1.textContent = "+Additional Purchase Costs:";
                d1.setAttribute("class", "txtr");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "additional-cost-price");
                v1.textContent = " " + f(sp1);
                v1.setAttribute("class", "btxt txtr");

                let p1 = document.createElement("span");
                p1.setAttribute("class", "btxt");
                p1.textContent = "€";

                var pt = document.querySelector("#upper-part");

                pt.appendChild(d1);
                pt.appendChild(v1);
                pt.appendChild(p1);


            }

            if (this.id == "sp2") {

                let d1 = document.createElement("label");
                d1.setAttribute("id", "broker-cost");
                d1.textContent = "+Brokerage Fees:";
                d1.setAttribute("class", "txtr");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "broker-cost-price");
                v1.textContent = " " + f(sp2);
                v1.setAttribute("class", "btxt txtr");

                let p1 = document.createElement("span");
                p1.setAttribute("class", "btxt");
                p1.textContent = "€";

                var pt = document.querySelector("#upper-part");

                pt.appendChild(d1);
                pt.appendChild(v1);
                pt.appendChild(p1);


            }
            if (this.id == "sp3") {

                var br1 = document.createElement("br");

                let d1 = document.createElement("label");
                d1.setAttribute("id", "misc-cost");
                d1.textContent = "+Miscalleneous:";
                d1.setAttribute("class", "txtr");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "misc-cost-price");
                v1.textContent = " " + f(sp3);
                v1.setAttribute("class", "btxt txtr");

                let p1 = document.createElement("span");
                p1.setAttribute("class", "btxt");
                p1.textContent = "€";

                var pt = document.querySelector("#upper-part");


                pt.appendChild(d1);
                pt.appendChild(v1);
                pt.appendChild(p1);


            }

            //  C_res();
        })

    });
}

[document.getElementById('r-v')].forEach(function (element) {
    element.addEventListener("change", function () {


        var rent1 = document.getElementById('rent').value;
        document.getElementById('rent').value = f(rent1);
        var rent2 = document.getElementById('r-v').value;
        document.getElementById('r-v').value = f(rent2)

        document.getElementById('hidden-bill').style.display = 'block';

        var result = g(rent1) * (g(rent2) / 100);


        document.getElementById('bill3-slide2').textContent = f(parseInt(rent1) + parseInt(result));

        document.getElementById('bill4-slide2').textContent = f(parseInt(rent1) + parseInt(2 * result));

        document.getElementById('bill5-slide2').textContent = f(parseInt(rent1) + parseInt(3 * result));


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
            document.getElementById('slide2-cont').textContent = f(parseFloat(deduct))

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
    document.getElementById('slide2-cont').textContent = f(parseFloat(deduct));
}
//EQUITY CAPITAL PART 2
$(document).ready(function () {

    [document.getElementById('price'), document.getElementById('capital-2'), document.getElementById('capital')].forEach(function (element) {

        element.addEventListener('change', function () {


            var kauf = document.getElementById('price').value;
            document.getElementById('price').value = f(kauf);
            document.getElementById('p-p2').value = f(kauf);

            var capital2 = document.getElementById('capital-2').value;
            document.getElementById('capital-2').value = f(capital2);

            var equity = document.getElementById('capital').value;
            document.getElementById('capital').value = f(equity);

            var percent1 = document.getElementById('percent1').value;
            document.getElementById('percent1').value = (percent1);
            var percent2 = document.getElementById('percent2').value;
            document.getElementById('percent2').value = (percent2);

            var duration = document.querySelector("#duration").value;
            document.querySelector("#duration").value = f(duration);
            document.querySelectorAll('.year').textContent = f(duration);

            var interest = document.getElementById('interest').value;
            document.getElementById('interest').value = f(interest);
            var repay = document.getElementById('repayment').value;
            document.getElementById('repayment').value = f(repay);


            if (this.id == 'capital' || this.id == 'price') {
                var ans1 = parseInt(Math.round((g(kauf) - g(equity)) * (percent1) * 0.0008333));
                var ans2 = parseInt(Math.round((g(kauf) - g(equity)) * (percent2) * 0.0008333));

            }

            else if (this.id == 'capital-2' || this.id == 'price') {
                var ans1 = parseInt(Math.round((g(kauf) - g(capital2)) * (percent1) * 0.0008333));
                var ans2 = parseInt(Math.round((g(kauf) - g(capital2)) * (percent2) * 0.0008333));

            }




          
            document.getElementById('interest').value = (ans1);
            document.getElementById('repayment').value = (ans2);

            let ue = ans1 + ans2;
          
            let w = 2;

            let oe = g(kauf) - g(equity);
            for (let r = 0;
                r < 12 * Number(duration);
                ++r) {
                oe -= ue - oe * (.01 * w / 12)
            }

            if (this.id == 'capital') {
             
                document.getElementById("capital-2").value = this.value;

                let ob = g(kauf) - 0;
                for (let r = 0;
                    r < 12 * Number(duration);
                    ++r) {
                    ob -= ue - ob * (.01 * w / 12)
                }
              
                let answer_equity = Math.round(ob) - Math.round(oe);
                let profit1 = g(document.getElementById("out-profit").textContent);
                answer_equity = answer_equity + profit1;
                document.getElementById("out-profit").textContent = f(answer_equity);
                document.getElementById("profits-2").textContent = f(answer_equity);
                document.getElementById("asct").textContent = f(answer_equity) + " €";


                let price = g(document.getElementById("out-price").textContent);

                document.getElementById("out-loan").textContent = f(price - answer_equity);

            }
            if (this.id == 'capital-2') {
               
                document.getElementById("capital").value = this.value;
            }



            if (this.id == "capital-2" || this.id == "capital") {


                let d1 = document.createElement("label");
                d1.setAttribute("id", "equity-cost");
                d1.textContent = "+Equity:";
                d1.setAttribute("class", "txtr");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "equity-cost-price");
                v1.setAttribute("class", "btxt txtr");

                if (this.id == 'capital') {
                    v1.textContent = " " + f(equity);
                }
                else {
                    v1.textContent = " " + f(capital2);
                }


                let p1 = document.createElement("span");
                p1.setAttribute("class", "btxt");
                p1.textContent = "€";


                var pt = document.querySelector("#upper-part");

                pt.appendChild(d1);
                pt.appendChild(v1);
                pt.appendChild(p1);

            }


            C_res();
            built();
        })

    })

});



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

        element.addEventListener('change', function () {


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

    let V = (document.getElementById("rpr").value);
    let I = (document.getElementById("r-v").value);
    let d = (document.getElementById("duration").value);


    let e = 12 * parseInt(g(V));
    t = 0;

    for (let a = 0; a < parseInt(g(d)); ++a) {
        t += e;
        a % 3 == 0 && (e *= 1 + parseInt(g(I)) / 100);
    }

    return t



}



function C_res(hh) {


    let P = (document.getElementById("sp1").value);
    let A = (document.getElementById("sp2").value);
    let W = (document.getElementById("sp3").value);
    let K = (document.getElementById("capital-2").value);
    let f = (document.getElementById("s21").textContent);
    let z = (document.getElementById("taxb").value);
    let time = (document.getElementById("duration").value);


    var be = val_be();


    var Ne = parseInt(g(P)) + parseInt(g(W)) + parseInt(g(A)) + parseInt(g(K)) + 12 * (hh) - parseInt(g(z)) * parseInt(g(time)) - be;

    Ne = parseInt(Ne);


    Ne = Ne * time;
    Ne = Ne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



    document.getElementById("t-cnt").textContent = Ne;
    document.getElementById("t-cnt-part2").textContent = " €" + Ne;
    document.getElementById("pigrslt").textContent = Ne + " €";


    //percentage 

    let part2 = document.getElementById("out-profit").textContent;

    //percentage 
    let pe = document.getElementById("out-loan").textContent;

    let ans = Math.abs(Math.round(100 * (pe / Ne - 1)), " %")

    document.getElementById("return").textContent = ans + "%";
    //    return


    let answer = parseInt(g(part2)) - parseInt(g(Ne));
    document.getElementById("pigrslt-final").textContent = (answer).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "€";


}

[document.getElementById("price"), document.getElementById("duration") ,  document.getElementById("rg1")].forEach(function (element) {

    element.addEventListener('change', function () {

        let P = (document.getElementById("sp1").value);
        let A = (document.getElementById("sp2").value);
        let W = (document.getElementById("sp3").value);
        let K = (document.getElementById("capital-2").value);
        let f = (document.getElementById("s21").textContent);
        let z = (document.getElementById("taxb").value);
        let time = (document.getElementById("duration").value);

        // document.getElementById('year').textContent = time;
        // document.getElementById('year2').textContent = time;
        document.getElementById('year-span').textContent = time;


        var be = val_be();


        var Ne = parseInt(g(P)) + parseInt(g(W)) + parseInt(g(A)) + parseInt(g(K)) + 12 * (parseInt(g(f)) - parseInt(g(z))) * parseInt(g(time)) - be;

        Ne = parseInt(Ne);

        let profit = document.getElementById("out-profit").textContent;
        var em = document.getElementById("rgvalue");
        var re = document.getElementById("rg1").value;
      
        if(this.id == 'rg1'){
            var timee = document.getElementById("duration").value;

             Ne =   (Ne / (12 * timee)) * le[re - 1];
            profit = (parseInt(g(profit)) / (12 * timee)) * le[re - 1];
           profit = Math.round(profit);
        }
       


        Ne = Ne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        profit = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        

        document.getElementById("t-cnt").textContent = Ne;
        document.getElementById("t-cnt-part2").textContent = " €" + Ne;
        document.getElementById("pigrslt").textContent = Ne + " €";
        document.getElementById("profits-2").textContent = profit + " €";


        let part2 = document.getElementById("profits-2").textContent;

        //percentage 
        let pe = document.getElementById("out-loan").textContent;

        let ans = Math.abs(Math.round(  (pe / Ne - 1)/100), " %")
        document.getElementById("return").textContent = ans + "%";
        //    return


        let answer = parseInt(g(part2)) - parseInt(g(Ne));
        document.getElementById("pigrslt-final").textContent = (answer).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";

        showSlides(3);

        return false;
    })

})


// let p1 = document.createElement("span");
// p1.setAttribute("class", "btxt");
// p1.textContent = "€";


// var pt= document.querySelector("#upper-part");

// pt.appendChild(d1);
