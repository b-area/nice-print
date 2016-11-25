function printDiv(divID)
{
    //Maka elemnt par div ID
    var divElements = document.getElementById(divID).innerHTML;

    //Maka page jiaby
    var oldPage = document.body.innerHTML;

    //Reset the page's HTML with div's HTML only
    // TODO: Mety mila amboarinao kely eto
    document.body.innerHTML =
      "<html><head><title></title></head><body>" +
      divElements + "</body>";

    //Toy no mi-print azy (afaka sauver-nao pdf)
    window.print();

    // Mamerina page apres print
    document.body.innerHTML = oldPage;
}
