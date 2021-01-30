document.getElementById('first-class-ticket-increment').addEventListener('click', function () {
    ticketHandle('first-class', true);  
})

document.getElementById('first-class-ticket-decrement').addEventListener('click', function () {
    ticketHandle('first-class', false);  
})

document.getElementById('economy-class-ticket-increment').addEventListener('click', function () {
    ticketHandle('economy', true); 
})

document.getElementById('economy-class-ticket-decrement').addEventListener('click', function () {
    ticketHandle('economy', false); 
})

function ticketHandle(ticket, isIncreasing) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncreasing == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncreasing == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    totalCalculation();
}

function getInputValue(ticket) {
    const numberOfTicket= document.getElementById(ticket + '-count');
    const ticketCount = parseInt(numberOfTicket.value);
    return ticketCount;
}

function totalCalculation() {
    const firstClassTicketCount = getInputValue('first-class');
    const economyTicketCount = getInputValue('economy');

    const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subtotalPrice').innerText = '$' + subTotal;

    const vat = Math.round(subTotal * .1);
    document.getElementById('totalVatPrice').innerText = '$' + vat;

    const Total = subTotal + vat;
    document.getElementById('totalPrice').innerText = '$' + Total;

}



