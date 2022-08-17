let storage_enter = localStorage.getItem('enterTime');
let storage_exit = localStorage.getItem('exitTime');
document.getElementById("div1").innerHTML = storage_enter;
document.getElementById("div2").innerHTML = storage_exit;

function myFunction() {
  var data_1 = document.getElementById("input_1");
  storage_enter = storage_enter + ' ' + data_1.value;
  document.getElementById("div1").innerHTML = storage_enter;
  localStorage.setItem('enterTime', storage_enter);

  var data_2 = document.getElementById("input_2");
  storage_exit = storage_exit + ' ' + data_2.value;
  localStorage.setItem('exitTime', storage_exit);
  document.getElementById("div2").innerHTML = storage_exit;


  // var data_3 = data_1.value + ' .  ' + data_2.value;
  // document.getElementById("div3").innerHTML = data_3;


  // const cars = [data_3];
  // let fLen = cars.length;
  // for (let i = 0; i < cars; i++) {
  //   cars[i] + "</li>";
  // }
  // document.getElementById("finall").innerHTML = fLen;
}






