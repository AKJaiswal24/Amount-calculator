function cal(a){
    var index=$(a).parent().parent().index();

    var hun5 = document.getElementsByName("fivehun-qty")[index].value;
    var hund5 = 500 * hun5 ;
    document.getElementsByName("fivehun-amt")[index].value = hund5;
            

            
    var hun2 = document.getElementsByName("huntwo-qty")[index].value;
    var hund2 = 200 * hun2 ;
    document.getElementsByName("huntwo-amt")[index].value = hund2;



    var hun = document.getElementsByName("hunone-qty")[index].value;
    var hund = 100 * hun ;
    document.getElementsByName("hunone-amt")[index].value = hund;


    var fif = document.getElementsByName("fif-qty")[index].value;
    var fifty = 50 * fif ;
    document.getElementsByName("fif-amt")[index].value = fifty ;



    var coins = document.getElementsByName("coin-amt")[index].value;



    var tot_qty = + (hun5) + + (hun2) + + (hun) + + (fif);
    document.getElementsByName("tot_qty")[index].value = tot_qty ;
    var total_amt = + (hund5 ) + + (hund2) + + (hund) + + (fifty) + + (coins) ;
    document.getElementsByName("tot_amt")[index].value = total_amt ;
}
