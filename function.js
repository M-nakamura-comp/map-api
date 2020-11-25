 // Function:地図データの取得
      function getMapdata(){

        //APIにてデータを取得して、位置とマーカーをセットするfunctionを呼び出す
        const request = new XMLHttpRequest();
        const bookid = '1urWNevKEAYL14oFPOpAwIfC28s7Txwt60vMmRbvo7wc';
        const sheetname = 'anypicks';
        const googleapi = 'AIzaSyAhemHfzADNl1J68SGkijRXyQvNLmsri_4';
        const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + bookid + '/values/' + sheetname + '?key=' + googleapi;

        request.open('GET', url, true);
        request.responseType = 'json';

        request.onload = function () {
          const data = this.response;     // 取得できた値を格納
          // 後続処理を記載
        };

        request.send();

      }
