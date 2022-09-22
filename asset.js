
var flag = true;
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

        var repayment = document.querySelector("#amortisation-rate").value;
        document.querySelector("#amortisation-rate").value = f(repayment);

        var performance = document.querySelector("#appreciation-rate").value;
        document.querySelector("#appreciation-rate").value = f(performance);


        var num, ans;
        var step1, step2;

        step1 = f(parseFloat(performance)) / 100;
        num = step1 + 1;

        step2 = Math.pow(num, duration);
        ans = step2 * (g(purchase));
        ans = parseInt(ans);

        let elem = document.getElementsByClassName("new_prices");

        for (var i = 0; i < elem.length; i++) {
            elem[i].value = f(ans);
        }

        eprofit();
        // C_res();

    });
}

$(document).ready(function () {

    $("#price").on("change", function () {

 
        var rr = document.getElementById("price").value;
        document.getElementById("price").value = f(rr);
        document.getElementById("purchase-p2").value = f(rr);
        Appreciation();
    })

})
function profit_func(){
    let elt = document.getElementsByClassName("profits");
    
}
$('.new').on('keyup', Appreciation);

$('#profits').on("change" , profit_func());
function eprofit() {

    var purchase = document.querySelector("#price").value;
    var price = document.getElementById("output-price").value;

    var profit = g(price) - g(purchase);
    var half = profit / 2;

    var aprofit = document.querySelector("#amortisation-rate").value * half + profit;

    let elt = document.getElementsByClassName("profits");


    for (var i = 0; i < elt.length; i++) {

        elt[i].value = f(parseInt(aprofit));
        elt[i].textContent= f(parseInt(aprofit));
    }

    var net_profit = g(price) - aprofit;
    let element = document.getElementsByClassName("loans");

    for (var i = 0; i < element.length; i++) {
        element[i].value = f(parseInt(net_profit));
    }
}

function draw() {

    let p = window.matchMedia("(max-width:640px)");
    let q = window.matchMedia("(max-width:630px)");

    const canvas1 = document.querySelector('#canvas1');
    const canvas2 = document.querySelector("#canvas2");
    const canvas3 = document.querySelector("#canvas3");

    if (!canvas1.getContext && !canvas2.getContext && !canvas3.getContext) {
        return;
    }
    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctx3 = canvas3.getContext('2d');

    if (q.matches) {

        canvas1.height = 800;
        canvas2.height = 800;
        canvas3.height = 800;
        canvas1.width = window.innerWidth;
        canvas2.width = window.innerWidth;
        canvas3.width = window.innerWidth;


        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);


        ctx1.strokeStyle = 'grey';
        ctx1.lineWidth = 4;

        ctx1.beginPath();
        ctx1.moveTo(110, 650);
        ctx1.lineTo(220, 200);
        ctx1.stroke();



        ctx2.strokeStyle = '#f4941c';
        ctx2.lineWidth = 4;

        ctx2.beginPath();
        ctx2.moveTo(250, 650);
        ctx2.lineTo(250, 200);
        ctx2.stroke();


        ctx3.strokeStyle = 'grey';
        ctx3.lineWidth = 4;
        ctx3.beginPath();
        ctx3.moveTo(360, 650);
        ctx3.lineTo(280, 200);
        ctx3.stroke();

    }

    else if (p.matches) {

        canvas1.height = 800;
        canvas2.height = 800;
        canvas3.height = 800;

        canvas1.width = window.innerWidth;
        canvas2.width = window.innerWidth;
        canvas3.width = window.innerWidth;
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);


        ctx1.strokeStyle = 'grey';
        ctx1.lineWidth = 2;

        ctx1.beginPath();
        ctx1.moveTo(150, 650);
        ctx1.lineTo(270, 200);
        ctx1.stroke();



        ctx2.strokeStyle = '#f4941c';
        ctx2.lineWidth = 2;
        ctx2.beginPath();
        ctx2.moveTo(315, 650);
        ctx2.lineTo(315, 200);
        ctx2.stroke();


        ctx3.strokeStyle = 'grey';
        ctx3.lineWidth = 2;
        // draw a  line
        ctx3.beginPath();
        ctx3.moveTo(470, 650);
        ctx3.lineTo(360, 200);
        ctx3.stroke();



    }
    else {


        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);


        ctx1.strokeStyle = 'rgb(172, 164, 164)';
        ctx1.lineWidth = 4;

        ctx1.beginPath();
        ctx1.moveTo(235, 330);
        ctx1.lineTo(1130, 120);
        ctx1.stroke();



        ctx2.strokeStyle = '#f4941c';
        ctx2.lineWidth = 4;

        ctx2.beginPath();
        ctx2.moveTo(235, 350);
        ctx2.lineTo(1130, 340);
        ctx2.stroke();



        ctx3.strokeStyle = 'rgb(172, 164, 164)';
        ctx3.lineWidth = 4;
        ctx3.beginPath();
        ctx3.moveTo(235, 370);
        ctx3.lineTo(1130, 575);
        ctx3.stroke();

    }

}
draw();

window.addEventListener('resize', draw);


let slideIndex = 1;

function plusSlides(n) {

    showSlides(slideIndex += n);
}

function currentSlide(n) {

    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("main-page");
    let dots = document.getElementsByClassName("pn-indicator");

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
            document.querySelector('.page-1__grid').classList.add("slide-Anim");
            flag = false;
        }

    }
    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" pn-indicator--active", "");

    }
    if (slideIndex == 1) {

        document.querySelector('.page-1__grid').classList.remove("slide-Anim");
        flag = true;
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += " pn-indicator--active";
}



function built() {

    var interest = document.getElementById('interest').value;
    document.getElementById('interest').value = f(interest);
    document.getElementById("interest-price").value = f(interest);
    var repay = document.getElementById('repayment').value;
    document.getElementById('repayment').value = f(repay)
    var ad = document.getElementById('administration').value;
    document.getElementById('administration').value = f(ad);
    var misc = document.getElementById('misc1').value;
    document.getElementById('misc1').value = f(misc)


    var new_add = g(interest) + g(repay) + g(ad) + g(misc);
    document.getElementById('bill2-slide2').textContent = f(parseInt(new_add));
    document.getElementById('slide2-cont').textContent = f(parseInt(new_add));


    var text = document.getElementById('bill1-slide2').textContent;
    document.getElementById('bill1-slide2').textContent = f(text);

    new_add = new_add - g(text);
    document.getElementById('billnan-slide2').textContent = f(parseInt(new_add));


    C_res(new_add);

}

document.addEventListener("DOMContentLoaded", function () {

    [document.getElementById('interest'), document.getElementById('repayment'), document.getElementById('administration'), document.getElementById('misc1')].forEach(function (element) {


        element.addEventListener("keyup", function () {

            var interest = document.getElementById('interest').value;
            document.getElementById('interest').value = f(interest);
            var repay = document.getElementById('repayment').value;
            document.getElementById('repayment').value = f(repay)
            var ad = document.getElementById('administration').value;
            document.getElementById('administration').value = f(ad);
            var misc = document.getElementById('misc1').value;
            document.getElementById('misc1').value = f(misc)


            var new_add = g(interest) + g(repay) + g(ad) + g(misc);

            document.getElementById('bill2-slide2').textContent = f(parseInt(new_add));
            document.getElementById('slide2-cont').textContent = f(parseInt(new_add));


            C_res(new_add);
            var text = document.getElementById('bill1-slide2').textContent;
            document.getElementById('bill1-slide2').textContent = f(text);

            new_add = new_add - g(text);
            document.getElementById('billnan-slide2').textContent = f(parseInt(new_add));

            if (this.id == "administration" || this.id == "misc1") {
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

    [document.getElementById('spare-1'), document.getElementById('spare-2'), document.getElementById('spare-3')].forEach(function (element) {
        element.addEventListener("change", function () {

            console.log("In spare class");

            var sp1 = document.getElementById('spare-1').value;
            document.getElementById('spare-1').value = f(sp1)
            var sp2 = document.getElementById('spare-2').value;
            document.getElementById('spare-2').value = f(sp2);
            var sp3 = document.getElementById('spare-3').value;
            document.getElementById('spare-3').value = f(sp3);


            let p = document.getElementById("billnan-slide2").textContent;

            p = g(p);
            C_res(p);
            if (this.id == "spare-1") {

                let d1 = document.createElement("label");
                d1.setAttribute("id", "additional-cost");
                d1.textContent = "+Additional Purchase Costs:";
                d1.setAttribute("class", "text-right");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "additional-cost-price");
                v1.textContent = " " + f(sp1);
                v1.setAttribute("class", "big-text text-right");

                let p1 = document.createElement("span");
                p1.setAttribute("class", "big-text");
                p1.textContent = "€";

                var pt= document.querySelector("#upper-part");

                pt.appendChild(d1);
                pt.appendChild(v1);
                pt.appendChild(p1);


            }

            if (this.id == "spare-2") {

                let d1 = document.createElement("label");
                d1.setAttribute("id", "broker-cost");
                d1.textContent = "+Brokerage Fees:";
                d1.setAttribute("class", "text-right");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "broker-cost-price");
                v1.textContent = " " + f(sp2);
                v1.setAttribute("class", "big-text text-right");

                let p1 = document.createElement("span");
                p1.setAttribute("class", "big-text");
                p1.textContent = "€";

                var pt= document.querySelector("#upper-part");

                pt.appendChild(d1);
                pt.appendChild(v1);
                pt.appendChild(p1);


            }
            if (this.id == "spare-3") {

                var br1 = document.createElement("br");

                let d1 = document.createElement("label");
                d1.setAttribute("id", "misc-cost");
                d1.textContent = "+Miscalleneous:";
                d1.setAttribute("class", "text-right");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "misc-cost-price");
                v1.textContent = " " + f(sp3);
                v1.setAttribute("class", "big-text text-right");

                let p1 = document.createElement("span");
                p1.setAttribute("class", "big-text");
                p1.textContent = "€";

                var pt= document.querySelector("#upper-part");

              
                pt.appendChild(d1);
                pt.appendChild(v1);
                pt.appendChild(p1);


            }

            //  C_res();
        })

    });
}

[document.getElementById('rent-value')].forEach(function (element) {
    element.addEventListener("change", function () {


        var rent1 = document.getElementById('rent').value;
        document.getElementById('rent').value = f(rent1);
        var rent2 = document.getElementById('rent-value').value;
        document.getElementById('rent-value').value = f(rent2)

        document.getElementById('hidden-bill').style.display = 'block';

        var result = g(rent1) * (g(rent2) / 100);
      

        document.getElementById('bill3-slide2').textContent = f(parseInt(rent1) + parseInt(result));

        document.getElementById('bill4-slide2').textContent = f(parseInt(rent1) + parseInt(2 * result));

        document.getElementById('bill5-slide2').textContent = f(parseInt(rent1) + parseInt(3 * result));


    })
})


$(document).ready(function () {

    [document.getElementById('rent'), document.getElementById('tax-benefit')].forEach(function (element) {
        element.addEventListener("change", function () {

            var rent = document.getElementById('rent').value;
            document.getElementById('rent').value = f(rent)
            var tax = document.getElementById('tax-benefit').value;
            document.getElementById('tax-benefit').value = f(tax)
            var diff = document.getElementById('billnan-slide2').textContent;
            document.getElementById('billnan-slide2').textContent = f(diff);


            var new_add = Number(g(rent)) + Number(g(tax));
            var deduct = Number(g(diff)) - (Number(new_add));

            document.getElementById('bill1-slide2').textContent = f(parseFloat(new_add));

            //deductible
            document.getElementById('bill2-slide2').textContent = f(parseFloat(deduct));
            document.getElementById('slide2-cont').textContent = f(parseFloat(deduct))

            let p = document.getElementById("billnan-slide2").textContent;

            p = g(p);
            C_res(p);
        });
    });

});

function called() {

    var rent = document.getElementById('rent').value;
    document.getElementById('rent').value = f(rent)
    var tax = document.getElementById('tax-benefit').value;
    document.getElementById('tax-benefit').value = f(tax)
    var diff = document.getElementById('billnan-slide2').textContent;
    document.getElementById('billnan-slide2').textContent = f(diff);


    var new_add = Number(g(rent)) + Number(g(tax));
    var deduct = Number(g(diff)) - (Number(new_add));


    document.getElementById('bill1-slide2').textContent = f(parseFloat(new_add));

    document.getElementById('bill2-slide2').textContent = f(parseFloat(deduct));
    document.getElementById('slide2-cont').textContent = f(parseFloat(deduct));
}
//EQUITY CAPITAL PART 2
$(document).ready(function () {

    [document.getElementById('price'), document.getElementById('capital-2'), document.getElementById('capital')].forEach(function (element) {

        element.addEventListener('change', function () {


            var kauf = document.getElementById('price').value;
            document.getElementById('price').value = f(kauf);
            document.getElementById('purchase-p2').value = f(kauf);

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




            // console.log(ll, pp, m);

            // console.log("KAUFPREIS price: " + kauf);
            document.getElementById('interest').value = (ans1);
            document.getElementById('repayment').value = (ans2);

            let ue = ans1 + ans2;
            // console.log(kauf, equity, ans1, ans2, ue, duration);
            let w = 2;

            let oe = g(kauf) - g(equity);
            for (let r = 0;
                r < 12 * Number(duration);
                ++r) {
                oe -= ue - oe * (.01 * w / 12)
            }

            if (this.id == 'capital') {
                console.log("equity capital to capital2");
                document.getElementById("capital-2").value = this.value;

                let ob = g(kauf) - 0;
                for (let r = 0;
                    r < 12 * Number(duration);
                    ++r) {
                    ob -= ue - ob * (.01 * w / 12)
                }
                console.log(oe, ob);
                let answer_equity = Math.round(ob) - Math.round(oe);
                let profit1 = g(document.getElementById("output-profit").value);
                answer_equity = answer_equity + profit1;
                document.getElementById("output-profit").value = f(answer_equity);


                let price = g(document.getElementById("output-price").value);

                document.getElementById("output-loan").value = f(price - answer_equity);

            }
            if (this.id == 'capital-2') {
                console.log("capital2 to equity capital");
                document.getElementById("capital").value = this.value;
            }
        


            if (this.id == "capital-2" || this.id == "capital") {


                let d1 = document.createElement("label");
                d1.setAttribute("id", "equity-cost");
                d1.textContent = "+Equity:";
                d1.setAttribute("class", "text-right");

                let v1 = document.createElement("span");
                v1.setAttribute("id", "equity-cost-price");
                v1.setAttribute("class", "big-text text-right");

                if (this.id == 'capital') {
                    v1.textContent = " " + f(equity);
                }
                else {
                    v1.textContent = " " + f(capital2);
                }


                let p1 = document.createElement("span");
                p1.setAttribute("class", "big-text");
                p1.textContent = "€";


                var pt= document.querySelector("#upper-part");

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


    [document.getElementById('property-value-price'), document.getElementById('depreciation-price'), document.getElementById('price')].forEach(function (element) {

        element.addEventListener('change', function () {

            var kauf = document.getElementById('price').value;
            document.getElementById('price').value = f(kauf);
            var value = document.getElementById("property-value-price").value;
            document.getElementById("property-value-price").value = f(value);
            var dp = document.getElementById("depreciation-price").value;
            document.getElementById("depreciation-price").value = f(dp);

            document.getElementById("property-value-percent1").value = l(parseFloat(g(value) / 2000));

            var Afa = (g(kauf) - g(value)) * g(dp) / 100;

            var Afa2 = Afa / 12;
            document.getElementById("Afa-price").value = f(Math.round(Afa));
            document.getElementById("afa-price2").value = f(Math.round(Afa2));


        })

    })

});

function tax() {
    $(document).ready(function () {
        document.getElementById('page2-part2').style.display = 'block';
        document.getElementById('page2-part1').style.display = 'none';

    })
}

$(document).ready(function () {
    $('#rent').change(function () {
        $('#rental-price').val(f($('#rent').val()));
    });
});



$(document).ready(function () {
    $('#administration').change(function () {
        $('#administration-price').val(f($('#administration').val()));
    });
});


$(document).ready(function () {
    $('#interest').change(function () {
        $('#interest-price').val(f($('#interest').val()));
        built();
    });
});


$(document).ready(function () {

    [document.getElementById('headset-price'), document.getElementById('rental-price'), document.getElementById('other-income-price'),
    document.getElementById('other-expense-price'), document.getElementById('afa-price2'), document.getElementById('administration-price'),
    document.getElementById('interest-price')
    ].forEach(function (element) {

        element.addEventListener('change', function () {


            var G = document.getElementById('headset-price').value;
            document.getElementById('headset-price').value = f(G);
            var V = document.getElementById('rental-price').value;
            document.getElementById('rental-price').value = f(V);
            var Z = document.getElementById('other-income-price').value;
            document.getElementById('other-income-price').value = f(Z);
            var X = document.getElementById('other-expense-price').value;
            document.getElementById('other-expense-price').value = f(X);

            var p = document.getElementById('afa-price2').value;
            document.getElementById('afa-price2').value = f(p);

            var k = document.getElementById('administration-price').value;

            document.getElementById('administration-price').value = f(k);
            var ce = document.getElementById('interest-price').value;
            document.getElementById('interest-price').value = f(ce);



            var xe = g(V) + g(Z) - g(X) - g(p) - g(k) - g(ce);
            var we = Math.round(xe * g(G) / -100);
            document.getElementById('tax-benefit-price').textContent = f(parseInt((we)));

            // C_res()
        })
    })
})

function benefit() {
    document.getElementById('page2-part1').style.display = 'block';
    document.getElementById('page2-part2').style.display = 'none';


    var p = document.getElementById("tax-benefit-price").textContent;
    document.getElementById('tax-benefit').value = f(p);

    called();
}

function benefit2() {

    document.getElementById('page2-part2').style.display = 'none';
    document.getElementById('page2-part1').style.display = 'block';

    let p = document.getElementById('tax-benefit').value;

    let v = document.getElementById('bill2-slide2').textContent;
    let q = document.getElementById('bill1-slide2').textContent;

    document.getElementById('bill2-slide2').textContent = f(parseInt(g(v)) - parseInt(g(p)));
    document.getElementById('bill1-slide2').textContent = f(parseInt(g(q)) - parseInt(g(p)));


    document.getElementById('tax-benefit').value = 0;
}


function val_be() {

    let V = (document.getElementById("rental-price").value);
    let I = (document.getElementById("rent-value").value);
    let d = (document.getElementById("duration").value);


    let e = 12 * parseInt(g(V));
     t = 0;

    for (let a = 0; a < parseInt(g(d)); ++a) {
        t += e;
        a % 3 == 0 && (e *= 1 + parseInt(g(I)) / 100);
    }
    // console.log("value of t" + t);
    return t



}



function C_res(hh) {


    let P = (document.getElementById("spare-1").value);
    let A = (document.getElementById("spare-2").value);
    let W = (document.getElementById("spare-3").value);
    let K = (document.getElementById("capital-2").value);
    let f = (document.getElementById("billnan-slide2").textContent);
    let z = (document.getElementById("tax-benefit").value);
    let time = (document.getElementById("duration").value);


    var be = val_be();


    var Ne = parseInt(g(P)) + parseInt(g(W)) + parseInt(g(A)) + parseInt(g(K)) + 12 * (hh) - parseInt(g(z)) * parseInt(g(time)) - be;

    Ne = parseInt(Ne);


   Ne = Ne * time;
    Ne = Ne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



    document.getElementById("total-contribution").textContent = Ne ;
    document.getElementById("total-contribution-part2").textContent = "€" + Ne;
    document.getElementById("piggy-site-result").textContent = Ne + "€";


    //percentage 

    let part2 = document.getElementById("output-profit").value;

    //percentage 
    let pe = document.getElementById("output-loan").textContent;

    let ans = Math.abs(Math.round(100 * (pe / Ne - 1)), " %")

    document.getElementById("return-on-equity").textContent = ans + "%";
    //    return-on-equity


    let answer = parseInt(g(part2)) - parseInt(g(Ne));
    document.getElementById("piggy-site-result-final").textContent = (answer).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "€";


}

[document.getElementById("price"), document.getElementById("duration")].forEach(function (element) {

    element.addEventListener('change', function () {

        let P = (document.getElementById("spare-1").value);
        let A = (document.getElementById("spare-2").value);
        let W = (document.getElementById("spare-3").value);
        let K = (document.getElementById("capital-2").value);
        let f = (document.getElementById("billnan-slide2").textContent);
        let z = (document.getElementById("tax-benefit").value);
        let time = (document.getElementById("duration").value);

        document.getElementById('year').textContent = time;
        document.getElementById('year2').textContent = time;
        document.getElementById('year-span').textContent = time;

 
        var be = val_be();


        var Ne = parseInt(g(P)) + parseInt(g(W)) + parseInt(g(A)) + parseInt(g(K)) + 12 * (parseInt(g(f)) - parseInt(g(z))) * parseInt(g(time)) - be;

        Ne = parseInt(Ne);


        Ne = Ne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")



        let profit = document.getElementById("output-profit").value;

 
        result = Ne - g(profit);
  
        document.getElementById("total-contribution").textContent = Ne;
        document.getElementById("total-contribution-part2").textContent = " €" + Ne;
        document.getElementById("piggy-site-result").textContent = Ne + " €";
        let part2 = document.getElementById("output-profit").value;



        //percentage 
        let pe = document.getElementById("output-loan").textContent;

        let ans = Math.abs(Math.round(100 * (pe / Ne - 1)), " %")

        document.getElementById("return-on-equity").textContent = ans + "%";
        //    return-on-equity


        let answer = parseInt(g(part2)) - parseInt(g(Ne));
        document.getElementById("piggy-site-result-final").textContent = (answer).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "€";


    })

})