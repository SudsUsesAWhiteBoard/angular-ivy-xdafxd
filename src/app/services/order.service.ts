import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OrderService {
  urls = {
    ShipsTodayNextDayCount:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/CountOfNextDayShipmentsShipsToday",
    ShipsTodayOtherCount:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/CountOfNotNextDayShipmentsShipsToday?",
    ShipsLaterNextDayCount:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/CountOfNextDayShipmentsShipsAfterToday?",
    ShipsLaterOtherCount:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/CountOfNotNextDayShipmentsShipsAfterToday?",

    ShipsTodayNextDayItemList:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/NextDayShipmentsShipsToday?",
    ShipsTodayOtherItemList:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/NotNextDayShipmentsShipsToday?",
    ShipsLaterNextDayItemList:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/NextDayShipmentsShipsAfterToday?",
    ShipsLaterOtherItemList:
      "https://directfulfillmentapi20200813154717.azurewebsites.net/api/NotNextDayShipmentsShipsAfterToday?"
  };

  constructor(private http: HttpClient) {}

  printStoreBoxLabels(storeNumber, cartonCount, printerNumber) {
    return this.http.get(
      "https://seamzndfppremise.azurewebsites.net/api/PrintSteinmartCartonLabels/" +
        storeNumber +
        "/" +
        cartonCount +
        "/" +
        printerNumber +
        "/false?code=I7am1TLHHmOqAOznxN4cLMwuPTo65lztq8dxrIyjz9ArflbaoPhzWw=="
    );
  }

  printStorePalletLabels(storeNumber, cartonCount, printerNumber) {
    return this.http.get(
      "https://seamzndfppremise.azurewebsites.net/api/PrintSteinmartCartonLabels/" +
        storeNumber +
        "/" +
        cartonCount +
        "/" +
        printerNumber +
        "/true?code=I7am1TLHHmOqAOznxN4cLMwuPTo65lztq8dxrIyjz9ArflbaoPhzWw=="
    );
  }

  updateSteinPallet(storeNumber, cartonCount, length, width, height, weight) {
    return this.http.get(
      "https://seamzndfppremise.azurewebsites.net/api/UpdateSteinmartPallet/" +
        storeNumber +
        "/" +
        cartonCount +
        "/" +
        length +
        "/" +
        width +
        "/" +
        height +
        "/" +
        weight +
        "?code=QxTZ8EwrLvbt9wRGt1/0rySPnYU7Hhmx2QaKPLMQCpiCkjrvuDl1zw=="
    );
  }

  steinConfirm(storeNumber) {
    return this.http.get(
      "https://seamzndfppremise.azurewebsites.net/api/SteinConfirm/" +
        storeNumber +
        "?code=vNZZBan0TatzTnh2Pf3DHrEaWCdPdaA3C6xja6M0zdnaP0QpFxJrRA=="
    );
  }

  getShipsTodayNexyDayCount() {
    return this.http.get(this.urls.ShipsTodayNextDayCount);
  }

  getShipsTodayOtherCount() {
    return this.http.get(this.urls.ShipsTodayOtherCount);
  }

  getShipsLaterNextDayCount() {
    return this.http.get(this.urls.ShipsLaterNextDayCount);
  }

  getShipsLaterOtherCount() {
    return this.http.get(this.urls.ShipsLaterOtherCount);
  }

  getShipsTodayNextDayItemList() {
    return this.http.get(this.urls.ShipsTodayNextDayItemList);
  }

  getShipsTodayOtherItemList() {
    return this.http.get(this.urls.ShipsTodayOtherItemList);
  }

  getShipsLaterNextDayItemList() {
    return this.http.get(this.urls.ShipsLaterNextDayItemList);
  }

  getShipsLaterOtherItemList() {
    return this.http.get(this.urls.ShipsLaterOtherItemList);
  }

  getItemLabel(labelType, item, printer){

    var url:string = "https://directfulfillmentapi20200813154717.azurewebsites.net/api/";

    switch (labelType) {
      case "ShipsTodayNextDay": {
        url += "GetLabelsToPrintForNextDayShipmentsShipsTodayAndMark";
        break;
      }
      case "ShipsTodayOther": {
        url +="GetLabelsToPrintForNotNextDayShipmentsShipsTodayAndMark";
        break;
      }
      case "ShipsLaterNextDay": {
        url += "GetLabelsToPrintForNextDayShipmentsShipsAfterTodayAndMark";
        break;
      }
      case "ShipsLaterOther": {
        url += "GetLabelsToPrintForNotNextDayShipmentsShipsAfterTodayAndMark";
        break;
      }      
    }

    return this.http.get(url + "/" + item + "/" + printer);

  }


}

//https://seamzndfppremise.azurewebsites.net/api/PrintSteinmartCartonLabels/{storeNO}/{cartonCount}/{printerNO}?code=I7am1TLHHmOqAOznxN4cLMwuPTo65lztq8dxrIyjz9ArflbaoPhzWw==

//https://seamzndfppremise.azurewebsites.net/api/PrintSteinmartCartonLabels/{storeNO}/{cartonCount}/{printerNO}/{isPallet:bool?}?code=I7am1TLHHmOqAOznxN4cLMwuPTo65lztq8dxrIyjz9ArflbaoPhzWw==

//https://seamzndfppremise.azurewebsites.net/api/SteinConfirm/{storeNO}?code=vNZZBan0TatzTnh2Pf3DHrEaWCdPdaA3C6xja6M0zdnaP0QpFxJrRA==
