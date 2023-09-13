function Compute(){
    //rate*hours
 var f = parseInt(document.frm.rate.value);
 var s = parseInt(document.frm.hours.value);
 var result = f * s;
 //maxHours&rate
 if(s <=96){
     document.frm.bpay.value = result; 
     }
 else if(s >=96){
     alert("Please Input below 96 Hours");
     reset;
 }else{
     reset;
 }
     //otp*5
 var f = parseInt(document.frm.rate.value);
 var ot = parseInt(document.frm.Overtime.value);
 var result = ot * f || 0;
 document.frm.Otp.value = result; 
     //bpay+otp
 var p = parseInt(document.frm.bpay.value);
 var l = parseInt(document.frm.Otp.value);
 var result = p + l;
 document.frm.gpay.value = result;
     //sssTax
 var ss = document.getElementById("result").value;
     if(ss <= 2250 ){
     document.getElementById("tax").value="80";
     }
     else if(ss >=2250 && ss <=2750){
     document.getElementById("tax").value="100";
     
     }
     else if(ss>=2750 && ss<=3250){
     document.getElementById("tax").value="120";
     
     }
     else if(ss>=3250 && ss<=3750){
     document.getElementById("tax").value="140";
     
     }
     else if(ss>=3750 && ss<=4250){
     document.getElementById("tax").value="160";
     
     }
     else if(ss>=4250 && ss<=4750){
     document.getElementById("tax").value="180";
     
     }
     else if(ss>=4750 && ss<=5250){
     document.getElementById("tax").value="200";
     
     }
     else if(ss>=5250 && ss<=5750){
     document.getElementById("tax").value="220";
     
     }
     else if(ss>=5750 && ss<=6250){
     document.getElementById("tax").value="240";
     
     }
     else if(ss>=6250 && ss<=6750){
     document.getElementById("tax").value="260";
     
     }
     else if(ss>=6750 && ss<=7250){
     document.getElementById("tax").value="280";
     
     }
     else if(ss>=7250 && ss<=7750){
     document.getElementById("tax").value="300";
     
     }
     else if(ss>=7750 && ss<=8250){
     document.getElementById("tax").value="320";
     
     }
     else if(ss>=8250 && ss<=8750){
     document.getElementById("tax").value="340";
     
     }
     else if(ss>=8750 && ss<=9250){
     document.getElementById("tax").value="360";
     
     }
     else if(ss>=9250 && ss<=9750){
     document.getElementById("tax").value="380";
     
     }
     else if(ss>=9750 && ss<=10250){
     document.getElementById("tax").value="400";
     
     }
     else if(ss>=10250 && ss<=10750){
     document.getElementById("tax").value="420";
     
     }
     else if(ss>=10750 && ss<=11250){
     document.getElementById("tax").value="440";
     
     }
     else if(ss>=11250 && ss<=11750){
     document.getElementById("tax").value="460";
     
     }
     else if(ss>=11750 && ss<=12250){
     document.getElementById("tax").value="480";
     
     }
     else if(ss>=12250 && ss<=12750){
     document.getElementById("tax").value="500";
     
     }
     else if(ss>=12750 && ss<=13250){
     document.getElementById("tax").value="520";
     
     }
     else if(ss>=13250 && ss<=13750){
     document.getElementById("tax").value="540";
     
     }
     else if(ss>=13750 && ss<=14250){
     document.getElementById("tax").value="560";
     
     }
     else if(ss>=14250 && ss<=14750){
     document.getElementById("tax").value="580";
     
     }
     else if(ss>=14750 && ss<=15250){
     document.getElementById("tax").value="600";
     
     }
     else if(ss>=15250 && ss<=15750){
     document.getElementById("tax").value="620";
     
     }
     else if(ss>=15750 && ss<=16250){
     document.getElementById("tax").value="640";
     }
     else if(ss>=16250 && ss<=16750){
     document.getElementById("tax").value="660";
     
     }
     else if(ss>=16750 && ss<=17250){
     document.getElementById("tax").value="680";
     
     }
     else if(ss>=17250 && ss<=17750){
     document.getElementById("tax").value="700";
     
     }
     else if(ss>=17750 && ss<=18250){
     document.getElementById("tax").value="720";
     
     }
     else if(ss>=18250 && ss<=18750){
     document.getElementById("tax").value="740";
     
     }
     else if(ss>=18750 && ss<=19250){
     document.getElementById("tax").value="760";
     
     }
     else if(ss>=19250){
     document.getElementById("tax").value="780";
     
     }
     //Philhealth
     var phi = document.getElementById("ph").value="100";
     
     //WitholdingTax
     var wi = document.getElementById("result").value;
     if(wi<= 10417 ){
     document.getElementById("wh").value="0";
     
     }
     else if(wi>= 10417 && wi<=16666){
     document.getElementById("wh").value="0";
     
     }
     else if(wi>= 16667 && wi<=33332){
     document.getElementById("wh").value="1250";
     
     }
     else if(wi>= 33333 && wi<=83332){
     document.getElementById("wh").value="5416";
     
     }
     else if(wi>= 333332 && wi<=383333){
     document.getElementById("wh").value="20416";
     
     }
     else if(wi>=383333){
     document.getElementById("wh").value="100416";
     }
     //totaldeduction
     var n = parseInt(document.frm.sss.value);
     var k = parseInt(document.frm.phealth.value);
     var t = parseInt(document.frm.Tax.value);
     var result = n+k+t;
     document.frm.Total.value = result;
         
         //netpay
     var w = parseInt(document.frm.gpay.value);
     var c = parseInt(document.frm.Total.value);
     var result = w - c;
     document.frm.Npay.value = result;
     
     
  }   